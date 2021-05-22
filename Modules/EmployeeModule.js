const EmployeeModule = ( function (){

    //Ansatte-array
    const employees = [
        {name: "Richard Nystrøm", age: 24, position: "Sosiale Medier", location: "Oslo", image: "Richard Nystrøm.jpeg"},
        {name: "Karen Jackeson", age: 40, position: "Sjef, avd. Oslo", location: "Oslo", image: "Karen Jackeson.jpeg"},
        {name: "Ove Olsen", age: 39, position: "Sjef, avd. Stavanger", location: "Stavanger", image: "Ove Olsen.jpeg"},
        {name: "Jens Olsen", age: 27, position: "Telefonansvarlig", location: "Kristiansand", image: "Jens Olsen.jpeg"},
        {name: "Ida Bakken", age: 30, position: "Servitør", location: "Stavanger", image: "Ida Bakken.jpeg"},
        {name: "Lisa Barion", age: 21, position: "Telefonansvarlig", location: "Stavanger", image: "Lisa Barion.jpeg"},
        {name: "Rebekka Avlesen", age: 36, position: "Telefonansvarlig", location: "Oslo", image: "Rebekka Avlesen.jpeg"},
        {name: "Mikkel Olsen", age: 38, position: "Kokk", location: "Kristiansand", image: "Mikkel Olsen.jpeg"},
        {name: "Magdalena Øst", age: 32, position: "Servitør", location: "Oslo", image: "Magdalena Øst.jpg"},
        {name: "Julie Kristiansen", age: 27, position: "Servitør", location: "Kristiansand", image: "Julie Kristiansen.jpeg"},
        {name: "Idar Bakke", age: 30, position: "Leverandør", location: "Kristiansand", image: "Idar Bakke.jpeg"},
        {name: "Thomas Richardsen", age: 30, position: "Leverandør", location: "Oslo", image: "Thomas Richardsen.jpeg"},
        {name: "Mika Nilsen", age: 34, position: "Leverandør", location: "Stavanger", image: "Mika Nilsen.jpeg"},
        {name: "Egil Jansen", age: 25, position: "Leverandør", location: "Stavanger", image: "Egil Jansen.jpeg"}
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