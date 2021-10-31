class Person{ //Superclass, BaseClass
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showInfos(){
        console.log("İsim "+ this.name + " Yaş: "+this.age);
    }
}

class Employee extends Person { //DerivedClass, SubClass, ChildClass
    constructor(name,age,salary){
        //this.name=name;
        //this.age=age; 
        super(name,age);// üstteki 2 satır yerine burası kullanılır.
        this.salary=salary;
    }

    showInfos(){//Overriding
        console.log("İsim "+ this.name + " Yaş: "+this.age+" maaş: "+this.salary);
    }

    toString(){
        console.log("İşçide olan ama insanda olmayan bir özellik");
    }

    raiseSalary(amount){
        this.salary+=amount;
    }
}

//Obje oluituralım ve özellikleri görelim

const emp= new Employee("Hakan",22,3000);
emp.raiseSalary(200);
emp.showInfos();
emp.toString();

const per= new Person("Mahmut",25);
per.toString();//bu fonksiyonu kullanamaz
per.showInfos();