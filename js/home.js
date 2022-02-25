// style the page home

var arryhomeslide = ['<div id="offer_prodact"><div class="image"><img src="images/home-img-2.jpg" alt=""></div><div class="content"><span>upto 50% off</span><h3>smart watch</h3><a href="#" class="btn">shop now</a></div></div>','<div id="offer_prodact"><div class="image"><img src="images/home-img-3.jpg" alt=""></div><div class="content"><span>upto 50% off</span><h3> Earphone </h3><a href="#" class="btn">shop now</a></div></div>','<div id="offer_prodact"><div class="image"><img src="images/home-img-1.jpg" alt=""></div><div class="content"><span>upto 50% off</span><h3>Smart watch</h3><a href="#" class="btn">shop now</a></div></div>'];
// const arryhomeslide = ['1' , '2' , '3'] ;


var next = document.getElementById("next"),
prev = document.getElementById("prev"),
contaioner_offer_prodact = document.getElementById("contaioner_offer_prodact");


var i = 0 ;
next.addEventListener("click", function(){

    contaioner_offer_prodact.innerHTML = arryhomeslide[i];
    i++
    if(i > arryhomeslide.length -1){  i = 0  }
   

});
 prev.addEventListener("click", function(){
    contaioner_offer_prodact.innerHTML = arryhomeslide[i];
    i--
    if(i = 0 ){
        i = 3
    }
});
    // contaioner_offer_prodact.innerHTML = arryhomeslide[i];
    // i--
    // if(i < arryhomeslide.length -1){  i = 0  }


    

