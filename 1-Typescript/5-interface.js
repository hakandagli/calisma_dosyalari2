var MySql = /** @class */ (function () {
    function MySql() {
    }
    //interface implement edildikten sonra, interfacedeki metodların hepsi çağrılmazsa hata verir
    MySql.prototype.add = function () {
        console.log("MySql Add");
    };
    MySql.prototype["delete"] = function () {
        console.log("MySql Delete");
    };
    MySql.prototype.select = function () {
        console.log("MySql Select");
    };
    MySql.prototype.update = function () {
        console.log("MySql Update");
    };
    return MySql;
}());
var MongoDB = /** @class */ (function () {
    function MongoDB() {
    }
    MongoDB.prototype.add = function () {
        console.log("MongoDB Add");
    };
    MongoDB.prototype["delete"] = function () {
        console.log("MongoDB Delete");
    };
    MongoDB.prototype.select = function () {
        console.log("MongoDB Select");
    };
    MongoDB.prototype.update = function () {
        console.log("MongoDB Update");
    };
    return MongoDB;
}());
/*let mysql = new MySql();
mysql.add();*/
function addDatabase(database) {
    database.add();
}
addDatabase(new MySql());
addDatabase(new MongoDB());
