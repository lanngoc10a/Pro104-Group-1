    import EmployeeModule from '../../Modules/EmployeeModule.js'

    /* henter id-selektorene fra html filen */
    const addEmployeeSection = document.querySelector("#employee-function");
    const employeeSection = document.querySelector("#employee-section");
    const removeEmployeeFunction = document.querySelector("#remove-employee-function");
    const changeEmployeeFunction = document.querySelector("#change-employee-function");


    
    

                /***** LEGGE TIL NY ANSATT *****/

    /* Printer ut funksjonsboksen hvor man skriver inn input */
    const addEmployee = () => {
        let htmlTxt = "";

        htmlTxt += `

        <!-- NAVN -->
        <div class="columns is-6">
            <article class="column  ">
                <div class="field">
                    <label class="label">Fullt navn</label>  
                    <p class="control has-icons-left has-icons-right">
                        <input id="name-input" class="input" type="text" placeholder="e.g Olav Nilsen">
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                        <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                        </span>
                    </p>
                </div>
            </article>
        

            <!-- KJØNN -->
            <article class="column ">
                <div class="field">
                    <label class="label">Kjønn</label> 
                    <p class="control has-icons-left has-icons-right">
                        <div class="select">
                            <select id="gender-input">
                                <option>Velg kjønn</option>
                                <option>Mann</option>
                                <option>Kvinne</option>           
                            </select>
                        </div>
                    </p>
                </div>
            </article>
            </div>
        

            <!-- POSISJON -->
            <div class="columns is-6">
            <article class="column">
                <div class="field">
                    <label class="label">Posisjon</label> 
                    <p class="control has-icons-left has-icons-right">
                        <div class="select">
                            <select id="position-input">
                                <option>Velg posisjon</option>
                                <option>Sjef, avd. Kristiansand</option>
                                <option>Kokk</option>           
                                <option>Servitør</option>           
                                <option>Telefonansvarlig</option>           
                                <option>Leverandør</option>           
                            </select>
                        </div>
                    </p>
                </div>
            </article>
            
            

            <!-- KNAPP -->
                <article class="column">
                    <label class="label has-text-info">Knapp</label>
                    <div class="buttons">
                        <button class="button">Legg til ansatt</button>
                    </div>
                </article>
            </div>
        `;
        addEmployeeSection.innerHTML += htmlTxt;

    }

    

    /* Knapp med funksjon som legger til ansatte */
    const addEmployeeButton = () => {
        
        /* input-felt */
        const nameInput = document.querySelector("#name-input");
        let name = nameInput;

        const genderInput = document.querySelector("#gender-input");
        let gender = genderInput;

        const positionInput = document.querySelector("#position-input");
        let position = positionInput;
        
        /* knapp med eventListener */
        document.querySelectorAll("button").forEach( button => {
            button.addEventListener("click", ( e ) => {
                name = nameInput.value;
                gender = genderInput.options[genderInput.selectedIndex].text;
                position = positionInput.options[positionInput.selectedIndex].text;

                if(gender === "Mann"){
                    employeeSection.innerHTML += `
                    <article class="column is-4 has-text-centered">
                        <img src="../Images/employees/male-employee.jpeg" alt="Photo of ${name}">
                        
                        <h3 class="title is-3">${name}</h3>
                        <p class="subtitle is-5">${position}</p>
                    </article>
                `; 
                }else if(gender === "Kvinne"){
                    employeeSection.innerHTML += `
                    <article class="column is-4 has-text-centered">
                        <img src="../Images/employees/female-employee.jpeg" alt="Photo of ${name}">
                        
                        <h3 class="title is-3">${name}</h3>
                        <p class="subtitle is-5">${position}</p>
                    </article>
                `; 
                }
                    
                
            })
        })
    }

    addEmployee();
    addEmployeeButton();

                    
    
                /***** SORTERE ANSATTE PÅ LOKASJON *****/

    const employeeLocation = () => {

        document.querySelectorAll("#oslo").forEach( osloTitle => {
            osloTitle.addEventListener("click", ( e ) => {
                let htmlTxt = "";
                let location = "Oslo";
                
                EmployeeModule.getEmployeeByLocation( location ).forEach( employee => {
                    htmlTxt += `
                    <article id="${employee.name}" class="column is-4 has-text-centered">
                    <img src="../Images/employees/${employee.image}" alt="Photo of ${employee.name}">
                    
                    <h3 class="title is-3">${employee.name}</h3>
                    <p class="subtitle is-5">${employee.position}</p>
                    </article>
                    `; 
                })
                employeeSection.innerHTML = htmlTxt;
            })
        })

        document.querySelectorAll("#kristiansand").forEach( kristiansandTitle => {
            kristiansandTitle.addEventListener("click", ( e ) => {
                let htmlTxt = "";
                let location = "Kristiansand";
                
                EmployeeModule.getEmployeeByLocation( location ).forEach( employee => {
                    htmlTxt += `
                    <article id="${employee.name}" class="column is-4 has-text-centered">
                    <img src="../Images/employees/${employee.image}" alt="Photo of ${employee.name}">
                    
                    <h3 class="title is-3">${employee.name}</h3>
                    <p class="subtitle is-5">${employee.position}</p>
                    </article>
                    `; 
                })
                employeeSection.innerHTML = htmlTxt;
            })
        })

        document.querySelectorAll("#stavanger").forEach( stavangerTitle => {
            stavangerTitle.addEventListener("click", ( e ) => {
                let htmlTxt = "";
                let location = "Stavanger";
                
                EmployeeModule.getEmployeeByLocation( location ).forEach( employee => {
                    htmlTxt += `
                    <article id="${employee.name}" class="column is-4 has-text-centered">
                    <img src="../Images/employees/${employee.image}" alt="Photo of ${employee.name}">
                    
                    <h3 class="title is-3">${employee.name}</h3>
                    <p class="subtitle is-5">${employee.position}</p>
                    </article>
                    `; 
                })
                employeeSection.innerHTML = htmlTxt;
            })
        })

        document.querySelectorAll("#alle-ansatte").forEach( stavangerTitle => {
            stavangerTitle.addEventListener("click", ( e ) => {
                let htmlTxt = "";
                
                
                EmployeeModule.getAllEmployees().forEach( employee => {
                    htmlTxt += `
                        <article id="${employee.name}" class="column is-4 has-text-centered">
                            <img src="../Images/employees/${employee.image}" alt="Photo of ${employee.name}">
                            
                            <h3 class="title is-3">${employee.name}</h3>
                            <p class="subtitle is-5">${employee.position}</p>
                        </article>
                    `; 
                })
                employeeSection.innerHTML = htmlTxt;
            })
        })
        
    }
    employeeLocation();





    

                /***** FJERNE ANSATTE *****/
    
    const removeEmployee = () => {
        let htmlTxt = "";
        
            htmlTxt += `
                <article>
                    <label class="label">Fjern en ansatt</label>
                    <input id="remove-input" class="input" type="text" placeholder="e.g Mika Nilsen">
                    <button id="remove-button" class="button">Gå</button>
                </article>
            `;

            removeEmployeeFunction.innerHTML = htmlTxt;


        document.querySelectorAll("#remove-button").forEach( button => {
            button.addEventListener("click", ( e ) => {
                const removeInput = document.getElementById("remove-input");
                let remove = removeInput.value;

                document.getElementById(`${remove}`).remove();    
            })
        }) 
    }
    removeEmployee();


                /***** ENDRE ANSATTE *****/
    const modifyEmployee = () => {
        let htmlTxt = "";
            
        htmlTxt += `
        <article>
            <label class="label">Endre en ansatts posisjon</label>
            <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <div class="select">
                            <select id="employee-input">
                                <option>Velg ansatt</option>
                                <option>Richard Nystrøm</option>
                                <option>Karen Jackeson</option>
                                <option>Ove Olsen</option>           
                                <option>Jens Olsen</option>           
                                <option>Ida Bakken</option>           
                                <option>Lisa Barion</option>           
                                <option>Rebekka Avlesen</option>           
                                <option>Mikkel Olsen</option>           
                                <option>Magdalena Øst</option>           
                                <option>Julie Kristiansen</option>           
                                <option>Idar Bakke</option>           
                                <option>Thomas Richardsen</option>           
                                <option>Mika Nilsen</option>           
                                <option>Egil Jansen</option>           
                            </select>
                        </div>

                        <div class="select">
                            <select id="position-input-modify">
                                <option>Velg posisjon</option>
                                <option>Sjef, avd. Kristiansand</option>
                                <option>Kokk</option>           
                                <option>Servitør</option>           
                                <option>Telefonansvarlig</option>           
                                <option>Leverandør</option>          
                            </select>
                        </div>

                        <div class="buttons">
                            <button id="change-button" class="button">Endre posisjon</button>
                        </div>               
                </div>
        </article>
        `;
        changeEmployeeFunction.innerHTML = htmlTxt;

    }

    

    const modifyEmployeeButton = () => {
        
        
        const nameInput = document.querySelector("#employee-input");
        let name = nameInput;

        const positionInput = document.querySelector("#position-input-modify");
        let position = positionInput;


        document.querySelectorAll("#change-button").forEach( button => {
            button.addEventListener("click", ( e ) => {
                let htmlTxt = "";

                name = nameInput.options[nameInput.selectedIndex].text;
                position = positionInput.options[positionInput.selectedIndex].text;
                
                document.getElementById(`${name}`).remove(); //Fjerner først gamle input
                
                //Legger til ny
                htmlTxt += `
                <article id="${name}" class="column is-4 has-text-centered">
                    <img src="../Images/employees/${name}.jpeg" alt="Photo of ${name}">
                    
                    <h3 class="title is-3">${name}</h3>
                    <p class="subtitle is-5">${position}</p>
                </article>
                `;
                employeeSection.innerHTML += htmlTxt;
            })
        }) 
    }

    modifyEmployee();
    modifyEmployeeButton();