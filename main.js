// changing contents of block 4 and block 5

const block4 = document.getElementsByClassName("side1")[0];
const block5 = document.getElementsByClassName("side2")[0];
const t = [...block4.childNodes];
block4.replaceChildren(...block5.childNodes);
block5.replaceChildren(...t);

// find area of triangle and append it to the end of block3

let h = 10
let b = 20

const area = 1 / 2  * (b * h);

const block3 = document.getElementsByClassName("main")[0];
const to_add = document.createElement("p")
to_add.textContent = "Triangle area=" + area;
block3.appendChild(to_add)

const form = document.getElementById("myform");
// console.log(form)
form.addEventListener("submit", (e) => {
    console.log("submitted")
    const data = new FormData(e.target);
    let max = 0;
    let n = 0;
    
    for (let i = 1; i < 11; i++) {
        const p = data.get("n"+ i);
        if (p > max) {
            max = p;
            n = 1;
        }

        if (p == max) {
            n++;
        }
    }

    alert(n);
    return false
})