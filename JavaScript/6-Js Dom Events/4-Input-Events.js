const filter = document.getElementById("filter");

/*document.addEventListener("DOMContentLoaded", load);
function load(e){
    console.log("sayfa yüklendi");
}*/

//Focus ve Blur
/*filter.addEventListener("focus",run);
filter.addEventListener("blur",run);
function run(e){
    console.log(e.type);
}*/

//paste event'i yapıştırınca çalışır
//copy kopyalayınca çalışır
//cut kesince çalışır
//select yazının belli bir kısmını veya tamamını seçince çalışır.


filter.addEventListener("copy",run);
function run(e){
    console.log(e.type);
}

