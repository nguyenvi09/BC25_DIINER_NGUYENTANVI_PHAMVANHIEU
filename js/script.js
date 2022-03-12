
document.querySelector(".header__nav--button").onclick = function(){
    document.querySelector('.overlay').classList.add('overlay-active');
};

document.querySelector(".overlay-close").onclick = function(){
    document.querySelector('.overlay').classList.remove('overlay-active');
};

jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

// button sáng/tối

// let $ = document.querySelector.bind(document);
// let $$ = document.querySelectorAll.bind(document);

// document.querySelector(".fa-sun").onclick = function(){
//     document.querySelector(".fa-sun").classList.add("icon");
//     document.querySelector(".fa-moon").classList.remove("icon");

//     document.querySelector(".input-search").classList.remove("active-light");
//     document.querySelector(".about").classList.remove("active-light");
//     document.querySelector(".categories").classList.remove("active-light");
//     document.querySelector(".sub-title").classList.remove("sub-title-light");
// }

// document.querySelector(".fa-moon").onclick = function(){
//     document.querySelector(".fa-sun").classList.remove("icon");
//     document.querySelector(".fa-moon").classList.add("icon");

//     document.querySelector(".input-search").classList.add("active-light");
//     document.querySelector(".about").classList.add("active-light");
//     document.querySelector(".categories").classList.add("active-light");
//     document.querySelector(".sub-title").classList.add("sub-title-light");


// }


