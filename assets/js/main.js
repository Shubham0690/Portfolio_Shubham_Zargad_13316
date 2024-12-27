
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img, .project__description',{delay: 500}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
sr.reveal('.project__title',{}) 


function validateForm() {
    const form = document.getElementById('contactForm');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    let isValid = true;

    // Regex for name validation (Only letters, 2-15 characters)
    const nameRegex = /^[A-Za-z]{2,15}$/;
    if (!nameRegex.test(name)) {
        document.getElementById('name').classList.add('error');
        nameError.textContent = "Please enter a valid name (2-15 alphabetic characters only).";
        isValid = false;
    } else {
        document.getElementById('name').classList.remove('error');
        nameError.textContent = "";
    }

    // Regex for email validation (must end with @gmail.com)
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email').classList.add('error');
        emailError.textContent = "Please enter a valid email (e.g., example@gmail.com).";
        isValid = false;
    } else {
        document.getElementById('email').classList.remove('error');
        emailError.textContent = "";
    }

    // Message validation (should not be empty)
    if (!message) {
        document.getElementById('message').classList.add('error');
        messageError.textContent = "Please enter your message.";
        isValid = false;
    } else {
        document.getElementById('message').classList.remove('error');
        messageError.textContent = "";
    }

    if (isValid) {
        alert("Form submitted successfully!");
        
        // Reset the form and error messages
        form.reset();
        document.getElementById('name').classList.remove('error');
        document.getElementById('email').classList.remove('error');
        document.getElementById('message').classList.remove('error');
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
    }
}
