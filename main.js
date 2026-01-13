let body = document.querySelector("body");
let modeBlk = document.getElementById("slider-ball");
let cover_bg = document.querySelector(".cover-bg");
let harm_btn = document.querySelector(".harm");
let nav_bar = document.querySelector("header nav");
let nav_list = document.querySelectorAll(".nav-list a");
let darkMode = localStorage.getItem("darkMode");
let load_ctn = document.querySelector(".loading-ctn");
let cancel_btn = document.querySelector(".cancel");
let sections = document.querySelectorAll("section");
// Loader
setTimeout(() => {
  load_ctn.classList.add("clear");
  startTypewriter(); 
}, 2800);

// Typewriter
function startTypewriter() {
  const el = document.getElementById('type');
  const cursor = document.querySelector(".cursor");
  const text = `I am Ovbiebo O. <em class="special">Oliver</em>`;
  const speed = 100; // ms per character

  let i = 0;
  function typewriter() {
    if (i <= text.length) {
      el.innerHTML = text.slice(0, i);
      i++;
      setTimeout(typewriter, speed);
    } else {
      cursor.style.display = "none";
    }
  }
  typewriter();
}

// nav-bar

let last_navScroll = 200;

window.addEventListener("scroll", () => {
  let navScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (navScroll < last_navScroll) {
    nav_bar.classList.remove("match");
  } else {
    nav_bar.classList.add("match");
  }
  last_navScroll = navScroll;
});

let txtBlock = document.getElementById("text-block");

harm_btn.addEventListener("click", () => {
  nav_bar.classList.toggle("active");
  cover_bg.classList.toggle("active");
  harm_btn.classList.toggle("active");
});

cover_bg.addEventListener("click", () => {
  cover_bg.classList.remove("active");
  nav_bar.classList.remove("active");
  harm_btn.classList.remove("active");
});

nav_list.forEach((nav_li) => {
  nav_li.addEventListener("click", () => {
    cover_bg.classList.remove("active");
    nav_bar.classList.remove("active");
    harm_btn.classList.remove("active");
  });
});

window.onscroll = function () {
  let current = "home";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });
  nav_list.forEach((item) => {
    item.classList.remove("locate");
    if (item.href.includes(current)) {
      item.classList.add("locate");
    } else {
      item.classList.remove("active");
    }
  });
};



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
function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "victorlodoliver@gmail.com",
    Password: "E7756217CEA069E2DB92AD03B5A72AE75815",
    To: "victorlodoliver@gmail.com",
    From: "victorlodoliver@gmail.com",
    Subject: "",
    Body:
      "Name: " +
      document.getElementById("userName").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Message: " +
      document.getElementById("email-msg").value,
  }).then((message) =>
    alert(document.getElementById("userName").value + " Email sent")
  );
}
