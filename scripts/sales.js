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
    let total = 0;
    restaurants.forEach(res => total += res.getTotalSalesFromYear(2021))
    salesOutput.innerHTML += `
        <p>
            total solgt for i 2021: ${total.toLocaleString()},-
        </p>
        <br>
        <p>
            ${restaurants[0].name}: ${restaurants[0].getTotal().toLocaleString()},- <br>
            ${restaurants[1].name}: ${restaurants[1].getTotal().toLocaleString()},- <br>
            ${restaurants[2].name}: ${restaurants[2].getTotal().toLocaleString()},- <br>
            ${restaurants[3].name}: ${restaurants[3].getTotal().toLocaleString()},- 
        </p>
    `
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
