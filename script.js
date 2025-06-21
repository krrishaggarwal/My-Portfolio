let Theme = document.querySelector(".theme");
let Body = document.querySelector("body");
let currentTheme = "dark" ;
Theme.addEventListener("click", ()=>{
    if (currentTheme==="dark"){
        currentTheme = "light";
        Body.classList.add("light-theme");
        Body.classList.remove("dark-theme");

    } else {
        currentTheme = "dark";
        Body.classList.add("dark-theme");
        Body.classList.remove("light-theme");
    }
})