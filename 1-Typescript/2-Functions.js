function topla(x, y) {
    return x + y;
}

function topla2(x, y) {
    return x + y;
}
var topla3 = function (x, y) {
    return x + y;
};
function topla4(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + " " + digerleri.join(" ");
}
function davetEt2() {
    var digerleri = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        digerleri[_i] = arguments[_i];
    }
    return digerleri.join(" ");
}
console.log("hakan");
console.log(topla(2, "ankara"));
console.log(topla2(2, 3)); //string verirsek hata verir
console.log(topla3(2, 3));
console.log(topla4(7));
console.log(davetEt("Engin", "Derin", "Salih", "Hakan"));

