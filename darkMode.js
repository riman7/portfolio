if(localStorage.getItem("mode") == "dark-theme"){
    document.body.classList.add("dark-theme");
    if(document == "https://riman7.github.io/portfolio/"){
        document.getElementById("dark-theme-icon").src = "./photos/sun.png";
    }
    else{
        document.getElementById("dark-theme-icon").src = "../photos/sun.png";
    }
}
if(localStorage.getItem("mode") == "bright-theme"){
    document.body.classList.remove("dark-theme");
    if(document == "https://riman7.github.io/portfolio/"){
        document.getElementById("dark-theme-icon").src = "./photos/moon.png";
    }
    else{
        document.getElementById("dark-theme-icon").src = "../photos/moon.png";
    }
}
console.log(document);
darkMode = () => {
    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("mode", "bright-theme");
    } 
    else{
        localStorage.setItem("mode", "dark-theme");
    }
    if(localStorage.getItem("mode") == "dark-theme"){
        document.body.classList.add("dark-theme");
        if(document == "https://riman7.github.io/portfolio/"){
        document.getElementById("dark-theme-icon").src = "./photos/sun.png";
    }
    else{
        document.getElementById("dark-theme-icon").src = "../photos/sun.png";
    }
    }
    if(localStorage.getItem("mode") == "bright-theme"){
        document.body.classList.remove("dark-theme");
        if(document == "https://riman7.github.io/portfolio/"){
        document.getElementById("dark-theme-icon").src = "./photos/moon.png";
        }
        else{
            document.getElementById("dark-theme-icon").src = "../photos/moon.png";
        }
    }
   
}

