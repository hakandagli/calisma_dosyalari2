let value;

const now=new Date();//Şu anki zamanı almamızı sağlar.

const date1 = new Date("3-29-1999 06:21:00");
const date2 = new Date("January 29 1999");
const date3 = new Date("2/29/1999");

value=date1.getMonth();
value=date1.getDate();
value=date1.getDay();
value=date1.getHours();
value=date1.getMinutes();
value=date1.getSeconds();
value=date1.getMilliseconds();


date1.setMounth(7);
console.log(value);