let body = document.querySelector("body");
let main_block =   document.querySelector(".main-block");
let modeBlk = document.getElementById("slider-ball");
let cover_bg = document.querySelector(".cover-bg");
let harm_btn = document.querySelector(".harm");
let nav_bar = document.querySelector("header nav");
let nav_list = document.querySelectorAll(".nav-list a");
let darkMode = localStorage.getItem("darkMode");
let load_ctn = document.querySelector(".loader-block");
let cancel_btn = document.querySelector(".cancel");
let sections = document.querySelectorAll("section");
// Loader
setTimeout(() => {
  load_ctn.classList.add("hidden");
  startTypewriter(); 
}, 2800);
//   startTypewriter(); 
// Typewriter
function startTypewriter() {
  const el = document.getElementById('type');
  const cursor = document.querySelector(".cursor");
  const text = `I am Ovbiebo O. <em class="special">Oliver</em>`;
  const speed = 80; // ms per character

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

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}

harm_btn.addEventListener("click", () => {
  main_block.classList.toggle("active");
  nav_bar.classList.toggle("active");
  cover_bg.classList.toggle("active");
  harm_btn.classList.toggle("active");
});

cover_bg.addEventListener("click", () => {
    main_block.classList.remove("active");
  cover_bg.classList.remove("active");
  nav_bar.classList.remove("active");
  harm_btn.classList.remove("active");
});

