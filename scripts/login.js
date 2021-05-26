/* fake bruker */
const username = "brukernavn";
const password = "passord";

/* html elementer */
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const submitButton = document.querySelector("#submit-button")

const helptext = document.querySelector("#helptext");

/* Kaller login() når man trykker på login-knappen */
submitButton.addEventListener("click", () => {
    login();
});

/* Hvis brukerinfo er riktig, redirecter den til Om gyldne.html 
*  ellers viser den hjelpetekst.
*/
function login() {
    if(validateCredentials()){
        window.location.href = "Om Gyldne.html";
    } else {
        helptext.style.display = "inline-block";
    }
}

/* Returner true hvis brukernavn og passord er riktig, ellers false. */
function validateCredentials() {
    if(usernameInput.value.toLowerCase() === username) {
        if(passwordInput.value === password) {
            return true;
        } 
    } 
    return false;
}