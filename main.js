
const btn = document.getElementById("btn");

function demo(){
    const hei = document.getElementById("height").value;
const wei = document.getElementById("weight").value;
const res = document.getElementById("result");
    res.innerHTML = wei / hei*hei;
}