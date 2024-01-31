var slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var x = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].src = "images/circle.png"
    }
    x[slideIndex - 1].style.display = "inline";
    dots[slideIndex - 1].src = "images/circle_filled.png"
}

let translateButton = document.getElementById("translate")
translateButton.addEventListener("click", (e) => {
    let html = document.getElementsByTagName("html")[0]
    if (html.getAttribute("lang") == "nl") {
        window.location.href = "index_en.html"
    }
    else{
        window.location.href = "index.html"
    }
})