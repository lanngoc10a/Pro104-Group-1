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

//popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

// tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'))
        tab.classList.add('is-active');

        const target = tab.dataset.target;
        tabContentBoxes.forEach(box => {
            if (box.getAttribute('id') === target) {
                box.classList.remove('is-hidden');   
            } else {
                box.classList.add('is-hidden');
            } 
        });
    })
})


//modal
const recipeButton = document.querySelector('.recipe');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

recipeButton.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
})