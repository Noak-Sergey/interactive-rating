window.addEventListener("DOMContentLoaded", () => {

    let currentRating = '' ;
    let selectedRating = '' ;

    const btns = document.querySelectorAll('.btn'),
        submit = document.querySelector('.button'),
        screenOne = document.querySelector('.rating'),
        screenTwo = document.querySelector('.thankYou'),
        selectSpan = document.querySelector('.select-num');

        
        const selectNumber = (numBtn) => {

            if (selectedRating !== "") {
                //selectedRating.classList.remove('checked-btn');
                btns.forEach( btn => btn.classList.remove('checked-btn'))
            }

            currentRating = numBtn.textContent;
            numBtn.classList.add('checked-btn');
            selectedRating = numBtn;

            console.log(numBtn)
        }
        
        const showThanks = () => {

            if(currentRating === '') {
                return
            }

            selectSpan.textContent = currentRating;
            screenOne.classList.toggle('hide');
            screenTwo.classList.toggle('hide');

            const timerId = () => {
                setTimeout(() => {
                    screenTwo.classList.toggle('hide'); 
                    screenOne.classList.toggle('hide');
                    currentRating = '' ;
                    selectedRating.classList.remove('checked-btn');
                }, 3000);
            } 
            timerId();
            clearTimeout(timerId);
        }

        btns.forEach( (btn) => {btn.addEventListener('click', () => selectNumber(btn))})

        submit.addEventListener('click', showThanks);
})