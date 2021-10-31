function Employee(name,age){
    this.name=name;
    this.age=age;
}

//Fonksiyon her seferinde yazılarak bellekte yer kaplamasın diye prototype içinde tanımlandı
Employee.prototype.sHowInfos=function(){
    console.log("İsim: "+this.name+" Yaş: "+this.age);
}

const emp1=new Employee("Mustafa",25);
const emp2=new Employee("hakan",22);

emp2.sHowInfos();
console.log(emp1);