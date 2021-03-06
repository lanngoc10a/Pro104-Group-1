import MenyModule from '../../Modules/MenyModule.js'

    /* henter id-selektorene fra html filen */
    const addMenySection = document.querySelector("#meny-function");
    const menySection = document.querySelector("#meny-section");
    const removeMenyFunction = document.querySelector("#remove-meny-function");
    const changeMenyFunction = document.querySelector("#change-meny-function");

    

    /* oppdatere tab */

    function resetTabs() {
        let activeTabs = document.querySelectorAll(".is-active");
        activeTabs.forEach(tab => tab.classList.toggle("is-active"))
    }
    
                /***** SORTERE MENY Etter type *****/

    const menysType = () => {
        
        let htmlTxt = "";
                MenyModule.getAllMeny().forEach( meny => {
                    htmlTxt += `
                        <article id="${meny.name}" class="column is-3 has-text-centered">
                            <div class="card">
                            <img class="images" src="../Images/meny/${meny.image}" alt="Photo of ${meny.name}">
                            <p class="subtitle is-6"> pris: ${meny.price} ,-</p>
                            <h3 class="title is-3">${meny.name}</h3>
                            </div>
                        </article>
                    `; 
                })
                menySection.innerHTML = htmlTxt;

        document.querySelectorAll("#Pizza").forEach( pizzaTitle => {
            pizzaTitle.addEventListener("click", ( e ) => {
                let htmlTxt = "";
                let type = "Pizza";
                
                MenyModule.getMenyByType( type ).forEach( meny => {
                    htmlTxt += `
                    <article id="${meny.name}" class="column is-3 has-text-centered">
                    <div class="card">
                    <div class="card-image has-text-centered px-6">
                    <img class="images" src="../Images/meny/${meny.image}" alt="Photo of ${meny.name}">
                    <p class="subtitle is-6"> Pris: ${meny.price} ,-</p>
                    <h3 class="title is-3">${meny.name}</h3>
                    <p class="subtitle is-6"> Inneholder: ${meny.recipe}</p>
                    </div>
                    </div>
                    </article>
                    `; 
                })
                menySection.innerHTML = htmlTxt;
                
                /* changing tabs */
                resetTabs();
                document.querySelector("#pizza-li").classList.toggle("is-active");
            })
        })
   
        document.querySelectorAll("#Salat").forEach( salatTitle => {
            salatTitle.addEventListener("click", ( e ) => {
                let htmlTxt = "";
                let type = "Salat";
                
                MenyModule.getMenyByType( type ).forEach( meny => {
                    htmlTxt += `
                    <article id="${meny.name}" class="column is-3 has-text-centered">
                    <div class="card">
                    <div class="card-image has-text-centered px-6">
                    <img class="images" src="../Images/meny/${meny.image}" alt="Photo of ${meny.name}">
                    <p class="subtitle is-6"> Pris: ${meny.price} ,-</p>
                    <h3 class="title is-3">${meny.name}</h3>
                    <p class="subtitle is-6"> Innholder: ${meny.recipe}</p>
                    </div>
                    </div>
                    </article>
                    `; 
                })
                menySection.innerHTML = htmlTxt;
                /* changing tabs */
                resetTabs();
                document.querySelector("#salat-li").classList.toggle("is-active");
            })
        })


        document.querySelectorAll("#Drikker").forEach( drikkerTitle => {
            drikkerTitle.addEventListener("click", ( e ) => {
                let htmlTxt = "";
                let type = "Drikker";
                
                MenyModule.getMenyByType( type ).forEach( meny => {
                    htmlTxt += `
                    <article id="${meny.name}" class="column is-3 has-text-centered">
                    <div class="card">
                    <img  class="images" src="../Images/meny/${meny.image}" alt="Photo of ${meny.name}">
                    <p class="subtitle is-6"> Pris: ${meny.price} ,-</p>
                    <h3 class="title is-3">${meny.name}</h3>
                    </div>
                    </article>
                    `; 
                })
                menySection.innerHTML = htmlTxt;
                /* changing tabs */
                resetTabs();
                document.querySelector("#drikke-li").classList.toggle("is-active");
            })
        })

        document.querySelectorAll("#meny").forEach( alleTitle => {
            alleTitle.addEventListener("click", ( e ) => {
                let htmlTxt = "";
                
                
                MenyModule.getAllMeny().forEach( meny => {
                    htmlTxt += `
                        <article id="${meny.name}" class="column is-3 has-text-centered">
                            <div class="card">
                            <img class="images" src="../Images/meny/${meny.image}" alt="Photo of ${meny.name}">
                            <p class="subtitle is-6"> pris: ${meny.price} ,-</p>
                            <h3 class="title is-3">${meny.name}</h3>
                            </div>
                        </article>
                    `; 
                })
                menySection.innerHTML = htmlTxt;

                /* changing tabs */
                resetTabs();
                document.querySelector("#meny-li").classList.toggle("is-active");
            })
        })
        
    }
    menysType();
    

                /***** FJERNE MENY *****/
    
    const removeMeny = () => {
        let htmlTxt = "";
        
            htmlTxt += `
                <article class="box">
                    <div class="field">
                        <label class="label">Fjern fra Meny </label>
                        <p class="control has-icons-left has-icons-right">
                        <input id="remove-input" class="input" type="text" placeholder="e.g Avokado Salat">
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </p>
                    </div>
                    <div class="buttons">
                        <button id="remove-button" class="button">Fjern</button>
                    </div> 
                </article>
            `;

            removeMenyFunction.innerHTML = htmlTxt;


        document.querySelectorAll("#remove-button").forEach( button => {
            button.addEventListener("click", ( e ) => {
                const removeInput = document.getElementById("remove-input");
                let remove = removeInput.value;
                let response = prompt("Denne handlingen kan ikke angres, vil du fortsette? (Ja/Nei)");
                
                    if(response.toLowerCase().valueOf() === "ja"){
                        document.getElementById(`${remove}`).remove();    
                    } //Prompt for ?? unng?? brukerfeil
            })
        }) 
    }
    removeMeny();

  


                /***** ENDRE P?? MENYEN  *****/
    const modifyMeny = () => {
        let htmlTxt = "";
            
        htmlTxt += `
        <article class="box">
            <label class="label">Endre Innholdet</label>
                <div class="field">
                        <div class="select">
                            <select id="name-input">
                                <option>Pesto Salat</option>     
                                <option>Avokado Salat</option>
                                <option>BBQ Beef</option>
                                <option>Chesse</option>           
                                <option>Coca Cola</option>           
                                <option>Cola Zero</option>           
                                <option>Green Day</option>           
                                <option>Knock Out</option>           
                                <option>Margherita</option>           
                                <option>Gresk Salat</option>           
                                <option>Nacho Salat</option>           
                                <option>??l</option>           
                                <option>Pepperoni</option>           
                                           
                                <option></option>           
                            </select>
                        </div>
                </div>
            
                        
                <!-- Pris-->
                <div class="field">
                         <p class="control has-icons-left has-icons-right">
                         <input id="price-input" class="input" type="text" placeholder="pris">
                         <span class="icon is-small is-right">
                             <i class="fas fa-check"></i>
                         </span>
                         <span class="icon is-small is-left">
                             <i class="fas fa-dollar-sign"></i>
                         </span>
                         </p>
                </div>
                        <!-- Ingredisener-->
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
                        </div>
                    <div class="buttons">
                        <button id="change-button" class="button">Endre</button>
                    </div>               
        </article>
        `;
        changeMenyFunction.innerHTML = htmlTxt;
    }

    

    const modifyMenyButton = () => {
        const nameInput = document.querySelector("#name-input");
        let name = nameInput;

        const priceInput = document.querySelector("#price-input");
        let price = priceInput;


        const recipeInput = document.querySelector("#recipe-input");
        let recipe = recipeInput;


        document.querySelectorAll("#change-button").forEach( button => {
            button.addEventListener("click", ( e ) => {
                let htmlTxt = "";

                name = nameInput.options[nameInput.selectedIndex].text;
                price = priceInput.value;
                recipe = recipeInput.value;
                
                document.getElementById(`${name}`).remove(); //Fjerner f??rst gamle input
                
                //Legger til ny input
                htmlTxt += `
                <article id="${name}" class="column is-3 has-text-centered">
                    <div class="card">
                    <img class="images" src="../images/meny/${name}.png" alt="Photo of ${name}">
                    <p class="subtitle is-6">Pris: ${price} ,- </p>
                    <h3 class="title is-3">${name}</h3>
                    <p class="subtitle is-6"> Inneholder: ${recipe}</p>
                    </div>
                </article>
                `;
                menySection.innerHTML += htmlTxt;
            })
        }) 
    }

    modifyMeny();
    modifyMenyButton();

    
                /***** LEGGE TIL NY MENY *****/


  /* Printer ut funksjonsboksen hvor man skriver inn input */
  const addMeny = () => {
    let htmlTxt = "";

    htmlTxt += `
    <!-- NAVN -->
    <div class="columns box mb-4">
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
                    <article class="column is-3 has-text-centered">
                        <div class="card">
                        <img class="images" src="../Images/meny/add-new-food/Pizza.png" alt="Photo of ${name}">
                        <p class="subtitle is-6">Pris: ${price} ,- </p>
                        <h3 class="title is-3">${name}</h3>
                        <p class="subtitle is-6"> Inneholder: ${recipe}</p>
                        </div>
                    </article>
                `;
            }else if(type === "Salat"){
                menySection.innerHTML += `
                    <article class="column is-3 has-text-centered">
                        <div class="card">
                        <img class="images" src="../Images/meny/add-new-food/en-ny-salat.png" alt="Photo of ${name}">
                        <p class="subtitle is-6">Pris: ${price} ,- </p>
                        <h3 class="title is-3">${name}</h3>
                        <p class="subtitle is-6"> Inneholder: ${recipe}</p>
                        </div>
                    </article>
                `; 
             }else if (type === "Drikker"){
                menySection.innerHTML += `
                    <article class="column is-3 has-text-centered">
                        <div class="card">
                        <img class="images" src="../Images/meny/add-new-food/ny-drikke.png" alt="Photo of ${name}">
                        <p class="subtitle is-6">Pris: ${price} ,- </p>
                        <h3 class="title is-3">${name}</h3>
                        <p class="subtitle is-6"> Inneholder: ${recipe}</p>
                        </div>
                    </article>
                `; 
            }   
             
        })
            
    })
} 
addMeny();
addMenyButton();
