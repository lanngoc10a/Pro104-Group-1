import EmployeeModule from '../../Modules/EmployeeModule.js'

const getLocation = document.querySelector("#location-now");
const contactInfoSection = document.querySelector("#contact-info-section");

/* oppdatere tab */

function resetTabs() {
    let activeTabs = document.querySelectorAll(".is-active");
    activeTabs.forEach(tab => tab.classList.toggle("is-active"))
}

const employeeLocation = () => {

    
    document.querySelectorAll("#grunerløkka").forEach( grunerløkkaTitle => {
        grunerløkkaTitle.addEventListener("click", ( e ) => {
            getLocation.innerHTML = "Ansatte i Grünerløkka";
            let htmlTxt = "";
            let location = "Grünerløkka";
            
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

            /* changing tabs */
            resetTabs();
            document.querySelector("#gruner-li").classList.toggle("is-active");
        })
    })

    document.querySelectorAll("#frogner").forEach( frognerTitle => {
        frognerTitle.addEventListener("click", ( e ) => {
            getLocation.innerHTML = "Ansatte i Frogner";
            let htmlTxt = "";
            let location = "Frogner";
            
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

            /* changing tabs */
            resetTabs();
            document.querySelector("#frogner-li").classList.toggle("is-active");
        })
    })

    document.querySelectorAll("#sagene").forEach( sageneTitle => {
        sageneTitle.addEventListener("click", ( e ) => {
            getLocation.innerHTML = "Ansatte i Sagene";
            let htmlTxt = "";
            let location = "Sagene";
            
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

            /* changing tabs */
            resetTabs();
            document.querySelector("#sagene-li").classList.toggle("is-active");
        })
    })

    document.querySelectorAll("#grorud").forEach( grorudTitle => {
        grorudTitle.addEventListener("click", ( e ) => {
            getLocation.innerHTML = "Ansatte i Grorud";
            let htmlTxt = "";
            let location = "Grorud";
            
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

            /* changing tabs */
            resetTabs();
            document.querySelector("#grorud-li").classList.toggle("is-active");
        })
    })

    

    
}
employeeLocation();