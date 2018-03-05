
// scripts.js
// komentrza jednoliniowy
/* komentarz blokowy
do pokazania, że można
blokować więcej linii */


var name = prompt('Enter your name');
// komentrz do lini alert wg zadania alert('Hello, ' + name);
console.log('Hello, ' + name);

// koniec wcześniejszych zadań


// zadanie_8_5

var a = 6
var h = 3
var triangleArea = a*h/2
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
alert('Pole trójkąta wynosi ' + triangleArea)

//koniec zadania_8_5

//zadanie_8_6

var a = 12;
var b = 3;
var value = (a * a) - (2 * a * b) - (b * b);
console.log(value);
if (value > 0)
{
console.log("liczba dodatnia");
}
else if (value < 0)
{
console.log("liczba ujemna");
}
else 
{
console.log("równa zero");
}

//koniec zaddania_8_6

//zadanie_9_1

function getTriangleArea(a, h){
        if (a <= 0 || h <= 0) {
            console.log ("Nieprawidłowe dane")
        } else {
            return (a*h)/2  
        }
}
console.log(getTriangleArea(10,6));
var triangleArea1 = getTriangleArea(10,15);
var triangleArea2 = getTriangleArea(18,22);
var triangleArea3 = getTriangleArea(24, 36);

//koniec zadania_9_1
