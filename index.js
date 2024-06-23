class Person { // Create class Person
    constructor(name, age, position) { // Constructor
        this.name = name; // referencing the variable of an instance
        this.age = age;
        this.position = position;
    }

    describe() { // Method to return info as string
        return `Name: ${this.name} \n Age: ${this.age} \n Position: ${this.position}`
    }
}

class Company { // Company class  creation
    constructor(name) {
        this.name = name;
        this.employees = []; // Create and empty array
    }

    addEmployee(person) { // Method to add new employees to the company
        if (person instanceof Person) {
            this.employees.push(person); // Pushes the argument to employees array
        } else {
            throw new Error(`You can only add a recorded person. ${person} is not in the database.`)
        }
        
    }

    describe() { // Method to describe company
        return `${this.name} has ${this.employees.length} employees`;
    }
}

class Menu { // New Menu class
    constructor() { // Empty constructor
        this.companies = []; // Empty array of companies
        this.selectedCompany = null; // Start with no companies selected
    }

    start() {
        let selection = this.showMainMenuOptions(); // New variable selection = return of showMainMenuOptions() method
        while (selection != 0) { // While selection is not 0, offer options
            switch (selection) {
                case '1':
                    this.createCompany(); // Create a new company, define below
                    break;
                case '2':
                    this.viewCompany(); // View a company by index
                    break;
                case '3':
                    this.deleteCompany(); // Delete a company
                    break;
                case '4':
                    this.viewCompanies(); // 
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Have a good day!')
    }

    createCompany() {
        let name = prompt("Please enter company name: ") // Accept input and push to Company array
        this.companies.push(new Company(name));
    }

    showMainMenuOptions() {
        return prompt('Welcome to the management application.\n0) Exit\n1) New company\n2) View a company\n3) Delete company\n4) View all companies') // show menu options and accept user input
    }

    showCompanyMenuOptions(companyInfo) {
        return prompt(`0) Back\n1) Add new employee\n2) Delete employee\n\n${companyInfo}`) // show  menu options for selected company
    }

    viewCompanies() {
        let companiesList = '';
        for (let index = 0; index < this.companies.length; index++) { // set variable companiesList to empty string, iterate through adding each company name, show resulting list to user
            companiesList += index + ') ' + this.companies[index].name + '\n';
        }
        alert(companiesList);
    }

    viewCompany() {
        let index = parseInt(prompt('Enter the number of the company you want to view: ')); // set variable index to input
        if (index > -1 && index <= this.companies.length) { // if index is valid
            this.selectedCompany = this.companies[index]; // set selectedCompany to the index input
            let description = 'Company Name: ' + this.selectedCompany.name + '\n';
            description += ' ' + this.selectedCompany.describe() + '\n'; // Set description to show the name, and then add description of the company
            for (let index = 0; index < this.selectedCompany.employees.length; index++) { // Iterate through employees of this company and output each employee after their index
                description += index + ') ' + this.selectedCompany.employees[index].describe() + '\n';
            }
            let selection1 = this.showCompanyMenuOptions(description); // Selection1 variable equal to input from companyMenu
            switch (selection1) {
                case '1':
                    this.createPerson();
                    break;
                case '2':
                    this.deletePerson();
            }
        } // validate user input
    }

    deleteCompany() {
        let i = prompt('Enter the number of the company you want to delete: '); // Splice the selected index from the array
        if (i > -1 && i < this.companies.length) {
            this.companies.splice(i,1);
        }
    }

    createPerson() {
        let name = prompt ('Enter the name of the new employee: '); // Receive input from user and create people using the info
        let age = prompt ('Enter the age of the new employee: ');
        let position = prompt('Enter the position for the new employee: ');
        this.selectedCompany.addEmployee(new Person(name, age, position));
    }

    deletePerson() {
        let index = prompt('Enter the number of the employee you want to delete: '); // Receive index and delete person from employees array
        if (index > -1 && index < this.selectedCompany.employees.length) {
            this.selectedCompany.employees.splice(index,1);    
        }
    }
}




let menu = new Menu();
menu.start(); // Create menu instance and run with start method