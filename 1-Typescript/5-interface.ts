interface IDatabase{
    add();
    delete();
    select();
    update();
}

class MySql implements IDatabase{
    //interface implement edildikten sonra, interfacedeki metodların hepsi çağrılmazsa hata verir
    add(){
        console.log("MySql Add");
    }

    delete(){
        console.log("MySql Delete");
    }

    select(){
        console.log("MySql Select");
    }

    update(){
        console.log("MySql Update");
    }
}

class MongoDB implements IDatabase{
    add(){
        console.log("MongoDB Add");
    }

    delete(){
        console.log("MongoDB Delete");
    }

    select(){
        console.log("MongoDB Select");
    }

    update(){
        console.log("MongoDB Update");
    }
}

/*let mysql = new MySql();
mysql.add();*/

function addDatabase(database:IDatabase){
    database.add();
}

addDatabase(new MySql());
addDatabase(new MongoDB());