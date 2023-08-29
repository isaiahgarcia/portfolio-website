/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    const formData = new FormData(contactForm);
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    console.log(formData);
    e.preventDefault();

    fetch('https://ig-backend-887bc2c7bde6.herokuapp.com/send-email', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({data})
    })
    .then(response => response.json())
    .then(() => {
        // Success logic
        contactMessage.textContent = 'Message sent successfully ✅';

        // Remove message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        // Clear form
        contactForm.reset();
    })
    .catch(error => {
        // Error logic
        contactMessage.textContent = 'Message not sent (service error) ❌';

        // Remove message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);
    });
};

contactForm.addEventListener('submit', sendEmail);