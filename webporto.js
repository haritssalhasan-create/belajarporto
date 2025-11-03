let headerSection = document.getElementById('header');
let title = document.querySelector('.title');   
let menu = document.querySelectorAll(".menu ul li a");
let floatingButton = document.getElementById('floating-button');

function scrollHeader(){
    if(window.scrollY){
        headerSection.style.
        backgroundColor="#000000";
        headerSection.style.
        borderBottom = 
        "none";
        menu. array.forEach(element => {
        title.style.color="#447D9B";
        });
        floatingButton.style.display = 'flex';
 }else{
    headerSection.style.
        backgroundColor="transparent";
        headerSection.style.
        borderBottom = 
        "1px solid #273F4F";    
    }
}
window.onscroll = scrollHeader;

let HomeLink = document.querySelector('.menu ul li a [href="#home"]');
let aboutLink = document.querySelector('.menu ul li a [href="#about"]');
let homeSection = document.getElementById('home');
let aboutSection = document.getElementById('about');

function scrollToHome(event){
event.preventDefault();
homeSection.scrollIntoView({ behavior : "smooth"});
}

function scrollToAbout(event){
event.preventDefault();
aboutSection.scrollIntoView({ behavior : "smooth"});
}
HomeLink.addEventListener("click",
scrollToHome);
aboutLinkLink.addEventListener("click",
scrollToAbout);

floatingButton.addEventListener("click",function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

let menubars = document.getElementById("menubars");
let closeSidebar = document.getElementById("close-sidebar");

let mediaScreen = window.matchMedia("(max-width:768)px");

function handleScreenChange(e){
    if (e.matches){
        menubars.style.display = "block"
        menubars.addEventListener("click", function () )
    }
}