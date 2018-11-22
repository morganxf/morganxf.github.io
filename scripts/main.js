// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';
//
// document.querySelector('html').onclick = function () {
//     alert('Ouch! stop poking me!');
// };

var myImage = document.querySelector('img');
myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/captain.jpeg') {
        myImage.setAttribute('src', 'images/captain2.jpeg');
    } else {
        myImage.setAttribute('src', 'images/captain.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
