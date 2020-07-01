var myHeading = document.querySelector('h1'); /*建立myHeading var 以quarySelector()函式取得標題參考*/
myHeading.textContent = 'Hello wold!!'; /* 利用textContent改變 innerHTML特性的值 */

let myVariable;
myVariable = 'Bob';

let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}

let myVariable1 = document.querySelector('h1');
alert('Hello!');

function multiple(num1, num2) {
    let result = num1 * num2;
    return result;
}

multiple(4, 7);
multiple(7, 6);
multiple(9, 9);

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}