//Menu button on responsive
menuBtnClicked = () => {
    var headBar = document.querySelector("#headBar");
    var menuBtn = document.getElementById("menu-btn");
    var contact = document.getElementById("contact");
    contact.classList.toggle("active");
    menuBtn.classList.toggle("change");
    headBar.classList.toggle("active");
}

// window.addEventListener("scroll", function(){
//     headBar.classList.toggle("sticky", window.scrollY > 0);
// });


