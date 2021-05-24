const EmployeeModule = ( function (){

    //Ansatte-array
    const employees = [
        {name: "Richard Nystrøm", age: 24, position: "Sosiale Medier", location: "Oslo", image: "Richard Nystrøm.jpeg", phone: 91209658, email: "richardnystrom@gyldenpizza.no"},
        {name: "Karen Jackeson", age: 40, position: "Sjef, avd. Oslo", location: "Oslo", image: "Karen Jackeson.jpeg", phone: 45442711, email: "karenjackeson@gyldenpizza.no"},
        {name: "Ove Olsen", age: 39, position: "Sjef, avd. Stavanger", location: "Stavanger", image: "Ove Olsen.jpeg", phone: 92422670, email: "oveolsen@gyldenpizza.no"},
        {name: "Jens Olsen", age: 27, position: "Telefonansvarlig", location: "Kristiansand", image: "Jens Olsen.jpeg", phone: 47575321, email: "jensolsen@gyldenpizza.no"},
        {name: "Ida Bakken", age: 30, position: "Servitør", location: "Stavanger", image: "Ida Bakken.jpeg", phone: 98839111, email: "idabakken@gyldenpizza.no"},
        {name: "Lisa Barion", age: 21, position: "Telefonansvarlig", location: "Stavanger", image: "Lisa Barion.jpeg", phone: 93723423, email: "lisabarion@gyldenpizza.no"},
        {name: "Rebekka Avlesen", age: 36, position: "Telefonansvarlig", location: "Oslo", image: "Rebekka Avlesen.jpeg", phone: 93453491, email: "rebekkaavlesen@gyldenpizza.no"},
        {name: "Mikkel Olsen", age: 38, position: "Kokk", location: "Kristiansand", image: "Mikkel Olsen.jpeg", phone: 41516946, email: "mikkelolsen@gyldenpizza.no"},
        {name: "Magdalena Øst", age: 32, position: "Servitør", location: "Oslo", image: "Magdalena Øst.jpg", phone: 97031254, email: "magdalenaost@gyldenpizza.no"},
        {name: "Julie Kristiansen", age: 27, position: "Servitør", location: "Kristiansand", image: "Julie Kristiansen.jpeg", phone: 48964451, email: "juliekristiansen@gyldenpizza.no"},
        {name: "Idar Bakke", age: 30, position: "Leverandør", location: "Kristiansand", image: "Idar Bakke.jpeg", phone: 49155521, email: "idarbakke@gyldenpizza.no"},
        {name: "Thomas Richardsen", age: 30, position: "Leverandør", location: "Oslo", image: "Thomas Richardsen.jpeg", phone: 91376245, email: "thomasrichardsen@gyldenpizza.no"},
        {name: "Mika Nilsen", age: 34, position: "Leverandør", location: "Stavanger", image: "Mika Nilsen.jpeg", phone: 98578312, email: "mikanilsen@gyldenpizza.no"},
        {name: "Egil Jansen", age: 25, position: "Leverandør", location: "Stavanger", image: "Egil Jansen.jpeg", phone: 91518315, email: "egiljansen@gyldenpizza.no"}
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