output = document.querySelector("#salg-info");

class Item {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class Restaurant {
    constructor(name, productsSold) {
        this.name = name;
        this.productsSold = productsSold;
    }
    getTotal = () => {
        let total = 0;
        this.productsSold.forEach(element => {
            total += element.price;
        });
        return total;
    }

    getItemTotal = itemName => {
        let total = 0;
        this.productsSold.forEach(element => {
            if(element.name.toLowerCase() === itemName.toLowerCase()){
                total += element.price
            }
        })
        return total
    }

    getItemAmount = itemName => {
        let total = 0;
        this.productsSold.forEach(element => {
            if(element.name.toLowerCase() === itemName.toLowerCase()){
                total ++;
            }
        })
        return total;
    }
}
let itemArray = []
itemArray.push(new Item("pizza", 175));
itemArray.push(new Item("calzone", 250));
itemArray.push(new Item("pizza", 175));
itemArray.push(new Item("øl", 70));
itemArray.push(new Item("pizza", 175));
itemArray.push(new Item("calzone", 250));
itemArray.push(new Item("øl", 70));
itemArray.push(new Item("øl", 70));
itemArray.push(new Item("øl", 70));
let resA = new Restaurant("k", itemArray);

console.log(resA.getItemTotal("pizza"))
console.log(resA.getItemAmount("pizza"))

