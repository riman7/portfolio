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
wixImgs = ['../photos/wix ss1.JPG', '../photos/wix ss2.JPG', '../photos/wix ss3.JPG', '../photos/wix ss4.JPG', '../photos/wix ss5.JPG']
const wixImg = document.getElementById('wixImg')
const peojectMoreInfo =  document.getElementById('peojectMoreInfo');
const portfolioProject =  document.getElementById('portfolioProject');
const portfolioProjectInfo =  document.getElementById('portfolioProjectInfo');
const blackJackProject = document.getElementById('blackJackProject');
const blackJackProjectInfo = document.getElementById('blackJackProjectInfo');
const wixProject = document.getElementById('wixProject');
const wixInfo = document.getElementById('wixProjectInfo');
const tvColor = document.getElementById('tvColor');
const display = document.getElementById('tvDisplay');
var tvOn = false;
turnOffTv = () =>{
    portfolioProject.style.display = "none";
    portfolioProjectInfo.style.display = "none";
    blackJackProject.style.display = "none";
    blackJackProjectInfo.style.display = "none";
    wixProject.style.display = "none";
    wixInfo.style.display = "none";
    peojectMoreInfo.style.display = "block";
    display.classList.remove('active');
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
wixCLicked = () =>{
    turnOffTv();
    display.classList.add('active');
    wixProject.style.display = "block";
    peojectMoreInfo.style.display = "none";
    wixInfo.style.display = "block";
    wixImgChange();
    tvOn = true;
    tvColorChange();
}

function wixImgChange(){
    imgChange = () => {
        setTimeout(() =>{
            wixImg.src = wixImgs[1];}, 3000);
        setTimeout(() =>{
            wixImg.src = wixImgs[2];}, 6000);
        setTimeout(() =>{
            wixImg.src = wixImgs[3];}, 9000);
        setTimeout(() =>{
            wixImg.src = wixImgs[4];}, 12000);
        setTimeout(() =>{
            wixImg.src = wixImgs[0];}, 15000);
        }
        imgChange();
setInterval(imgChange, 15000);
}


