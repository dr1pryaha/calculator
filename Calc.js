var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];   //массив чисел
var input;      //дисплей
var firstMemoryNum;     //первое вводимое число, использующееся при вычислении
var secondMemoryNum;    //второе вводимое число, использующееся при вычислении
var computation;        //непосредственно вычисление
var nextMemoryNum;
function handleEqualClick() {
    if (computation === 'plus') {
        input.value = parseInt(firstMemoryNum, 10) + parseInt(secondMemoryNum, 10) 
    } else if (computation === 'minus') {
        input.value = parseInt(firstMemoryNum, 10) - parseInt(secondMemoryNum, 10)
    } else if (computation === 'multiply') {
        input.value = parseInt(firstMemoryNum, 10) * parseInt(secondMemoryNum, 10)
    } else if (computation === 'division') {
        input.value = parseInt(firstMemoryNum, 10) / parseInt(secondMemoryNum, 10)
    }

    nextMemoryNum = input.value;

    firstMemoryNum = secondMemoryNum = computation = undefined;
}

function handleSumClick() {
    computation = 'plus';
    if (firstMemoryNum && secondMemoryNum) {
        handleEqualClick();
    } else if (!secondMemoryNum && nextMemoryNum){
        
        console.log ('fuck!!!')
        firstMemoryNum = nextMemoryNum; 
    } else if (nextMemoryNum) {
        handleEqualClick(); 
    }
    
    console.log(firstMemoryNum, secondMemoryNum, nextMemoryNum)
}

function handleMinusClick() {
    computation = 'minus';
}

function handleMultiplyClick() {
    computation = 'multiply';
}

function handleDivisionClick() {
    computation = 'division';
}

function handleCleanClick() {
    input.value = '0';
    firstMemoryNum = secondMemoryNum = computation = undefined;
}

function handleBackspaceClick() {
    if (firstMemoryNum && !computation) {
        firstMemoryNum = firstMemoryNum ? firstMemoryNum.slice(0, -1) : '0';
        input.value = firstMemoryNum;
    } else if (secondMemoryNum) {
        secondMemoryNum = secondMemoryNum ? secondMemoryNum.slice(0, -1) : '0';
        input.value = secondMemoryNum;
    }
}

function handleNumberClick(event) {      //находим числа по клику на кнопки
    if (!computation) {
        firstMemoryNum = firstMemoryNum ? (firstMemoryNum + event.target.value) : event.target.value;
        input.value = firstMemoryNum
    } else {
        secondMemoryNum = secondMemoryNum ? (secondMemoryNum + event.target.value) : event.target.value;
        input.value = secondMemoryNum
    } 
        console.log (firstMemoryNum, secondMemoryNum, nextMemoryNum, 'clickNum')
}

window.onload = function calc(){        //глобальная функция калькулятора начинает выполняться после загрузки DOM-дерева
    input = document.getElementById ('display');        //находим дисплей

    numbers.forEach (function (number) {        //перебираем массив чисел
        document.getElementById(number).onclick = handleNumberClick;
    } )

    document.getElementById('equal').onclick = handleEqualClick;

    document.getElementById('plus').onclick = handleSumClick;

    document.getElementById('minus').onclick = handleMinusClick;

    document.getElementById('multiply').onclick = handleMultiplyClick;

    document.getElementById('division').onclick = handleDivisionClick;

    document.getElementById('clean').onclick = handleCleanClick;

    document.getElementById('backspace').onclick = handleBackspaceClick;

    
};   