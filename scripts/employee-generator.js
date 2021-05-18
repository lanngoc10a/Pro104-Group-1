import EmployeeModule from '../Modules/EmployeeModule.js'

    const employeeSection = document.querySelector("#employee-section");

    const employeeGenerator = () => {
        let htmlTxt = "";
        
        EmployeeModule.getAllEmployees().forEach( employee => {
            htmlTxt += `
                <article class="column is-4 has-text-centered">
                    <img src="../Images/employees/${employee.image}" alt="Photo of ${employee.name}">
                    
                    <h3 class="title is-3">${employee.name}, ${employee.age}</h3>
                    <p class="subtitle is-5">${employee.position}</p>
                </article>
            `;
            
        })
        employeeSection.innerHTML = htmlTxt;
    }

    employeeGenerator();