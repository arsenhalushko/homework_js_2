let arr;
arr = [1,2,3,4, 'JS', true, false, 'okten', -2894,567 ];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


let book1 = {
title:  'Dead Russians',
pageCount: 874,
genre:'Lyrics'

}
console.log(book1)
let book2 = {
    title: 'Pain and humiliation while studying JS',
    pageCount:265,
    genre:'Drama'

    }
console.log(book2)
let book3 = {
    title: 'Kolobok',
    pageCount: 299,
    genre: 'Tales'

    }
console.log(book3)

let book_1 = {
    title:  'Dead Russians',
    pageCount: 874,
    genre:'Lyrics',
    author:[
        {
            name: 'People',
            age:  22
        }
    ]

}
console.log(book_1)
console.log(book_1.author)

let book_2 = {
    title: 'Pain and humiliation while studying JS',
    pageCount:265,
    genre:'Drama',
    author:[
        {
            name: 'Vasya',
            age:  22
        }
    ]

}
console.log(book_2)
console.log(book_2.author)

let book_3 = {
    title: 'Kolobok',
    pageCount: 299,
    genre: 'Tales',
    author:[
        {
            name: 'People',
            age:  22
        }
    ]

}
console.log(book_3)
console.log(book_3.author)

let users = [
    {name: 'Thomas',
        username: 'Price',
        password: '12345'
    },
    {name: 'Ann',
        username: 'White',
        password: '525521'
    },
    {name: 'Jahseh',
        username: 'Connor',
        password: '543543'
    }
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);

let x = +prompt('enter number');
console.log(x);
if (x != 0){
   console.log(true);

}
else {
   console.log(false);
}

let time = +prompt('enter minute');
if (time>0 && time <=15 ){
    console.log('1')
}
else if (time > 15 && time <= 30) {
    console.log('2')
}
else if(time > 30 && time <= 45){
    console.log('3')
}
else  if(time > 45 && time <=59 ){
    console.log('4')
}
else {
    console.log('EROR')
}
let day = +prompt('enter dekada');
if( day >= 1 && day <=10) {
    console.log('1')
}
else if( day > 10 && day <= 20){
    console.log('2')
}
else if (day > 20 && day <=31){
    console.log('3')
}
else {
    console.log('Що це за маячня?')
}

let week = +prompt('enter day');

switch (week){
    case 1:
    console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sundy');
        break;
    default:
        console.log('eror');

}

let m = +prompt('enter num');
let n = +prompt('enter num');
if (m > n) {
    console.log(m);
}
else if (m < n){
    console.log(n);
}
else  if(m===n){
    console.log("Значення рівні");
}
