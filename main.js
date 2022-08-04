let img = document.querySelector("img");

function reset() {
    let div = document.querySelector(".div");
    let pirmasP = div.firstChild;
    img.style.float = "none";
    img.style.marginLeft = "" + (document.querySelector("main").offsetWidth - 267) / 2 + "px";
    img.style.display = "block";
    div.insertBefore(img, pirmasP);
}


let leftBtn = document.querySelector(".left");

leftBtn.addEventListener("click", function () {
    reset();
    if (window.innerWidth < 391) {
        alert("Jūsų ekranas per siauras šiai funkcijai išabandyti");
    } else {
        img.style.margin = "0px 10px";
        img.style.float = "left";
        console.log(img);
    }
})

let rightBtn = document.querySelector(".right");

rightBtn.addEventListener("click", function () {
    reset();
    if (window.innerWidth < 391) {
        alert("Jūsų ekranas per siauras šiai funkcijai išabandyti");
    } else {
        img.style.float = "right";
        img.style.margin = "0px 10px";
        console.log(img);
    }
})

let hideBtn = document.querySelector(".hide");

hideBtn.addEventListener("click", function () {
    reset();
    img.style.display = "none";
})


let flipBtn = document.querySelector(".flip");

flipBtn.addEventListener("click", function () {
    reset();
    let main = document.querySelector("main");
    main.appendChild(img);
})


let original = document.querySelector(".back");
original.addEventListener("click", reset);