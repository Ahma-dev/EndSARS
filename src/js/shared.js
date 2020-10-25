const DOMElements =  {
    closeNavBtn: document.querySelector('.close-nav-btn'),
    navIcon: document.getElementById('nav-icon'),
    overlay: document.getElementById('overlay'),
    mobileNav: document.querySelector('.mobile-nav'),
}

const navBtnHandler = () => {
    console.log(DOMElements.nav);
    DOMElements.mobileNav.style.display = "block";
    DOMElements.navIcon.style.display = "none";
    DOMElements.overlay.style.position = "fixed";
    DOMElements.overlay.style.display = "block";
  };
  
  const closeNavBtnHandler = () => {
    DOMElements.mobileNav.style.display = 'none'
    DOMElements.navIcon.style.display = "flex";
    DOMElements.overlay.style.position = "static";
    DOMElements.overlay.style.display = "none";
  };

DOMElements.navIcon.addEventListener('click', navBtnHandler);
DOMElements.closeNavBtn.addEventListener('click', closeNavBtnHandler);
DOMElements.overlay.addEventListener('click', closeNavBtnHandler);
DOMElements.mobileNav.querySelector('a:first-of-type').addEventListener('click', closeNavBtnHandler)