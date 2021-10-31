let value;

const numbers = [43,46,33,23,44,35,5];
const numbers2 =  new Array(1,2,3,4,6,7);

const langs=["Python","Java","C++","Javascript"];

const a = ["Merhaba",3,null,undefined,3.14];

value = numbers.length; // dizi boyutu
value = numbers[0]; // ilk eleman
value = numbers[numbers.lentgh-1];// Son eleman

value= numbers.indexOf(33);//Değer hangi indexte onu gösterir.

numbers.push(500);//Sonuna değer ekler
numbers.unshift(3000);//başına değer ekler
numbers.pop();//Sonundan değer atar
numbers.shift();//Başından değer atar
numbers.splice(0.3);//Belli kısmı atar

numbers.reverse();//diziyi ters çevirir.
numbers.sort();//Sıralar küçükten büyüğe

value= numbers.sort(function(x,y){
    return x-y;
});//Küçükten büyüğe sıralar

value = numbers.sort(function(x,y){
    return y-x;
});//Büyükten küçüğe sıralar

console.log(value);