const MenyModule = ( function (){

    //meny-array
    const meny = [
        {name: "Pesto Salat", price: 90, recipe: ["Pesto","kylling","gulrot","tomat"], type: "Salat", image: "Pesto Salat.png"},
        {name: "Gresk Salat", price: 90, recipe: ["fetaost", "sennep."], type: "Salat", image: "Gresk Salat.png"},
        {name: "Avokado Salat", price: 90, recipe: ["avokodao","tomat","kylling","tzatziki"], type: "Salat", image: "Avokado Salat.png"},
        {name: "Nachos Salat", price: 90, recipe: ["nachos","mais","løk","avokado"], type: "Salat", image: "Nachos Salat.png"},
        {name: "Cola Zero", price: 45, recipe: "", type: "Drikker", image: "zero.png"},
        {name: "Coca Cola", price: 45, recipe: "", type: "Drikker", image: "coca cola.png"},
        {name: "Sprite", price: 45, recipe: "", type: "Drikker", image: "sprite.png"},
        {name: "Øl", price: 79, recipe: "", type: "Drikker", image: "ol.png"},
        {name: "Margherita", price: 120, recipe: ["Tomatsaus", "røkt mozzarella", "extra virgin olivenolje med basilikum."], type: "Pizza", image: "Margherita.jpg"},
        {name: "BBQ Beef", price: 120, recipe: ["Marinert biffkjøtt", "BBQ-saus", "paprika"], type: "Pizza", image: "BBQ Beef.PNG"},
        {name: "Cheese", price: 120, recipe: ["gorgonzola","ricotta","parmesan."], type: "Pizza", image: "Cheese.PNG"},
        {name: "Knock Out", price: 120, recipe: ["biff","kylling","pølse","paprika","rødløk"], type: "Pizza", image: "Knock Out.png"},
        {name: "Pepperoni", price: 120, recipe: ["pepperoni","oliven","paprika","mais","pølse."], type: "Pizza", image: "Pepperoni.PNG"},
        {name: "Skinke", price: 120, recipe: ["skine","jalapeno","paprika","sjampinjong","purre."], type: "Pizza", image: "Skinke.PNG"},
        {name: "Spicy Chicken", price: 120, recipe: ["Spicy kylling", "paprika", "rødløk."], type: "Pizza", image: "Spicy Chicken.PNG"},
        {name: "Green Day", price: 120, recipe: ["Oliven", "sjampinjong", "rødløk", "mais", "hvitløk", "parmesan", "tomater"], type: "Pizza", image: "Green Day.PNG"}
    ];

    const getMenyByName = ( name ) => {
        return meny.filter( menyName => menyName.name === name);
    }

    const getMenyByType = ( type ) => {
        return meny.filter( menyType => menyType.type === type);
    }

    const getMenyByRecipe = ( recipe ) => {
        return meny.filter( menyRecipe => menyRecipe.recipe === recipe);
    }
  

    //returner alle meny
    const getAllMeny = () => meny;

    //eksponerer getAllMeny funksjonen
    return {getAllMeny, getMenyByName, getMenyByType, getMenyByRecipe};






}());

export default MenyModule;