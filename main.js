window.addEventListener("load", function () {
  // Text animation for header-1
  var textWrapper = document.querySelector(".header-1");
  if (textWrapper) {
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline().add({
      targets: ".header-1 .letter",
      translateY: [200, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 4800 + 50 * i,
    });
  }

  // Text animation for header-2
  var textWrapper2 = document.querySelector(".header-2");
  if (textWrapper2) {
    textWrapper2.innerHTML = textWrapper2.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline().add({
      targets: ".header-2 .letter",
      translateY: [200, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 4800 + 50 * i,
    });
  }

  // GSAP Animations
  // Remove wrapper (loader background)
  gsap.to(".wrapper", {
    duration: 2,
    top: "-100%",
    ease: "expo.inOut",
    delay: 3.6,
  });

  // Loader animation timeline
  var tl = gsap.timeline();

  tl.from(".loader", {
    duration: 1.6,
    scaleY: 0,
    y: 80,
    ease: "expo.inOut",
    delay: 1,
    transformOrigin: "50% 100%",
  });

  tl.to(".loader", {
    duration: 1.6,
    height: "20vh",
    scaleY: 0,
    ease: "expo.inOut",
    transformOrigin: "0% -100%",
  });

  // Box reveal animation
  gsap.to(".box", {
    duration: 2.4,
    y: "-100%",
    ease: "expo.inOut",
    delay: 3.8,
  });

  // Menu stagger animation
  gsap.from(".menu > div", {
    duration: 2,
    opacity: 0,
    y: 30,
    ease: "expo.inOut",
    delay: 4.2,
    stagger: 0.1,
  });

  // Hero container stagger animation
  gsap.from(".hero-container > div", {
    duration: 2,
    opacity: 0,
    y: 30,
    ease: "expo.inOut",
    delay: 4.2,
    stagger: 0.1,
  });
});
