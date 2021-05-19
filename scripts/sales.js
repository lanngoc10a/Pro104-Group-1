import SalesModule from "../Modules/SalesModule.js"
const salesOutput = document.querySelector("#sales-info")

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


generateTotalSales();
