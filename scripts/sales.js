import SalesModule from "../Modules/SalesModule.js"
/* html elementer */
const salesOutput = document.querySelector("#sales-info")
const dropdown = document.querySelector("#dropdown")
const saleSearchOutput = document.querySelector("#sale-search-output")

/* eventlistener */
document.querySelector("#submit-search").addEventListener("click", () => {
    showSaleSearch();
});

/* salgs data
(array med fire "Restaurant" objekter)
*/
const restaurants = SalesModule.getSales();


function generateTotalSales() {
    let statisticValues = getValuesFromTotals();
    let total = 0;
    restaurants.forEach(res => total += res.getTotalSalesFromYear(2021))
    salesOutput.innerHTML = `
    <p class="title">
            Salg for i 2021: ${total.toLocaleString()},-
        </p><br>
    <div class="earning-columns">
        <div class="earning-column" style="height:${statisticValues[0]}%"></div>
        <div class="earning-column" style="height:${statisticValues[1]}%"></div>
        <div class="earning-column" style="height:${statisticValues[2]}%"></div>
        <div class="earning-column" style="height:${statisticValues[3]}%"></div>
    </div> 
    <div class="restaurant-earnings">
        <p>${restaurants[0].name}: ${restaurants[0].getTotal().toLocaleString()},- </p>
        <p>${restaurants[1].name}: ${restaurants[1].getTotal().toLocaleString()},-</p>
        <p>${restaurants[2].name}: ${restaurants[2].getTotal().toLocaleString()},-</p>
        <p>${restaurants[3].name}: ${restaurants[3].getTotal().toLocaleString()},-</p>
    </div>
        <br>
    `;
}

function getValuesFromTotals() {
    let values = []
    let totals = []
    restaurants.forEach(restaurant => {
        totals.push(restaurant.getTotal());
    })

    /* finnner høyeste */
    let highest = 0;
    
    totals.forEach(element =>{
        if(element>highest){
            highest=element
        }
    })
    console.log(highest)
    /* finner prosenten av den høyeste for de forskjellige totalene */
    for(let i = 0; i < totals.length; i++) {
        values.push(percentOf(totals[i], highest))
    }

    return values;
}

function percentOf(x, y) {
    return (x/y) * 100;
} 

function generateDropdown() {
    let html = "";
    let menuItems = [
        "pizza 1",
        "pizza 2",
        "pizza 3",
        "pizza 4",
        "calzone",
        "øl",
        "brus"
    ]
    menuItems.forEach(element => {
        html+= `
            <option value="${element}"> ${element} </option>
        `
    })

    dropdown.innerHTML = html;
}

function generateRestaurantChoice () {
    let html = "";
    restaurants.forEach(restaurant => {
        html += `
        <label class="radio">
            <input type="radio" name="restaurant" value="${restaurant.name}">
            ${restaurant.name}
        </label>
    `;});
    document.querySelector("#restaurant-choice").innerHTML = html;
}

function showSaleSearch() {
    let html = "";

    let chosenItem = dropdown.value;
    let selectedRestaurant;
    document.querySelectorAll('input[name="restaurant"]').forEach(choice => {
        if(choice.checked){
            selectedRestaurant = choice.value;
        }
    })
    if(selectedRestaurant != undefined){

   
    let selectedRestaurantObject = restaurants.find(res => res.name === selectedRestaurant)
    let itemTotal = selectedRestaurantObject.getItemTotal(chosenItem)
    let itemAmount = selectedRestaurantObject.getItemAmount(chosenItem)
    html += `
        <div class="card">
            <h2 class="title">${chosenItem}</h2>
            <p>Total inntjening: ${itemTotal.toLocaleString()},-<p>
            <p>Antall solgte enheter: ${itemAmount.toLocaleString()}</p>
        </div>
    `;
    saleSearchOutput.innerHTML = html;
    } else {
        saleSearchOutput.innerHTML = `<p class="help is-danger">Velg en restaurant</p>`
    }
}

generateRestaurantChoice();
generateTotalSales();
generateDropdown();
