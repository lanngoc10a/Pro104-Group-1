const EmployeeModule = ( function (){

    //Ansatte-array
    const employees = [
        {name: "Karen Jackeson", position: "Sjef, avd. Grünerløkka", location: "Grünerløkka", image: "Karen Jackeson.jpeg", phone: 45442711, email: "karenjackeson@gyldenpizza.no"},
        {name: "Ove Olsen", position: "Sjef, avd. Frogner", location: "Frogner", image: "Ove Olsen.jpeg", phone: 92422670, email: "oveolsen@gyldenpizza.no"},
        {name: "Jannicke Svendsen", position: "Sjef, avd. Sagene", location: "Sagene", image: "Jannicke Svendsen.jpeg", phone: 47565521, email: "jannickesvendsen@gyldenpizza.no"},
        {name: "Richard Nystrøm", position: "Sosiale Medier", location: "Grünerløkka", image: "Richard Nystrøm.jpeg", phone: 91209658, email: "richardnystrom@gyldenpizza.no"},
        {name: "Jens Olsen", position: "Telefonansvarlig", location: "Sagene", image: "Jens Olsen.jpeg", phone: 47575321, email: "jensolsen@gyldenpizza.no"},
        {name: "Ida Bakken", position: "Servitør", location: "Frogner", image: "Ida Bakken.jpeg", phone: 98839111, email: "idabakken@gyldenpizza.no"},
        {name: "Lisa Barion", position: "Telefonansvarlig", location: "Frogner", image: "Lisa Barion.jpeg", phone: 93723423, email: "lisabarion@gyldenpizza.no"},
        {name: "Rebekka Avlesen", position: "Kokk", location: "Grorud", image: "Rebekka Avlesen.jpeg", phone: 93453491, email: "rebekkaavlesen@gyldenpizza.no"},
        {name: "Mikkel Olsen", position: "Kokk", location: "Sagene", image: "Mikkel Olsen.jpeg", phone: 41516946, email: "mikkelolsen@gyldenpizza.no"},
        {name: "Magdalena Øst", position: "Servitør", location: "Grünerløkka", image: "Magdalena Øst.jpg", phone: 97031254, email: "magdalenaost@gyldenpizza.no"},
        {name: "Julie Kristiansen", position: "Servitør", location: "Sagene", image: "Julie Kristiansen.jpeg", phone: 48964451, email: "juliekristiansen@gyldenpizza.no"},
        {name: "Idar Bakke", position: "Leverandør", location: "Sagene", image: "Idar Bakke.jpeg", phone: 49155521, email: "idarbakke@gyldenpizza.no"},
        {name: "Thomas Richardsen", position: "Leverandør", location: "Grünerløkka", image: "Thomas Richardsen.jpeg", phone: 91376245, email: "thomasrichardsen@gyldenpizza.no"},
        {name: "Mika Nilsen", position: "Leverandør", location: "Frogner", image: "Mika Nilsen.jpeg", phone: 98578312, email: "mikanilsen@gyldenpizza.no"},
        {name: "Egil Jansen", position: "Leverandør", location: "Grorud", image: "Egil Jansen.jpeg", phone: 91518315, email: "egiljansen@gyldenpizza.no"},
        {name: "Anniken Oftebro", position: "Servitør", location: "Grorud", image: "Anniken Oftebro.jpeg", phone: 9713314, email: "annikenoftebro@gyldenpizza.no"},
        {name: "Ulrikke Brandsen", position: "Telefonansvarlig", location: "Grorud", image: "Ulrikke Brandsen.jpeg", phone: 47565521, email: "ulrikkebrandsen@gyldenpizza.no"},
        {name: "Fredrick Backstrøm", position: "Kokk", location: "Grünerløkka", image: "Fredrick Backstrøm.jpeg", phone: 47565521, email: "fredrickbackstrøm@gyldenpizza.no"}
    ];

    const getEmployeeByName = ( name ) => {
        return employees.filter( employeename => employeename.name === name);
    }

    const getEmployeeByLocation = ( location ) => {
        return employees.filter( employeelocation => employeelocation.location === location);
    }


    //returner alle ansatte
    const getAllEmployees = () => employees;

    //eksponerer getAllEmployees funksjonen
    return {getAllEmployees, getEmployeeByName, getEmployeeByLocation};






}());

export default EmployeeModule;