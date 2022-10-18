//Menu button on responsive
menuBtnClicked = () => {
    var headBar = document.querySelector("#headBar");
    var menuBtn = document.getElementById("menu-btn");
    var about = document.getElementById("about");
    about.classList.toggle("active");
    menuBtn.classList.toggle("change");
    headBar.classList.toggle("active");
}


// <---Chanaging color in skills section--->
genRandomTime = () => {
    return Math.random() * 3;
}
colorArray = ["hsla(0, 100%, 50%, 0.9)", "hsla(240, 100%, 50%, 0.9)", "hsla(120, 100%, 35%, 0.9)"]
changeColor = () =>{
    return colorArray[Math.floor(Math.random() * colorArray.length)];
}
start = () =>{01
    for(i = 2; i<=9; i++){
        document.querySelector(".back-circle-" + i).style.transition = "ease-out .5s";
        document.querySelector(".back-circle-" + i).style.backgroundColor = changeColor();
        document.querySelector(".back-circle-" + i).style.boxShadow = "0 0 .4em " + changeColor();
    }
}
setInterval(start, 2000);
