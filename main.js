// changing contents of block 4 and block 5

let block4 = document.getElementsByClassName("side1")[0];
let block5 = document.getElementsByClassName("side2")[0];
let t = [...block4.childNodes];
block4.replaceChildren(...block5.childNodes);
block5.replaceChildren(...t);

// find area of triangle and append it to the end of block3

let h = 10
let b = 20

let area = 1 / 2  * (b * h);

let block3 = document.getElementsByClassName("main")[0];
block3.textContent += "Triangle area=" + area;