const openButton = document.getElementById("js--openNavbar")
const closeButton = document.getElementById("js--closeNavbar")
const navbar = document.getElementsByClassName("navbar")[0]
const background = document.getElementById("disableBack")

console.log(background)

openButton.addEventListener('click', () => {    
    console.log("Open")
    navbar.classList.replace('nav--closed', 'nav--open')
    background.classList.add('disableBack')
})


closeButton.addEventListener('click', () => {
    navbar.classList.replace('nav--open', 'nav--closed')
    background.classList.remove('disableBack')
})

background.addEventListener('click', () => {
    navbar.classList.replace('nav--open', 'nav--closed')
    background.classList.remove('disableBack')
})