var newTittleTxt = document.getElementById("add-tittel-txt");
var addRecipeTxt =document.getElementById("add-recipe-txt");
var addnewRecipeBtn= document.getElementById("add-recipe-btn"); 
var addRecipeUl =document.getElementById("add-recipe-ul");

var newTittle;
var addRecipe;

function addnewRecipe(){
    newTittle = newTittleTxt.value;
    addRecipeUl.innerHTML += `<h1>${newTittle}</h1>`;

    addRecipe = addRecipeTxt.value;
    addRecipeUl.innerHTML += `<p >  ${addRecipe} . </p>`;
}
addnewRecipeBtn.onclick = addnewRecipe;