//Напишите функцию, которая будет принимать в себя массив c именами, 
//и возвращать массив, но уже с удаленными нежелательными именами. 
//Массив с нежелательными именами должен быть внутри вашей 
//функции: const unwantedNames = [“Дима”, “Саша”, ”Ольга”, ‘Никита”].

//Пример кода:
//example(['Никита', 'Саша', 'Анастасия', 'Дима', 'Саныч', 'Ольга', ]) => [Анастасия','Саныч']
//example(['Алексей', 'Семён', 'Василиса', 'Дима', 'Максим', 'Ольга', ]) => ['Алексей','Семён','Василиса','Максим']
//example(['Алишер', 'Ольга', ]) => ['Алишер']
example(['Алексей', 'Семён', 'Василиса', 'Дима', 'Максим', 'Ольга', ])

function example(arr) {
    const unwantedNames = ['Дима', 'Саша', 'Ольга', 'Никита'];
    let arr1 = [];
    for (let elem of arr) {
        if (elem == unwantedNames[0] || elem == unwantedNames[1] || elem == unwantedNames[2] || elem == unwantedNames[3]) {

        } else {
            arr1.push(elem);
        }
    }
    console.log(arr1)
}