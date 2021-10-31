function Employee(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;
    console.log(this);
    this.showInfos=function(){
        console.log(this.name,this.age,this.salary);
    }
}

const emp1 = new Employee("hakan",22,4000);
const emp2 = new Employee("Ali",20,5000);

emp1.showInfos();