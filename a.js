// const cars = [];
// cars[0] = 'volvo';
// cars[1] = 'benz';
// cars[2] = 'audi';
// cars[3] = 'bmw';

// let carString = cars.toString ();

// console.log(carString);
// console.log(typeof carString);

// console.log(cars.length);

// const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pear']

// let lastItem = fruits[fruits.length - 1];

// document.getElementById(`result`).innerHTML = lastItem;
// console.log(lastItem)

// var input =document.getElementById(`a`)

// let Inputvalue = input.value

function upload() {
    const works = [];

    let work1 = document.getElementById(`a`).value;
    let work2 = document.getElementById(`b`).value;
    let work3 = document.getElementById(`c`).value;
    let work4 = document.getElementById(`d`).value;

    fruits[0] = work1;
    fruits[1] = work2;
    fruits[2] = work3;
    fruits[3] = work4;

    let newWork = works.toString();

    document.getElementById(`displayResult`).innerHTML = newWork;

    console.log(newWork)
}
