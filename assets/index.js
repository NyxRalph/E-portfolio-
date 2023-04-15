// 
//
//

function contact(event) {
    event.preventDefault();
    // console.log('It worked')
    // emailjs
    // .sendForm(
    //     'service_olyne3m',
    //     'template_hznx51v',
    //     event.target,
    //     'w5ie2FScyLVWpYuLP'
    // ).then(() => {
    //     'this worked'
    // })

    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    setTimeout(() => {
        loading.classList += " modal__overlay--visible"
        console.log('it worked1')
    }, 1000)
}