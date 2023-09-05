/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    if (this.scrollY > 50) 
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.ec__modal');
    modalBtns = document.querySelectorAll('.ec__button');
    modalClose = document.querySelectorAll('.ec__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click',() =>{
        modal(i)
    })
})

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})

// Projects Modal

const modalViews1 = document.querySelectorAll('.projects__modal');
    modalBtns1 = document.querySelectorAll('.projects__button');
    modalClose1 = document.querySelectorAll('.projects__modal-close');

let modal1 = function(modalClick){
    modalViews1[modalClick].classList.add('active-modalp')
}

modalBtns1.forEach((mb, i) =>{
    mb.addEventListener('click',() =>{
        modal1(i)
    })
})

modalClose1.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews1.forEach((mv) => {
            mv.classList.remove('active-modalp')
        })
    })
})

//Future plans modal

const modalViews2 = document.querySelectorAll('.fplans__modal');
    modalBtns2 = document.querySelectorAll('.fplans__button');
    modalClose2 = document.querySelectorAll('.fplans__modal-close');

let modal2 = function(modalClick){
    modalViews2[modalClick].classList.add('active-modalf')
}

modalBtns2.forEach((mb, i) =>{
    mb.addEventListener('click',() =>{
        modal2(i)
    })
})

modalClose2.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews2.forEach((mv) => {
            mv.classList.remove('active-modalf')
        })
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/* Link active work */ 


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== LIGHT DARK THEME ===============*/ 

const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/