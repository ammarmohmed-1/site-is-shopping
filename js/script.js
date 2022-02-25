window.onscroll = ()=> {
    sideBar.classList.remove("active");
    searchForm.classList.remove("search-form_close");
};

// style the side bar

var sideBar = document.querySelector(".side-bar");

const menubtn = document.getElementById("menu-btn");

menubtn.addEventListener("click" , ()=> {
    sideBar.classList.toggle("active");
})

const close = document.getElementById("close-side-bar")

close.addEventListener("click" , ()=> {
    sideBar.classList.toggle("active");
    
})


// start style the search-btn

const searchBtn = document.getElementById("search-btn");

const searchForm = document.querySelector(".search-form");

searchBtn.addEventListener("click" , ()=> {
    searchForm.classList.toggle("search-form_close")
})

