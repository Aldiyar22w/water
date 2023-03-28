function plus() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 + num2;

    document.getElementById('otvet').innerHTML = result;


}

function minus() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 - num2;

    document.getElementById('otvet').innerHTML = result;


}

function umnoj() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 * num2;

    document.getElementById('otvet').innerHTML = result;


}

function delenie() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

if (num2 == 0) {
 var infinity = "Ошибка";
 document.getElementById('otvet').innerHTML = infinity;
} else {
    result = num1/num2

    document.getElementById('otvet').innerHTML = result;
}


}

