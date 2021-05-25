const SalesModule = (function () {
    class Item {
        constructor(name, price, dateOfPurchase){
            this.name = name;
            this.price = price;
            this.dateOfPurchase = dateOfPurchase;
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
                    total += element.price;
                }
            })
            return total;
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

        getTotalSalesFromYear = year => {
            let total = 0;
            this.productsSold.forEach(element => {
                if(element.dateOfPurchase.getFullYear() === year){
                    total += element.price;
                }
            })
            return total;
        }
        
        getSaleObjectsFromYear = year => {
            let result = []
            this.productsSold.forEach(element => {
                if(element.dateOfPurchase.getFullYear() === year) {
                    result.push(element);
                }
            });
            return result;
        }

    }
    
    const randomItem = () => {
        let menuItems = MenyModule.getAllMeny();
        let randomItemIndex = Math.floor(Math.random() * menuItems.length);
        
        let randomDate = faker.date.between('2021-01-01', new Date().toString());
        return new Item(menuItems[randomItemIndex].name,
             menuItems[randomItemIndex].price,
             randomDate);
    }

    const randomSales = () => {
        
        let itemArray = []
        let randomSalesNumber = Math.floor(Math.random() *25000)
        for(let i = 0; i < randomSalesNumber; i++) {
            itemArray.push(randomItem());
        }
        return itemArray;
    }
    
    let restaurantOne = new Restaurant("restaurant 1", randomSales());
    let restaurantTwo = new Restaurant("restaurant 2", randomSales());
    let restaurantThree = new Restaurant("restaurant 3", randomSales());
    let restaurantFour = new Restaurant("restaurant 4", randomSales());
    
    const getSales = () => {
        let restaurants = [restaurantOne, restaurantTwo, restaurantThree, restaurantFour]
        return restaurants;
    }
    return { getSales }
}() );

export default SalesModule;