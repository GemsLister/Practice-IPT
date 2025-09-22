const signUpBtn = document.querySelector(".sign-up-btn");
const container4Section = document.querySelector(".container4Section");

signUpBtn.addEventListener('click', () => {
    container4Section.style.cssText = `
    background-color: green;
    border-radius: 13px`;
})