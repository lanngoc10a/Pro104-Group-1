import SalesModule from "../Modules/SalesModule.js"
const salesOutput = document.querySelector("#sales-info")
const dropdown = document.querySelector("#dropdown")
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
            <option> ${element} </option>
        `
    })

    dropdown.innerHTML = html;
}


generateTotalSales();
generateDropdown();
