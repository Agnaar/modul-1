class student {
    name =""
    //private property
    #age = ""
    program = ""

    constructor(name, age, program) {
        this.name = name
        this.#age = age
        this.program = program
    }
    greeting() {
        console.log('hello ${this.name}');
    }
}

const student1 = new student("andi", 25, "digital marketing")
const student2 = new student("asep", 25, "data science")
const student3 = new student("cahyoo", 25, "ui/ux")
console.log(student1.name);
student1.greating()
student1.getAge()
student2.greating()

const student =[student1, student2, student3]
console.log(students);


class employee {
    constructor(){
        this.employeeName
}

getEmployeeName() {
    return this.employeeName
}
set employeeName(value) {
    this.employeeName = value
}
}
const employee1 = new employee()
employee1.setEmployeeName("asep")
console.log(employee1.getEmployeeName());
console.log(employee1.employeeName);


//inheritance

class gender {
    
}