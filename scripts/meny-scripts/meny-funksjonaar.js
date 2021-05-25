import MenyModule from '../../Modules/MenyModule.js'

    /* henter id-selektorene fra html filen */
    const addMenySection = document.querySelector("#meny-function");
    const menySection = document.querySelector("#meny-section");
    const removeMenyFunction = document.querySelector("#remove-meny-function");
    const changeMenyFunction = document.querySelector("#change-meny-function");

    

    

                /***** LEGGE TIL NY MENY *****/


  /* Printer ut funksjonsboksen hvor man skriver inn input */
    const addMeny = () => {
        let htmlTxt = "";

        htmlTxt += `
        <!-- NAVN -->
        <div class="columns box">
                <article class="column">
                    <div class="field">
                        <label class="label">Legg til +</label>  
                        <p class="control has-icons-left has-icons-right">
                            <input id="name-input" class="input" type="text" placeholder="e.g Chicken Pizza">
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                            <span class="icon is-small is-left">
                                <i class="fas fa-pizza-slice"></i>
                            </span>
                        </p>
                    </div>

        <!-- Pris -->
                 <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input id="price-input" class="input" type="text" placeholder="e.g 55 kr">
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                            <span class="icon is-small is-left">
                                <i class="fas fa-dollar-sign"></i>
                            </span>
                        </p>
                    </div>

        <!-- Ingredienser -->
                 <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input id="recipe-input" class="input" type="text" placeholder="e.g Ingredienser">
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                            <span class="icon is-small is-left">
                                <i class="fas fa-pepper-hot"></i>
                            </span>
                        </p>
                    </div>
            
                <!-- TYPE -->
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <div class="select">
                                <select id="type-input">
                                    <option>Pizza</option>
                                    <option>Salat</option>
                                    <option>Drikker</option>           
                                </select>
                            </div>
                        </p>
                    </div>
            
    
             <!-- KNAPP -->
                        <div class="buttons">
                            <button id="add-food-button" class="button">Legg til +</button>
                        </div>
                </article>
        </div>
        `;
        addMenySection.innerHTML += htmlTxt;

    }

    
    const addMenyButton = () => {
        
        /* input-felt */

        const typeInput = document.querySelector("#type-input");
        let type = typeInput;

        const nameInput = document.querySelector("#name-input");
        let name = nameInput;

        const recipeInput = document.querySelector("#recipe-input");
        let recipe = recipeInput;
        
        const priceInput = document.querySelector("#price-input");
        let price = priceInput;
        
        /* knapp med eventListener */
        document.querySelectorAll("#add-food-button").forEach( button => {
            button.addEventListener("click", ( e ) => {
                type = typeInput.options[typeInput.selectedIndex].text;
                name = nameInput.value;
                recipe = recipeInput.value;
                price = priceInput.value;


                if(type === "Pizza"){
                    menySection.innerHTML += `
                        <article class="column is-2 has-text-centered">
                            <img src="../Images/meny/add-new-food/Pizza.png" alt="Photo of ${name}">
                            <p class="subtitle is-6">Pris: ${price} ,- </p>
                            <h3 class="title is-3">${name}</h3>
                            <p class="subtitle is-6"> Inneholder: ${recipe}</p>
                        </article>
                    `;
                }else if(type === "Salat"){
                    menySection.innerHTML += `
                        <article class="column is-2 has-text-centered">
                            <img src="../Images/meny/add-new-food/en-ny-salat.png" alt="Photo of ${name}">
                            <p class="subtitle is-6">Pris: ${price} ,- </p>
                            <h3 class="title is-3">${name}</h3>
                            <p class="subtitle is-6"> Inneholder: ${recipe}</p>
                        </article>
                    `; 
                 }else if (type === "Drikker"){
                    menySection.innerHTML += `
                        <article class="column is-2 has-text-centered">
                            <img src="../Images/meny/add-new-food/ny-drikke.png" alt="Photo of ${name}">
                            <p class="subtitle is-6">Pris: ${price} ,- </p>
                            
                            <h3 class="title is-3">${name}</h3>
                            <p class="subtitle is-6"> Inneholder: ${recipe}</p>
                        </article>
                    `; 
                }   
                 
            })
                
        })
    } 
    addMeny();
    addMenyButton();