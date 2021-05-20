import EmployeeModule from '../../Modules/EmployeeModule.js'

    const employeeFunction = document.querySelector("#employee-function");
    const employeeFunction2 = document.querySelector("#employee-function-2")

    const name = () => {
        let htmlTxt = "";

        htmlTxt += `
        <article class="column is-6 has-background-info">
            <div class="field">
                <label class="label">Fullt navn</label>  
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="text" placeholder="e.g Olav Nilsen">
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                    <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                    </span>
                </p>
            </div>
        </article>
        `;

        employeeFunction.innerHTML = htmlTxt; 
    }

    name();

    const gender = () => {
        let htmlTxt = "";

        htmlTxt += `
        <article class="column has-background-primary">
            <div class="field">
                <label class="label">Kjønn</label> 
                <p class="control has-icons-left has-icons-right">
                    <div class="select">
                        <select>
                            <option>Velg kjønn</option>
                            <option>Mann</option>
                            <option>Kvinne</option>           
                        </select>
                    </div>
                </p>
            </div>
        </article>
        `;
        employeeFunction.innerHTML += htmlTxt; 
    }

    gender();

    const position = () => {
        let htmlTxt = "";

        htmlTxt += `
        
        
        <article class="column is-6 has-background-black">
            <div class="field">
                <label class="label">Posisjon</label> 
                <p class="control has-icons-left has-icons-right">
                    <div class="select">
                        <select>
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
        
        `;
        employeeFunction2.innerHTML += htmlTxt;
    }

    position();

    const button = () => {
        let htmlTxt = "";

        htmlTxt += `
            <article class="column has-background-dark">
                <div class="buttons">
                    <button class="button">Legg til ansatt</button>
                </div>
            </article>
        `;
        employeeFunction2.innerHTML += htmlTxt;
    }

    button();
    