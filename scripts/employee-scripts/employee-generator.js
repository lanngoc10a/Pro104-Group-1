import EmployeeModule from '../../Modules/EmployeeModule.js'

    const employeeSection = document.querySelector("#employee-section");
    const employeeFunction = document.querySelector("#employee-function");

    const employeeGenerator = () => {
        let htmlTxt = "";
        
        EmployeeModule.getAllEmployees().forEach( employee => {
            htmlTxt += `
                <article class="column is-4 has-text-centered">
                    <img src="../Images/employees/${employee.image}" alt="Photo of ${employee.name}">
                    
                    <h3 class="title is-3">${employee.name}</h3>
                    <p class="subtitle is-5">${employee.position}</p>
                </article>
            `; 
        })
        employeeSection.innerHTML = htmlTxt;
    }
    
    employeeGenerator();

    /*const employeeMaker = () => {
        let htmlTxt = "";

        htmlTxt += `
        <article class="column is-3">
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

    employeeMaker();*/

    