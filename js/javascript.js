// function myFunction() {
//      document.getElementById("number_a").innerText=a;
//   document.getElementById("number_b").innerText=b;
// }
// btn.addEventListener('click', myFunction);
let c = [];


function getValue() {
    let a = document.getElementById("input_a").value;
    let b = document.getElementById("input_b").value;

    document.getElementById("number_a").innerHTML = a;
    document.getElementById("number_b").innerHTML = b;
    let allin = document.getElementById("all");
    allin.innerHTML = "";
    squareRoot(a, b);
    if (c) {
        c.forEach((item) => {
            allin.innerHTML += item + ", ";
        });
    }
}

function squareRoot(a, b) {
    for (i = a; i <= b; i++) {
        if (checkNumber(i))
            c.push(i);
    }
}

function checkNumber(number) {
    if (number < 1)
        return false;
    let i = Math.floor(Math.sqrt(number));
    if (i * i === number) return true;
    return false;
}