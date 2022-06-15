class Employee {
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return  this.rate * this.days;
    }
}

Employee = new Employee('Михаил', 'Кузнецов', 10, 31);

console.log(Employee.name); 
console.log(Employee.surname); 
console.log(Employee.rate); 
console.log(Employee.days); 
console.log(Employee.getSalary()); 