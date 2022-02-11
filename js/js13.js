//Напишите функцию, которая преобразует шестнадцатеричное число 
//(заданное в виде строки) в десятичное число.

// Пример кода:
//  hexToDec('1') => 1
//  hexToDec('a') => 10
//  hexToDec('10') => 16
//  hexToDec('FF') => 255
// hexToDec('-C') => 12
console.log(hexToDec('FF'))
console.log(hexToDec('10'))

function hexToDec(x) {
    const parsed = parseInt(x, 16);
    if (isNaN(parsed)) { return 0; }
    return parsed;
}