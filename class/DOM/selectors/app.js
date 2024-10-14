// query selectors

// 1. getElementbyTagName

let a = document.getElementsByTagName('h1');
a[0].style.color = "red";
a[0].style.backgroundColor = "black";

// 2. getElementbyidName

let b = document.getElementById('image');
b.style.border = "3px solid red";

// 3. getElementbyClass

let c = document.getElementsByClassName('list');
c[0].style.backgroundColor= "Lightgreen";
for(let i of c){
    i.style.fontWeight = "bold";
    i.style.margin = "10px";
}

// query selector

var d = document.querySelector('#para');
d.style.textDecoration = "underline";
d.style.fontSize = "1.5rem";
d.style.color = "blue";





