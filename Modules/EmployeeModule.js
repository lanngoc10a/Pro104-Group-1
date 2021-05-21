const EmployeeModule = ( function (){

    //Ansatte-array
    const employees = [
        {name: "Richard Nystrøm", age: 24, position: "Sosiale Medier", location: "Oslo", image: "employee-1.jpeg"},
        {name: "Karen Jackeson", age: 40, position: "Sjef, avd. Oslo", location: "Oslo", image: "employee-9.jpeg"},
        {name: "Ove Olsen", age: 39, position: "Sjef, avd. Stavanger", location: "Stavanger", image: "employee-10.jpeg"},
        {name: "Jens Olsen", age: 27, position: "Telefonansvarlig", location: "Kristiansand", image: "employee-2.jpeg"},
        {name: "Ida Bakken", age: 30, position: "Servitør", location: "Stavanger", image: "employee-4.jpeg"},
        {name: "Lisa Barion", age: 21, position: "Telefonansvarlig", location: "Stavanger", image: "employee-3.jpeg"},
        {name: "Rebekka Avlesen", age: 36, position: "Telefonansvarlig", location: "Oslo", image: "employee-7.jpeg"},
        {name: "Mikkel Olsen", age: 38, position: "Kokk", location: "Kristiansand", image: "employee-6.jpeg"},
        {name: "Magdalena Øst", age: 32, position: "Servitør", location: "Oslo", image: "employee-5.jpg"},
        {name: "Julie Kristiansen", age: 27, position: "Servitør", location: "Kristiansand", image: "employee-11.jpeg"},
        {name: "Idar Bakke", age: 30, position: "Leverandør", location: "Kristiansand", image: "employee-8.jpeg"},
        {name: "Thomas Richardsen", age: 30, position: "Leverandør", location: "Oslo", image: "employee-12.jpeg"},
        {name: "Mika Nilsen", age: 34, position: "Leverandør", location: "Stavanger", image: "employee-13.jpeg"},
        {name: "Egil Jansen", age: 25, position: "Leverandør", location: "Stavanger", image: "employee-14.jpeg"}
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