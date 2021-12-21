var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}



const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

 
$(document).ready(function() {
    //responsive menu toggle
    $("#menutoggle").click(function() {
        $('.xs-menu').toggleClass('displaynone');

        });
    //add active class on menu
    $('ul li').click(function(e) {
        e.preventDefault();
        $('li').removeClass('active');
        $(this).addClass('active');
    });
//drop down menu	
        $(".drop-down").hover(function() {
            $('.mega-menu').addClass('display-on');
        });
        $(".drop-down").mouseleave(function() {
            $('.mega-menu').removeClass('display-on');
        });

});

