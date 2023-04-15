function contact(event) {

    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
    .sendForm(
        'service_olyne3m',
        'template_f78yg69',
        event.target,
        'w5ie2FScyLVWpYuLP'
    ).then(() => {
         loading.classList.remove("modal__overlay--visible");
         success.classList += ' modal__overlay--visible'
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            'The email service is temporarily unavailable, Please contact me directly on email @ ralphandymenz@gmail.com'
        );
    }) 
}

function toggleModal() {
    document.body.classList += ' modal__open';
    console.log('toggleModal()')
}

let isModalOpen = false

function toggleModal(){
    if (isModalOpen){
        isModalOpen = false
        return document.body.classList.remove('modal__open')
    }
    isModalOpen = true
    return document.body.classList += ' modal__open'
}