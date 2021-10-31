class Employee{
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
    showInfos(){
        console.log("İsim "+ this.name + " Yaş: "+this.age+" maaş: "+this.salary);
    }
}

const emp= new Employee("Hakan",22,5000);
emp.showInfos();