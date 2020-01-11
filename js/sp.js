onload = function () {
    let b1 = document.querySelector(".b1")
    let b2 = document.querySelector(".b2")
    let b3 = document.querySelector(".b3")
    let b4 = document.querySelector(".b4")
    let a1 = document.querySelector(".a1")
    let a2 = document.querySelector(".a2")
    let a3 = document.querySelector(".a3")
    let a4 = document.querySelector(".a4")
    b1.style.display = "block";
    a1.onmouseenter = function () {
        b1.style.display = "block";
        b2.style.display = "none";
        b3.style.display = "none"
        b4.style.display = "none"
    };
    a2.onmouseenter = function () {
        b1.style.display = "none";
        b2.style.display = "block";
        b3.style.display = "none"
        b4.style.display = "none"
    };
    a3.onmouseenter = function () {
        b1.style.display = "none";
        b2.style.display = "none";
        b3.style.display = "block"
        b4.style.display = "none"
    };
    a4.onmouseenter = function () {
        b1.style.display = "none";
        b2.style.display = "none";
        b3.style.display = "none"
        b4.style.display = "block"
    };



};