
// hamburger menu

// Variables

var fas = $(".fas");  //Hamburger menu symbol
var x = $(".fas.fa-times") // close X button
var hamburgerMenu = $(".hamburger-menu"); // inner menu



//  Two onclick events needed

// 1st - Fade In

fas.click(function() {
    hamburgerMenu.fadeIn();
});



// 2nd - Fade Out

x.click(function() {
    hamburgerMenu.fadeOut();
});