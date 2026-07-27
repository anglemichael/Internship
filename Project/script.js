console.log("Javascript is connected")
const year= new Date().getFullYear();
document.querySelector('.site-footer p').innerHTML=
    `&copy; ${year} Angel Biju. All rights reserved.`;

function getGreeting(){
    const hour= new Date().getHours();
    if(hour < 12) return "Good Morning";
    if (hour<17) return "Good Afternoon";
    return "Good Evening";
}
const heroTitle =document.querySelector('.hero-section h1');
if (heroTitle){
    heroTitle.textContent = `${getGreeting()}, I'm Angel 👋`;
}
// //Dark Mode
// let themeBtn=document.querySelector(".theme-toggle")
// function updateThemeIcon(theme){
//     themeBtn.textContent=theme==="dark"?"🌙":"☀️"
// }
// if(themeBtn){
//     let savedTheme = localStorage.getItem("theme")||"light";
// document.body.dataset.theme=savedTheme;
// updateThemeIcon(savedTheme);

// themeBtn.addEventListener("click",()=>{
//     let nextTheme=
//     document.body.dataset.theme==="light"? "dark":"light"
//     document.body.dataset.theme=nextTheme;
//     localStorage.setItem("theme",nextTheme);
//     updateThemeIcon(nextTheme);

// })
// }
let themeBtn = document.querySelector(".theme-toggle");
function updateThemeIcon(theme) {
    themeBtn.textContent = theme === "dark" ? "🌙" : "☀️";
}
if (themeBtn) {
    let savedTheme = localStorage.getItem("theme") || "light";
    document.body.dataset.theme = savedTheme;
    updateThemeIcon(savedTheme);
    themeBtn.addEventListener("click", () => {
        let nextTheme =
            document.body.dataset.theme === "light"? "dark": "light";
        document.body.dataset.theme = nextTheme;
        localStorage.setItem("theme", nextTheme);
        updateThemeIcon(nextTheme);
    });
}

let menuToggle=document.querySelector(".menu-toggle");
let navLinks=document.querySelector("nav-link");
menuToggle.addEventListener('click',()=>{
    navLinks.classList.toggle("open");
    menuToggle.setAttribute('aria-expanded',navLinks.classList.contains('open'));
})
let header=document.querySelector(".site-header")
window.addEventListener("scroll",()=>{
    if(window.scrollY>50){
        header.classList.add('scrolled');
    }
    else{
        header.classList.remove('scrolled');

    }
})
let section=documetiom.querySelectorAll("section[id]");
let navitems=document.querySelectorAll('.navlink a')
window.addElementListener("scroll",()=>{
    let current="";
    section.forEach(section=>{
        if(window.scrollY>=section.offsetTop-100){
            current-section.getAttribute('id');
        }
    })
});
navitems.forEach(link=>{
    link.classList.remover("active");
    if(link.getAttribute("href")===`#${current}`){
        link.classList.add("active");
    }
});