"use strict"

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};

if(isMobile.any()){
    document.body.classList.add('_touch');
}
else{
    document.body.classList.add('_pc');
}
//Burger-menu
const iconNav = document.querySelector('.nav_icon');    
const navBody = document.querySelector('.nav_body');
if(iconNav){

    iconNav.addEventListener("click",function(e){
        document.body.classList.toggle('_lock');
        iconNav.classList.toggle('_active');
        navBody.classList.toggle('_active');
    });
}
//Scrolling
const menuLinks = document.querySelectorAll('.nav_list_item_link[data-goto]');
if(menuLinks.length>0){
    menuLinks.forEach(menuLink =>{
        menuLink.addEventListener("click",onMenuLinkClick)
    });
    function onMenuLinkClick(e){
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);        
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset ;
            
            if(iconNav.classList.contains('_active')){
                document.body.classList.remove('_lock');
                iconNav.classList.remove('_active');
                navBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefaut();
        }
    }
}