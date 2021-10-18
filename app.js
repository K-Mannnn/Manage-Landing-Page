const ham = document.querySelector('.ham')
const hamBurger = document.querySelector('.hamburger')
const crossImg = document.querySelector('.close')
const navMenu = document.querySelector('.nav-menu')

const regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const form = document.querySelector('form');
const btn = document.querySelector('.btn-go')
const err = document.querySelector('.err')
const errMsg = document.querySelector('.err-msg')
const mail = document.querySelector('input')


ham.addEventListener('click', ()=>{
    navMenu.classList.toggle('nav-menu-active')
    hamBurger.classList.toggle('hamburger-close')
    crossImg.classList.toggle('close-active')
})

const mailError = ()=> {
    let msg = 'please enter a valid email'
    errMsg.append(msg);
    err.append(errMsg)
}

const mailValidation = ()=> {
    if (mail.value.match(regx)){
       alert('valid email')
    }
    else {
        mailError();
    }
}

const myFunction = (e)=> {
    e.preventDefault();
    mailValidation();
    btn.removeEventListener('click', myFunction);
   }

form.addEventListener('submit', (e)=> {
    e.preventDefault();
})

mail.addEventListener('click', () => {
    errMsg.innerHTML = '';
    btn.addEventListener('click', myFunction)
})

btn.addEventListener('click', myFunction)