nav_list.forEach((nav_li) => {
  nav_li.addEventListener("click", () => {
        main_block.classList.remove("active");
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

// hello


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
function sendToWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("userName").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("email-msg").value;

  const phoneNumber = "2348146019577";

  const whatsappMessage = `Hello Ratedcodes,

Name: ${name}
Email: ${email}

Message:
${message}`;

  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank");
}
 const testimonials = [
    {
      text: "Oliver delivered our website ahead of schedule and it looked even better than we imagined. Communication was clear from start to finish and he handled every revision without hassle.",
      stars: 5,
      img: "general-img/client1.png",
      name: "Chidinma Okafor",
      role: "Founder, Clemzytech"
    },
    {
      text: "Working with Ratedcodes was seamless. He understood exactly what our hotel brand needed and built a site that our guests keep complimenting us on.",
      stars: 5,
      img: "general-img/client2.png",
      name: "Tunde Bakare",
      role: "Manager, The One Luxury Hotel"
    },
    {
      text: "Reliable, skilled, and easy to work with. Oliver built Clemzytech exactly to spec and was quick to fix anything we flagged during testing.",
      stars: 4.5,
      img: "general-img/client3.png",
      name: "Mr Clemzy",
      role: "Product Lead, SwiftNote"
    },
    {
      text: "Great attention to detail on WinTraderKing. He nailed the purple theme we wanted and the site runs smoothly on every device we tested.",
      stars: 5,
      img: "general-img/client4.png",
      name: "Emeka Obi",
      role: "Coach, WinTraderKing"
    }
  ];

  const track = document.getElementById('track');
  const viewport = document.getElementById('viewport');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsWrap = document.getElementById('dots');

  function starsMarkup(count) {
    let html = '';
    const full = Math.floor(count);
    const half = count % 1 !== 0;
    for (let i = 0; i < full; i++) html += '<i class="fa-solid fa-star"></i>';
    if (half) html += '<i class="fa-solid fa-star-half-stroke"></i>';
    return html;
  }

  function cardMarkup(t) {
    return `
      <div class="testimonial-card">
        <div class="quote-icon">
        <svg class="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.691 6.292C5.094 4.771 7.217 4 10.001 4h1v2.819l-.805.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789ZM20.001 20h-6a1 1 0 0 1-1-1v-5l.002-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21.001 4h1v2.819l-.805.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2Z"></path>
</svg>
        </div>
        <p class="testimonial-text">${t.text}</p>
        <div class="client-info">
          <div class="client-text">
            <span class="client-name">${t.name}</span>
          </div>
        </div>
      </div>`;
  }

  let slidesPerView = 1;
  let pageCount = 1;
  let index = 0;
  let autoplayTimer = null;

  function getSlidesPerView() {
    return window.innerWidth >= 1024 ? 2 : 1; // laptop/desktop = 2, tablet & below = 1
  }

  function buildSlides() {
    slidesPerView = getSlidesPerView();
    pageCount = Math.ceil(testimonials.length / slidesPerView);

    // group testimonials into pages of `slidesPerView` cards each
    track.innerHTML = '';
    for (let p = 0; p < pageCount; p++) {
      const pageItems = testimonials.slice(p * slidesPerView, p * slidesPerView + slidesPerView);
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      slide.innerHTML = pageItems.map(cardMarkup).join('');
      track.appendChild(slide);
    }

    buildDots();
    index = Math.min(index, pageCount - 1);
    render(false);
  }

  function buildDots() {
    dotsWrap.innerHTML = '';
    for (let i = 0; i < pageCount; i++) {
      const dot = document.createElement('button');
      dot.className = 'dot';
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i, true));
      dotsWrap.appendChild(dot);
    }
  }

  function render() {
    track.style.transform = `translateX(-${index * 100}%)`;
    Array.from(dotsWrap.children).forEach((d, i) => d.classList.toggle('active', i === index));
  }

  function goTo(i, manual) {
    index = (i + pageCount) % pageCount;
    render();
    if (manual) restartAutoplay();
  }

  function goNext(manual) { goTo(index + 1, manual); }
  function goPrev(manual) { goTo(index - 1, manual); }

  nextBtn.addEventListener('click', () => goNext(true));
  prevBtn.addEventListener('click', () => goPrev(true));

  function startAutoplay() {
    autoplayTimer = setInterval(() => goNext(false), 5000);
  }
  function restartAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  viewport.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
  viewport.addEventListener('mouseleave', startAutoplay);

  // rebuild slide groupings whenever slidesPerView would change (crossing the 1024px line)
  let lastSlidesPerView = getSlidesPerView();
  window.addEventListener('resize', () => {
    const current = getSlidesPerView();
    if (current !== lastSlidesPerView) {
      lastSlidesPerView = current;
      buildSlides();
    }
  });

  buildSlides();
  startAutoplay();



/* =================================
   CANVAS
================================= */

const canvas =
    document.getElementById("particles");

const ctx =
    canvas.getContext("2d");


/* =================================
   MOUSE
================================= */

const mouse = {

    x: null,
    y: null,

    radius: 180,

    active: false

};


const glow =
    document.querySelector(".cursor-glow");


window.addEventListener(
    "mousemove",
    (event) => {

        mouse.x = event.clientX;
        mouse.y = event.clientY;

        mouse.active = true;

        glow.style.left =
            mouse.x + "px";

        glow.style.top =
            mouse.y + "px";

        glow.style.opacity = "1";

    }
);


window.addEventListener(
    "mouseleave",
    () => {

        mouse.active = false;

        glow.style.opacity = "0";

    }
);


/* =================================
   RESIZE
================================= */

function resize() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

    createParticles();

}


window.addEventListener(
    "resize",
    resize
);


/* =================================
   PARTICLE
================================= */

class Particle {

    constructor() {

        this.x =
            Math.random() *
            canvas.width;

        this.y =
            Math.random() *
            canvas.height;


        this.baseX =
            this.x;

        this.baseY =
            this.y;


        this.size =
            Math.random() * 2 + .5;


        this.speedX =
            (Math.random() - .5) * .4;

        this.speedY =
            (Math.random() - .5) * .4;

    }


