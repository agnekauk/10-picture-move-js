let img = document.querySelector("img");

let leftBtn = document.querySelector(".left");

leftBtn.addEventListener("click", reset);
leftBtn.addEventListener("click", function () {
    img.style.margin = "0px 10px";
    img.style.float = "left";
})

let rightBtn = document.querySelector(".right");

rightBtn.addEventListener("click", reset);
rightBtn.addEventListener("click", function () {
    img.style.float = "right";
    img.style.margin = "0px 10px";
})

let hideBtn = document.querySelector(".hide");

hideBtn.addEventListener("click", reset);
hideBtn.addEventListener("click", function () {
    img.style.display = "none";
})


let flipBtn = document.querySelector(".flip");

flipBtn.addEventListener("click", reset);
flipBtn.addEventListener("click", function () {
    let main = document.querySelector("main");
    main.appendChild(img);
})

function reset() {
    let div = document.querySelector(".div");
    let pirmasP = div.firstChild;
    div.insertBefore(img, pirmasP);
    img.style.float = "none";
    img.style.marginLeft = "calc((800px - 267px) /2)";
    img.style.display = "block";
}

let original = document.querySelector(".back");
original.addEventListener("click", reset);