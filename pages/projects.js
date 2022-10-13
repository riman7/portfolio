//Menu button on responsive
menuBtnClicked = () => {
    var headBar = document.querySelector("#headBar");
    var menuBtn = document.getElementById("menu-btn");
    var project = document.getElementById("project");
    project.classList.toggle("active");
    menuBtn.classList.toggle("change");
    headBar.classList.toggle("active");
}

//Project display
const peojectMoreInfo =  document.getElementById('peojectMoreInfo');
const portfolioProject =  document.getElementById('portfolioProject');
const portfolioProjectInfo =  document.getElementById('portfolioProjectInfo');
const blackJackProject = document.getElementById('blackJackProject');
const blackJackProjectInfo = document.getElementById('blackJackProjectInfo');
const tvColor = document.getElementById('tvColor');
var tvOn = false;
turnOffTv = () =>{
    portfolioProject.style.display = "none";
    portfolioProjectInfo.style.display = "none";
    blackJackProject.style.display = "none";
    blackJackProjectInfo.style.display = "none";
    peojectMoreInfo.style.display = "block";
    tvOn = false;
    tvColorChange();
}
tvColorChange = () =>{
    if(tvOn == true){
    tvColor.classList.add('green');}
    else{document.getElementById('tvColor').classList.remove('green');}
}
portfolioClicked = () =>{
    turnOffTv();
    portfolioProject.style.display = "block";
    peojectMoreInfo.style.display = "none";
    portfolioProjectInfo.style.display = "block";
    tvOn = true;
    tvColorChange();
}
blackJackClicked = () =>{
    turnOffTv();
    blackJackProject.style.display = "block";
    peojectMoreInfo.style.display = "none";
    blackJackProjectInfo.style.display = "block";
    tvOn = true;
    tvColorChange();
}