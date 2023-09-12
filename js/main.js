const hamburgerBtn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-main-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

onscroll = () => {
   let mainHeader = document.querySelectorAll('.main-header');
   mainHeader.forEach((header) => {
      header.classList.toggle('bg-change', window.scrollY > 100);
   })
}

hamburgerBtn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
   hamburgerBtn.classList.toggle('open');
   overlay.classList.toggle('overlay-show');
   document.body.classList.toggle('stop-scrolling');
   menu.classList.toggle('show-menu');
}

function scrollPage() {
   const scrollPos = window.scrollY;

   if (scrollPos > 100 && !scrollStarted) {
      countUp();
      scrollStarted = true;
   } else if (scrollPos < 100 && scrollStarted) {
      reset()
      scrollStarted = false;
   }
}

function countUp() {
   counters.forEach((counter) => {
      counter.innerText = 0;

      const updateCounter = () => {
         // Get count target
         const target = +counter.getAttribute('data-target');
         // Get current counter value
         const c = +counter.innerText;

         // creates increment
         const increment = target / 100;

         // if counter is less than the target, add increment
          if (c < target) {
            // Round up and set the counter value
            counter.innerText = `${Math.ceil(c + increment)}`

            setTimeout(updateCounter, 75);
          } else {
            counter.innerText = target;
          }
      };

      updateCounter();
   });
}

function reset() {
   counters.forEach((counter) => counter.innerHTML = '0');
}