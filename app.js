const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Show Active Menu when Scrolling
const highlightMenu = () => {
    const element = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const projectMenu = document.querySelector('#services-page');

    let scrollPos = window.scrollY;
    //console.log(scrollPos);
    
    // adds the 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }

    else if(window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        projectMenu.classList.remove('highlight');
        return;
    }

    else if(window.innerWidth > 960 && scrollPos < 2345){
        projectMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }

    if((element && window.innderWidth < 960 && scrollPos < 600) || element){
        element.classList.remove('highlight');
    }

}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


// Close mobile menu
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);



// //https://www.youtube.com/watch?v=3-2Pj5hxwrw&ab_channel=BrianDesign

