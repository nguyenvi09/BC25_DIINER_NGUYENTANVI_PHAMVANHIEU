
document.querySelector(".header__nav--button").onclick = function(){
    document.querySelector('.overlay').classList.add('overlay-active');
};

document.querySelector(".overlay-close").onclick = function(){
    document.querySelector('.overlay').classList.remove('overlay-active');
};