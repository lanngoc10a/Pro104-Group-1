import SalesModule from "../Modules/SalesModule.js"
/* html elementer */
const salesOutput = document.querySelector("#sales-info")
const dropdown = document.querySelector("#dropdown")
const saleSearchOutput = document.querySelector("#sale-search-output")
const yearlySales = document.querySelector("#yearly-sales")
const monthlySales = document.querySelector("#monthly-sales")
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
    <h2 class="title">Salg per restaurant</h2>
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

    yearlySales.innerHTML= `
    <p class="title">
            Salg i 2021: <span class="yearly-text">${total.toLocaleString()},-</span>
            
    </p>
    
        `;
}

function getSalesPerMonth(sales) {
    let result = [0,0,0,0,0,0,0,0,0,0,0,0]
    sales.forEach(element => {
        switch(element.dateOfPurchase.getMonth()){
            case 0:
                result[0] += element.price;
                break;
            case 1:
                result[1] += element.price;
                break;
            case 2:
                result[2] += element.price;
                break;
            case 3:
                result[3] += element.price;
                break;
            case 4:
                result[4] += element.price;
                break;
            case 5:
                result[5] += element.price;
                break;
            case 6:
                result[6] += element.price;
                break;
            case 7:
                result[7] += element.price;
                break;
            case 8:
                result[8] += element.price;
                break;
            case 9:
                result[9] += element.price;
                break;
            case 10:
                result[10] += element.price;
                break;
            case 11:
                result[11] += element.price;
                break;
        }
    })
    return result;
}
/* 
start  test med monthly sales
*/ 

function getMonthlySalesForAll() {
    // getting item objects from restaurants 
    let arrayWithSales = []
    restaurants.forEach(element=>{
        arrayWithSales.push(element.getSaleObjectsFromYear(2021))
    });

    // adding them to one array.
    let arrayWithCombinedSales = []
    arrayWithSales.forEach(element => {
        element.forEach(sale => {
            arrayWithCombinedSales.push(sale);
        })
        
    })
    return getSalesPerMonth(arrayWithCombinedSales)
}

function getValuesFromTotal(total) {
    let values = []

    /* finnner høyeste */
    let highest = 0;
    
    total.forEach(element =>{
        if(element>highest){
            highest=element
        }
    })
    //console.log(highest)
        /* finner prosenten av den høyeste for de forskjellige totalene */
    for(let i = 0; i < total.length; i++) {
        values.push(percentOf(total[i], highest))
    }

    return values;
}

//eventlistner, skal endre månedlig salg ved valg av restaurant
console.log(document.querySelectorAll('input[name="restaurant"]'))
//slutt


// MIDLERTIDIG
function generateMonthlySales(sales, restaurantName) {
    
    let html = "";
    html = `
    <p class="title">Salgstrend per mnd - for ${restaurantName}</p>
    
    <div class="earning-columns">
        <div class="monthly-column earning-column" style="height:${sales[0]}%"></div>
        <div class="monthly-column earning-column" style="height:${sales[1]}%"></div>
        <div class="monthly-column earning-column" style="height:${sales[2]}%"></div>
        <div class="monthly-column earning-column" style="height:${sales[3]}%"></div>
        <div class="monthly-column earning-column" style="height:${sales[4]}%"></div>
        <div class="monthly-column earning-column" style="height:${sales[5]}%"></div>
        <div class="monthly-column earning-column" style="height:${sales[6]}%"></div>
        <div class="monthly-column earning-column" style="height:${sales[7]}%"></div>
        <div class="monthly-column earning-column" style="height:${sales[8]}%"></div>
        <div class="monthly-column earning-column" style="height:${sales[9]}%"></div>
        <div class="monthly-column earning-column" style="height:${sales[10]}%"></div>
        <div class="monthly-column earning-column" style="height:${sales[11]}%"></div>
    </div>
    <div class="is-flex is-justify-content-space-evenly">
        <p>Jan</p>
        <p>Feb</p>
        <p>Mars</p>
        <p>Apr</p>
        <p>Mai</p>
        <p>Juni</p>
        <p>Juli</p>
        <p>Aug</p>
        <p>Sept</p>
        <p>Okt</p>
        <p>Nov</p>
        <p>Des</p>
    </div> 
    `
    monthlySales.innerHTML = html;
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
    //console.log(highest)
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
    let counter = 0;
    restaurants.forEach(restaurant => {
        html += `
        <label class="radio restaurant-radio">
            <input type="radio" name="restaurant" value="${restaurant.name}" >
            ${restaurant.name}
        </label>
    `;
    counter ++;

});
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
            <h3 class="subtitle">Resultat fra: ${selectedRestaurant}</h3>
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
generateMonthlySales(getValuesFromTotal(getMonthlySalesForAll()),"alle restauranter");
generateTotalSales();
generateDropdown();
