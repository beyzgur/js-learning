// alert("selamm")
console.log("helloo");

var x = 5;
let y = 4;
const z = 3;
console.log(x,y,z);

x = 6;
y = 8; 
console.log(x,y);

// z = 10; 
// console.log(z);
// const değeri değiştirilemez

console.log(x,y,z);

var a = 1;
console.log(a);

var num1 = 4;
var num2 = 4;

console.log(num1==num2);
console.log(num1===num2);
// 3 esittir, veri tipini de kontrol eder.

var float1 = 9.8;
var float2 = 8;
console.log(float1+float2);

console.log(typeof float1);

var firstName = "a. beyza";
var surname = "gür"; 
var fullName = firstName  + " " + surname; 
console.log(fullName);

var fullName2 = `${firstName} ${surname}`; 
console.log(fullName2);
// bu backtick (alt gr + virgül) = ``

let oldString = "En sevdiğim yemek: \n 1- adana kebab \n 2-urfa kebab \n 3-kebab ";
console.log(oldString);

let newString = `En sevdiğim yemeklerr:
Kısır,
sarma,
dolma,
cart curt vs.`;
console.log(newString);

var simpleArray = [1,2,3,4,9];
// console.log(simpleArray[0]);
// console.log(simpleArray[4]);
// console.log(simpleArray[1]);

//arrayin son elemanını almak için arrayin son indexini çağırırız, son indexi de uzunlugun bir eksiği son indextir.
console.log(simpleArray[simpleArray.length-1]);

console.log(simpleArray.length);
console.log(simpleArray.indexOf(3));

var array = [ 1 , "paü" , [2,3,4] , 7 ];
console.log(array);
console.log(array.indexOf("paü"));
array[1] = "siber";
console.log(array);
console.log(array[1]);

var grade = 80;

if (grade < 50){
    console.log("dersten kaldınız...");
} else {
    console.log("dersten geçtiniz, tebrikler!..");
 }


var weather = "sunny";

if(weather==="rainy") {
    console.log("şemsiye almayı unutma!");
}
else if (weather==="sunny"){
    console.log("güneş kremi sürüver");
}
else { 
    console.log("tanımlanmayan hava");
}


var counter = 1;
while (counter <= 5){
    console.log( " sayaç = " + counter);
    counter++;
    counter += 1;
}

var number = 1;
do{
    console.log(number);
    number++;
} while (number <= 5); 

var colors = ["pink" , "purple" , "blue"];

for(let i=0 ; i < colors.length ; i++) {
    console.log(colors[i]);
}
