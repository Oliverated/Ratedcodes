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

// scrollers

   const scrollers = document.querySelectorAll(".scroller");

      // If a user hasn't opted in for recuded motion, then we add the animation
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
      }

      function addAnimation() {
        scrollers.forEach((scroller) => {
          // add data-animated="true" to every `.scroller` on the page
          scroller.setAttribute("data-animated", true);

          // Make an array from the elements within `.scroller-inner`
          const scrollerInner = scroller.querySelector(".scroller__inner");
          const scrollerContent = Array.from(scrollerInner.children);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
          });
        });
      }

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


