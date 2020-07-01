var myImage = document.querySelector('img'); 

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/Python-logo.png') {
        myImage.setAttribute('src','images/Python-logo2.png');
    } else {
        myImage.setAttribute('src','images/Python-logo.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null) {
        setUserName();
    }   else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Python is Cool,' + myName;
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
}   else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Python is Cool,' + storedName;
}

myButton.onclick = function() {
    setUserName();
}