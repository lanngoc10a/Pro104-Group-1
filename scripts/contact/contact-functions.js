import EmployeeModule from '../../Modules/EmployeeModule.js'

const getLocation = document.querySelector("#location-now");
const contactInfoSection = document.querySelector("#contact-info-section");

const employeeLocation = () => {

    
    document.querySelectorAll("#oslo").forEach( osloTitle => {
        osloTitle.addEventListener("click", ( e ) => {
            getLocation.innerHTML = "Ansatte i Oslo";
            let htmlTxt = "";
            let location = "Oslo";
            
            EmployeeModule.getEmployeeByLocation( location ).forEach( employee => {
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
            })
            contactInfoSection.innerHTML = htmlTxt;
        })
    })

    document.querySelectorAll("#kristiansand").forEach( kristiansandTitle => {
        kristiansandTitle.addEventListener("click", ( e ) => {
            getLocation.innerHTML = "Ansatte i Kristiansand";
            let htmlTxt = "";
            let location = "Kristiansand";
            
            EmployeeModule.getEmployeeByLocation( location ).forEach( employee => {
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
            })
            contactInfoSection.innerHTML = htmlTxt;
        })
    })

    document.querySelectorAll("#stavanger").forEach( stavangerTitle => {
        stavangerTitle.addEventListener("click", ( e ) => {
            getLocation.innerHTML = "Ansatte i Stavanger";
            let htmlTxt = "";
            let location = "Stavanger";
            
            EmployeeModule.getEmployeeByLocation( location ).forEach( employee => {
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
            })
            contactInfoSection.innerHTML = htmlTxt;
        })
    })

    

    
}
employeeLocation();