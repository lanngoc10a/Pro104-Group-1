import EmployeeModule from '../../Modules/EmployeeModule.js'

    const employeeSection = document.querySelector("#employee-section");
    

    const employeeGenerator = () => {
        let htmlTxt = "";
        
        
            //Bruker den ansattes navn som article-ID så den senere kan bli slettet
        EmployeeModule.getAllEmployees().forEach( employee => {
            htmlTxt += `
                <article id="${employee.name}" class="column is-4 has-text-centered">
                    <div class="card">
                        <img src="../Images/employees/${employee.image}" alt="Photo of ${employee.name}">
                        
                        <h3 class="title is-3">${employee.name}</h3>
                        <p class="subtitle is-5 mb-2">${employee.position}</p>
                    </div>
                </article>
            `; 
        })
        employeeSection.innerHTML = htmlTxt;
    }
    
    employeeGenerator();

    