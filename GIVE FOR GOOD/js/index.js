// Animation Changing according to width
const checkWidthDoAnime = () => {
    // console.log(window.outerWidth);
    if (window.outerWidth <= 768) {
        const dataAos = document.body.querySelectorAll('[data-aos]');
        for (let i = 0; i < dataAos.length; i++) {
            dataAos[i].setAttribute('data-aos', 'fade-up');
        }
    }
}

// Contact Form
const contactUs = (event) => {

    const userName = document.querySelector('#contactName');
    const userEmail = document.querySelector('#contactEmail');
    const userSubject = document.querySelector('#contactSubject');
    const userMessage = document.querySelector('#contactMessage');

    swal({
        text: `Name- ${userName.value} \nEmail- ${userEmail.value} \nSubject- ${userSubject.value} \nMessage- ${userMessage.value}`,
        icon: 'success'
    });
    [userName.value, userEmail.value, userSubject.value, userMessage.value] = ['', '', '', ''];
}