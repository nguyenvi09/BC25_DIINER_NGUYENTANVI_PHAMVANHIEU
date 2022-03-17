
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

// dark or light mode

document.querySelector(".fas.fa-moon").onclick = function(){
    document.querySelector(".fas.fa-moon").classList.add("change-icon");
    document.querySelector(".fas.fa-sun").classList.remove("change-icon");

    
    var changeModeBG2 = document.querySelectorAll(".change-mode-bg2");
   for(i=0; i <= changeModeBG2.length; i++){
        changeModeBG2[i]?.classList.add("bg-grey");
    };


   var changeMode = document.querySelectorAll(".change-mode");
   for(i=0; i <= changeMode.length; i++){
        changeMode[i]?.classList.add("light-mode");
   };

   var changeColor = document.querySelectorAll(".change-color");
   console.log(changeColor);
   for(i=0; i <= changeColor.length; i++){
    changeColor[i]?.classList.add("color-black");
   };

   var changeBorder = document.querySelectorAll(".change-border");
   console.log(changeBorder);
   for(i=0; i <= changeBorder.length; i++){
    changeBorder[i]?.classList.add("mode-border");
   };

   var changeBgIcon = document.querySelectorAll(".change-bg-icon");
   for(i=0; i <= changeBgIcon.length; i++){
    changeBgIcon[i]?.classList.add("bg-icon");
   };

   var changeBgWhite = document.querySelectorAll(".change-bg-white");
   for(i=0; i <= changeBgWhite.length; i++){
    changeBgWhite[i]?.classList.add("bg-white");
   };

   var changeColorText = document.querySelectorAll(".change-color-text");
   for(i=0; i <= changeColorText.length; i++){
    changeColorText[i]?.classList.add("color-text");
   };
   
};

document.querySelector(".fas.fa-sun").onclick = function(){
    document.querySelector(".fas.fa-sun").classList.add("change-icon");
    document.querySelector(".fas.fa-moon").classList.remove("change-icon");

    var changeModeBG2 = document.querySelectorAll(".change-mode-bg2");
    for(i=0; i <= changeModeBG2.length; i++){
         changeModeBG2[i]?.classList.remove("bg-grey");
     };

    var changeMode = document.querySelectorAll(".change-mode");
   for(i=0; i <= changeMode.length; i++){
        changeMode[i]?.classList.remove("light-mode");
   };

   var changeColor = document.querySelectorAll(".change-color");
   for(i=0; i <= changeColor.length; i++){
    changeColor[i]?.classList.remove("color-black");
   };

   var changeBorder = document.querySelectorAll(".change-border");
   console.log(changeBorder);
   for(i=0; i <= changeBorder.length; i++){
    changeBorder[i]?.classList.remove("mode-border");
   };

   var changeBgIcon = document.querySelectorAll(".change-bg-icon");
   for(i=0; i <= changeBgIcon.length; i++){
    changeBgIcon[i]?.classList.remove("bg-icon");
   };

   var changeBgWhite = document.querySelectorAll(".change-bg-white");
   for(i=0; i <= changeBgWhite.length; i++){
    changeBgWhite[i]?.classList.remove("bg-white");
   };

   var changeColorText = document.querySelectorAll(".change-color-text");
   for(i=0; i <= changeColorText.length; i++){
    changeColorText[i]?.classList.remove("color-text");
   };
};