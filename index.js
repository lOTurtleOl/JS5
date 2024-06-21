class Person {
    constructor(fname, lname, age, position) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.position = position;
    }

    describe() {
        return `Name: ${fname} ${lname} \n Age: ${age} \n Position: ${position}`
    }
}

class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(person) {
        this.employees.push[person];
    }

    companyList() {
        for (let index = 0; index < this.employees.length; index++) {
            console.log(this.employees[index]);
            
        }
    }
}

let person1 = new Person('Andrew', 'Hughes', 29, 'Developer');
let person2 = new Person('Michaela', 'Mortimer', 25, 'District Manager');
let person3 = new Person('Josh', 'Schroeber', 43, 'CFO');
let company = new Company('Aldi');
company.addEmployee(person1, person2, person3);
console.log(company.companyList());