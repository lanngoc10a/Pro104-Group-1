import EmployeeModule from './../Modules/EmployeeModule.js'

const contactInfoSection = document.querySelector("#contact-info-section");

    const contactInfoGenerator = () => {
        let htmlTxt = "";

        EmployeeModule.getAllEmployees().forEach( employee => {
            
            htmlTxt += `
            <section class="column is-9">
                <article id="contact-card" class="card p-3">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-128x128 mt-4">
                                <img class="is-rounded" src="../Images/employees/${employee.image}" alt="Photo of ${employee.name}">
                            </figure>
                        </div>
                        
                        <div class="media-content">
                            <div class="content">
                                <h3 class="title is-4">${employee.name}</h3>
                                <p class="subtitle is-6 mb-5">${employee.position}</p>
                                <div id="p-tagger">
                                <p class="">Telefon: ${employee.phone}</p>
                                <p class="">E-post: ${employee.email}</p>
                                <p class="">Lokasjon: ${employee.location}</p>   
                                </div>
                                
                            </div>
                    
                    
                    </div>
                </article>
            </section>
            `;
            contactInfoSection.innerHTML = htmlTxt;
        })
    }

    contactInfoGenerator();









    /* 
    <article id="${employee.name}" class="column is-3 has-text-centered">
                    <div class="box is-wide">
                        <img class="is-rounded" src="../Images/employees/${employee.image}" alt="Photo of ${employee.name}">
                        
                        <h3 class="title is-3">${employee.name}</h3>
                        <p class="subtitle is-5">${employee.position}</p>
                        <p class="subtitle is-6">Telefon: ${employee.phone}</p>
                        <p class="subtitle is-6  mb-2">E-post: ${employee.email}</p>
                    </div>
                </article>
    */