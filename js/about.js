// style the accordouem Questions & Answers

var acorHed = document.querySelectorAll(".accordion-heading");
var acorContent = document.querySelectorAll(".accordioin-content");

acorHed.forEach(item => {
    item.addEventListener("click" , function(){
        var amma = this.nextElementSibling;
        amma.classList.toggle("accordioin-content_open")

        item.classList.toggle("accordion-heading_open");
    })
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        clickable: true,
    },
});