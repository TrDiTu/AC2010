class Employee {
    #_name; #_salary;
    constructor(name, salary){
        this.#_name = name
        this.#_salary = salary
    }
    get name() {return this.#_name}
    get salary() {return this.#_salary}
    pay() {console.log(`chuyen khoan ${this.#_salary} vnd`)}
    paySalary(){
        this.calcSalary()
        this.pay()
    }
}

class Worker extends Employee {
    #_level;
    constructor(name, salary, level){
        super(name, salary)
        this.#_level = level
    }
    doWork(){
        console.log('Worker do work')
    }
    show(){
        console.log({name:this.name, salary: this.salary, level: this.#_level})
    }
    calcSalary(){
        console.log('Worker: Calc Salary')
    }
}
class Manager extends Employee {
    #_dept;
    constructor(name, salary, dept){
        super(name, salary)
        this.#_dept = dept
    }
    doWork(){
        console.log('Manager do work')
    }
    show(){
        console.log({name:this.name,salary:this.salary,dept: this.#_dept})
    }
    calcSalary(){
        console.log('Manager: Calc Salary')
    }
}
class Director extends Employee{
    constructor(name, salary){
        super(name, salary)
    }
    doWork(){
        console.log('Director do work')
    }
    show(){
        console.log({name:this.name,salary:this.salary})
    }
    calcSalary(){
        console.log('Director: Calc Salary')
    }
}
const worker = new Worker("Van", 10000000, 2);
worker.show()
worker.doWork()
worker.paySalary()
const manager = new Manager("Hanh", 30000000, "ke toan")
manager.show()
manager.doWork()
manager.paySalary()
const director = new Director("Tuan", 1000000000)
director.show()
director.doWork()
director.paySalary()

