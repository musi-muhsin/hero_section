// header fixed 
const header = document.querySelector("header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});

// Animation

document.addEventListener('DOMContentLoaded', function () {
    const fadeInSection = document.querySelectorAll('.fade-in-section');

    fadeInSection.forEach((section, index) => {
        gsap.set(section, { opacity: 0, yPercent: 100 });

        gsap.to(section, {
            opacity: 1,
            yPercent: 0,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
                trigger: section,
                start: 'top 100%', 
                end: '+=100', 
                scrub: 2, 
                once: true,
            },
            delay: index * 0.2,
        });
    });
});

// side menu 
  
(function($) {
    if (window.angular) return;
    var isOpen = false;
  
    gsap.set("#openProfileSideOffcanvas", {  xPercent: -100, display: 'none' });
    var overlayAnim = gsap.to("#openProfileSideOffcanvas", {
        duration: 1,
        ease: "power4.out",
        xPercent: 0,
        autoAlpha: 1,   
        paused: true,
        display: 'block'
    });
  
    $(".sidebarToggleButton, .closeIcon").on("click", function() {
        isOpen = !isOpen; 
  
        if (isOpen) {
            overlayAnim.play();
  
            gsap.fromTo(["#openProfileSideOffcanvas nav a", "#openProfileSideOffcanvas .text", ".offcanvas__search", ".offcanvas__contact"],  {
                xPercent: -100,
                opacity: 0
            }, {
                duration: 1,
                opacity: 1,
                xPercent: 0,
                stagger: 0.1,
                ease: "power4.out",
            });
  
        } else {
            overlayAnim.reverse();
        }
    });
  })(jQuery);