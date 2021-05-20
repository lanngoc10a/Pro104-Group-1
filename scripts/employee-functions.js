import EmployeeModule from '../Modules/EmployeeModule.js'

    const addEmployeeSection = document.querySelector("#employee-function");
    const employeeSection = document.querySelector("#employee-section");

    
    

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
    
    
    
    
    
    
    
    const addEmployeeButton = () => {
        const nameInput = document.querySelector("#name-input");
        let name = nameInput;

        const genderInput = document.querySelector("#gender-input");
        let gender = genderInput;

        const positionInput = document.querySelector("#position-input");
        let position = positionInput;
        
        
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