    update() {

        /*
         * Normal movement
         */

        this.x +=
            this.speedX;

        this.y +=
            this.speedY;


        /*
         * Bounce from edges
         */

        if (
            this.x < 0 ||
            this.x > canvas.width
        ) {

            this.speedX *= -1;

        }


        if (
            this.y < 0 ||
            this.y > canvas.height
        ) {

            this.speedY *= -1;

        }


        /*
         * MOUSE HOVER EFFECT
         */

        if (
            mouse.active
        ) {

            const dx =
                this.x -
                mouse.x;

            const dy =
                this.y -
                mouse.y;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (
                distance <
                mouse.radius
            ) {

                /*
                 * Push particle away
                 */

                const force =
                    (
                        mouse.radius -
                        distance
                    ) /
                    mouse.radius;


                const angle =
                    Math.atan2(
                        dy,
                        dx
                    );


                this.x +=
                    Math.cos(angle) *
                    force *
                    5;


                this.y +=
                    Math.sin(angle) *
                    force *
                    5;

            }

        }

    }


    draw() {

        let size =
            this.size;

        let glowAmount =
            8;


        /*
         * Make particles brighter
         * when mouse is nearby
         */

        if (
            mouse.active
        ) {

            const dx =
                this.x -
                mouse.x;

            const dy =
                this.y -
                mouse.y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (
                distance <
                mouse.radius
            ) {

                const intensity =
                    1 -
                    distance /
                    mouse.radius;


                size +=
                    intensity * 3;

                glowAmount +=
                    intensity * 20;

            }

        }


        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            size,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            "#ff2020";


        ctx.shadowBlur =
            glowAmount;

        ctx.shadowColor =
            "#ff0000";


        ctx.fill();


        ctx.shadowBlur = 0;

    }

}


/* =================================
   CREATE PARTICLES
================================= */

let particles = [];


function createParticles() {

    particles = [];


    const amount =
        Math.min(
            Math.floor(
                canvas.width *
                canvas.height /
                9000
            ),
            220
        );


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        particles.push(
            new Particle()
        );

    }

}


/* =================================
   CONNECT PARTICLES
================================= */

function connectParticles() {

    for (
        let a = 0;
        a < particles.length;
        a++
    ) {

        for (
            let b = a + 1;
            b < particles.length;
            b++
        ) {

            const dx =
                particles[a].x -
                particles[b].x;

            const dy =
                particles[a].y -
                particles[b].y;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (
                distance < 130
            ) {

                const opacity =
                    1 -
                    distance / 130;


                ctx.beginPath();


                ctx.strokeStyle =
                    `rgba(
                        255,
                        30,
                        30,
                        ${opacity * .3}
                    )`;


                ctx.lineWidth =
                    .6;


                ctx.moveTo(
                    particles[a].x,
                    particles[a].y
                );


                ctx.lineTo(
                    particles[b].x,
                    particles[b].y
                );


                ctx.stroke();

            }

        }

    }


    /*
     * CONNECT PARTICLES
     * DIRECTLY TO MOUSE
     */

    if (
        mouse.active
    ) {

        particles.forEach(
            particle => {

                const dx =
                    particle.x -
                    mouse.x;

                const dy =
                    particle.y -
                    mouse.y;


                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );


                if (
                    distance <
                    mouse.radius
                ) {

                    const opacity =
                        1 -
                        distance /
                        mouse.radius;


                    ctx.beginPath();


                    ctx.strokeStyle =
                        `rgba(
                            255,
                            40,
                            40,
                            ${opacity * .8}
                        )`;


                    ctx.lineWidth =
                        opacity * 1.2;


                    ctx.moveTo(
                        particle.x,
                        particle.y
                    );


                    ctx.lineTo(
                        mouse.x,
                        mouse.y
                    );


                    ctx.stroke();

                }

            }
        );


        /*
         * Red ring around cursor
         */

        ctx.beginPath();

        ctx.arc(
            mouse.x,
            mouse.y,
            45,
            0,
            Math.PI * 2
        );


        ctx.strokeStyle =
            "rgba(255,30,30,.25)";

        ctx.lineWidth = 1;

        ctx.stroke();

    }

}


/* =================================
   ANIMATION
================================= */

function animate() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(
        particle => {

            particle.update();

            particle.draw();

        }
    );


    connectParticles();


    requestAnimationFrame(
        animate
    );

}


/* =================================
   START
================================= */

resize();

animate();
