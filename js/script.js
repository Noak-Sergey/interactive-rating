window.addEventListener("DOMContentLoaded", () => {

    const btns = document.querySelectorAll('.btn'),
        submit = document.querySelector('.button'),
        screenOne = document.querySelector('.rating'),
        screenTwo = document.querySelector('.thankYou');
    
        submit.addEventListener('click', () => {
            screenOne.classList.toggle('hide');
            screenTwo.classList.toggle('hide');
            const timerId = setTimeout(() => {
                screenTwo.classList.toggle('hide'); 
                screenOne.classList.toggle('hide');
            }, 3000);
            timerId();
            clearTimeout(timerId);
        })
})