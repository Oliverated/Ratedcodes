let body = document.querySelector("body");
let modeBlk = document.getElementById("slider-ball");
let hamburger = document.querySelector(".hamburger");
let navBlock = document.querySelector(".nav-bar");
let navList = document.querySelector(".nav-list");
let darkMode = localStorage.getItem("darkMode");
let load_ctn =document.querySelector(".loading-ctn");

//loader 

function End_loader(){
  load_ctn.classList.add("clear")
}

setTimeout(() => {
  End_loader()
}, 2800);

// nav-bar

let last_navScroll = 0

window.addEventListener('scroll', () =>{
  let navScroll = window.pageYOffset || document.documentElement.scrollTop;

  if(navScroll < last_navScroll){
    navBlock.classList.remove('hide1');
  }else{
    navBlock.classList.add('hide1')
  }
  last_navScroll = navScroll;
})

let txtBlock = document.getElementById("text-block");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
});

navList.addEventListener("click", function () {
  navBlock.classList.toggle("navSlide");
  hamburger.classList.toggle("active");
});

hamburger.addEventListener("click", function () {
  navBlock.classList.toggle("navSlide");
});
//nav ends

// // dark mode

// function enableDarkMode() {
//   body.classList.toggle("darkmode");
//   localStorage.setItem("darkMode", "enable");
// }

// function disableDarkMode() {
//   body.classList.toggle("darkmode");
//   localStorage.setItem("darkMode", null);
// }

// if (darkMode === "enable") {
//   enableDarkMode();
// }

// modeBlk.addEventListener("click", () => {
//   localStorage.getItem("darkMode");
//   if (darkMode !== "enable") {
//     enableDarkMode(); 
//   } else {
//     disableDarkMode();
//   // console.log("go");
//   }
// });

//email sender
function sendEmail(){
  Email.send({
  Host : "smtp.elasticemail.com",
  Username : "victorlodoliver@gmail.com",
  Password : "E7756217CEA069E2DB92AD03B5A72AE75815",
  To : 'victorlodoliver@gmail.com',
  From : "victorlodoliver@gmail.com",
  Subject :"",
  Body :"Name: " + document.getElementById('userName').value 
  + "<br> Email: " + document.getElementById('email').value 
  + "<br> Message: " +  document.getElementById('email-msg').value 
}).then(
message => alert(document.getElementById('userName').value + " Email sent")
);
}


