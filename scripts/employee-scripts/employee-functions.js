    import EmployeeModule from '../../Modules/EmployeeModule.js'

    /* henter id-selektorene fra html filen */
    const addEmployeeSection = document.querySelector("#employee-function");
    const employeeSection = document.querySelector("#employee-section");
    const removeEmployeeFunction = document.querySelector("#remove-employee-function");



    
    

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
            <article class="column ">
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
        
    }
    employeeLocation();

                /***** FJERNE ANSATTE *****/
    const removeEmployee = () => {
        let htmlTxt = "";
        const removeInput = document.querySelector("#remove-input");
        let remove = removeInput;

        htmlTxt += `
            <article class="column">
                <input id="remove-input" class="input" type="text">
                <button id="remove-button" class="button">Gå</button>
            </article>
        `;
        removeEmployeeFunction.innerHTML = htmlTxt;

        document.querySelectorAll("#remove-button").forEach( removeButton => {
            removeButton.addEventListener("click", ( e ) => {
                remove = removeInput.value;

                removeEmployeeFunction.innerHTML += `<p>Hei</p>`;
            })
        })
    }

    removeEmployee();