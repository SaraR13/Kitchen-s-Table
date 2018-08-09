(function(){
    
const   $topNavContainer           = $(".menuTopics"),
        $menuBtnRecipes            = $("#menuBtnRecipes"),
        $topNavContainerRecipes    = $(".mainMenu .menuTopicsRecipes");
        
let offset = 250;


//PRELOADER
    
$(document).ready(function() {
                  
    setTimeout(function() {
    $("body").addClass("loaded");
}, 1200);
                
});
    
    
      
   
    
 //MENU ICON ON SMALL DEVICES HOMEPAGE
 

    
   
function bindMenuBtn () {
    $("#menuBtn, .menuTopics li a").on("click", function () {
    if ( $(window).width() < 767) { 
    $topNavContainer.slideToggle();
        }
    });
    
}
    

    
function bindEnquire() {
    enquire.register("screen and (min-width: 768px)", {
    match: function () {
    $topNavContainer.show();
},

    unmatch: function () {
    $topNavContainer.hide();
    }
    });
}


// MENU ICON ON SMALL DEVICES RECIPE PAGES
    
function bindMenuBtnRecipes() {
    $menuBtnRecipes.on("click", function () {
    $topNavContainerRecipes.slideToggle();
    });
}
    
function bindEnquireRecipes() {
    enquire.register("screen and (min-width: 768px)", {
    match: function () {
    $topNavContainerRecipes.show();
},

    unmatch: function () {
    $topNavContainerRecipes.hide();
    }
    });
}

    
    
//HOME BUTTON
   
$(document).ready(function() {

$(window).scroll(function() {
 
if ($(this).scrollTop() > offset) {
 
$(".homeButton").fadeIn(300);

} else {
 
$(".homeButton").fadeOut(300);
 
}
 
});
 
 
 
$(".homeButton").click(function(event) {
 
event.preventDefault();
 
$("html, body").animate({scrollTop: 0}, 300);
 
return false;
 
})
 
});    

  
    
    
function init() {
    bindMenuBtn();
    bindMenuBtnRecipes();
}    
    
window.addEventListener("load", init); 
    
    
})(); //IIFY