// When Page open
if(document.body.classList.contains('dark-theme')){
    localStorage.setItem("mode", "dark-theme");
}
if(localStorage.getItem("mode") == "dark-theme"){
    document.body.classList.add("dark-theme");
    document.getElementById("dark-theme-icon").src = "./dark theme photos/sun.png";
}
if(localStorage.getItem("mode") == "bright-theme"){
    document.body.classList.remove("dark-theme");
    document.getElementById("dark-theme-icon").src = "./dark theme photos/moon.png";
}

// when buttom clicked
darkMode = () => {
    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("mode", "bright-theme");
    } 
    else{
        localStorage.setItem("mode", "dark-theme");
    }
    if(localStorage.getItem("mode") == "dark-theme"){
        document.body.classList.add("dark-theme");
        document.getElementById("dark-theme-icon").src = "./dark theme photos/sun.png";
    }
    if(localStorage.getItem("mode") == "bright-theme"){
        document.body.classList.remove("dark-theme");
        document.getElementById("dark-theme-icon").src = "./dark theme photos/moon.png";
    }
   
}

