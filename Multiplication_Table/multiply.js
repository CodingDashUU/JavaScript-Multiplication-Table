const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const ten = document.getElementById("ten");
const eleven = document.getElementById("eleven");
const twelve = document.getElementById("twelve");
const number = document.getElementById("number");
const generate = document.getElementById("generate")

function multiplynum(num1,display){
    num2 = Number(number.value) * num1;
    display.textContent = num2;
}

generate.onclick = function(){
multiplynum(1,one)
multiplynum(2,two)
multiplynum(3,three)
multiplynum(4,four)
multiplynum(5,five)
multiplynum(6,six)
multiplynum(7,seven)
multiplynum(8,eight)
multiplynum(9,nine)
multiplynum(10,ten)
multiplynum(11,eleven)
multiplynum(12,twelve)
}