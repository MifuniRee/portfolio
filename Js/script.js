// Splash button
const splash = document.querySelector(".splash");

splash.addEventListener("click", (e) =>{
    e.preventDefault();
    splash.classList.add("animate");
    setTimeout(() => {
        splash.classList.remove("animate");
    }, 600);
})

// when user clicks splash button it scroll back to top
splash.addEventListener('click', () => {
    document.body.scrollTop =0;
    document.documentElement.scrollTop =0;
})

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

// Remove toggle icon and navbar when click
menuIcon.classList.remove('fa-x');
navbar.classList.remove('active');

// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);
};

// Scroll Reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .contact-container, .portfolio-box, .conc form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img ', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content ', {origin: 'right'});

// Type JS
var typed = new Typed(".multiple-text", {
    strings:["","Software Engineering", "Data Scientist", "Mobile Developer", "Web Developer", "Student"],
    typeSpeed:100,
    BackSpeed:100,
    backDelay:1000,
    loop:true
})

// CURSORRR
let start = new Date().getTime();

const originPosition = { x: 0, y: 0 };

const last = {
  starTimestamp: start,
  starPosition: originPosition,
  mousePosition: originPosition
}

const config = {
  starAnimationDuration: 1500,
  minimumTimeBetweenStars: 250,
  minimumDistanceBetweenStars: 75,
  glowDuration: 75,
  maximumGlowPointSpacing: 10,
  colors: ["249 146 253", "252 254 255", "245, 173, 246"],
  sizes: ["1.4rem", "1rem", "0.6rem"],
  animations: ["fall-1", "fall-2", "fall-3"]
}
