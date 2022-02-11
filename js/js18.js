//Никаких разговоров. Никаких объяснений. 
//Только ТЗ и результат, который должен быть. 
//Посмотрите, что должно получиться на выходе и напишите эту функцию.

//Пример кода:
//   spacey(['kevin', 'has','no','space']) => [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']
//   spacey(['this','cheese','has','no','holes']) => ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']
spacey(['kevin', 'has', 'no', 'space'])
spacey(['this', 'cheese', 'has', 'no', 'holes'])

function spacey(arr) {
    let arr1 = [];
    let b = '';
    for (let i = 0; i < arr.length; i++) {
        b += arr[i]
        arr1.push(b)
    }
    console.log(arr1)
}