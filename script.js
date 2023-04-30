//change navbar style on scroll

window.addEventListener('scroll', () =>{
  
    // The toggle() ===> method toggles between hide() and show() for the selected elements. This method checks the selected elements for visibility. show() is run if an element is hidden. hide();

    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 100)  //window scroll on Y direction;
    //when rich 100px then show window-scroll function;
});



//show and hide faq answer;

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq  =>{
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');


        //change icon
        const icon = faq.querySelector('.faq__icon i')

        if(icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus'
        }else{
            icon.classList = 'fa-solid fa-plus'
        }
    })
})




//show and his nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


//eventListner on three line btn
menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";

})


//close nav menu

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";

})