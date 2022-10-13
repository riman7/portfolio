if(localStorage.getItem("mode") == "dark-theme"){
    document.body.classList.add("dark-theme");
    document.getElementById("dark-theme-icon").src = "./photos/sun.png";
}
if(localStorage.getItem("mode") == "bright-theme"){
    document.body.classList.remove("dark-theme");
    document.getElementById("dark-theme-icon").src = "./photos/moon.png";
}
darkMode = () => {
    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("mode", "bright-theme");
    } 
    else{
        localStorage.setItem("mode", "dark-theme");
    }
    if(localStorage.getItem("mode") == "dark-theme"){
        document.body.classList.add("dark-theme");
        document.getElementById("dark-theme-icon").src = "./photos/sun.png";
    }
    if(localStorage.getItem("mode") == "bright-theme"){
        document.body.classList.remove("dark-theme");
        document.getElementById("dark-theme-icon").src = "./photos/moon.png";
    }
}

