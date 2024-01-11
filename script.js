var slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[slideIndex - 1].src="images/circle.png";
    }
    x[slideIndex - 1].style.display = "inline";
    dots[slideIndex - 1].src="images/circle_filled.png"
}