const navSlide = () => {
  const burger = document.querySelector(".hamburgerMenu");
  const navList = document.querySelector("nav");

  burger.addEventListener("click", () => {
    navList.classList.toggle("navActive");
    burger.classList.toggle("toggle__burger");
  });
};
navSlide();

const sliders = document.querySelectorAll(".portfolioSlider");

sliders.forEach((slider) => {
  const images = slider.querySelectorAll("img");
  const prevBtn = slider.querySelector(".prevBtn");
  const nextBtn = slider.querySelector(".nextBtn");
  let currentImage = 0;

  prevBtn.addEventListener("click", () => {
    images[currentImage].classList.remove("active");
    currentImage = (currentImage - 1 + images.length) % images.length;
    images[currentImage].classList.add("active");
  });

  nextBtn.addEventListener("click", () => {
    images[currentImage].classList.remove("active");
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add("active");
  });
});

const heroName = document.querySelector('.heroName');
const text = document.querySelector('.text');
const cursor = document.querySelector('.cursor');
const textContentStevan = 'Stevan';
const textContentRevalino = ' Revalino';
let index = 0;
let revalinoIndex = 0;

function typingAnimation() {
  if (index < textContentStevan.length) {
    text.textContent = textContentStevan.substring(0, index + 1);
    text.style.color = '#352f23'; 
    index++;
    setTimeout(typingAnimation, 200);
  } else {
    setTimeout(() => {
      const revalinoText = document.createElement('span');
      revalinoText.style.color = '';
      heroName.appendChild(revalinoText);
      function revalinoTypingAnimation() {
        if (revalinoIndex < textContentRevalino.length) {
          revalinoText.textContent = textContentRevalino.substring(0, revalinoIndex + 1);
          revalinoIndex++;
          setTimeout(revalinoTypingAnimation, 200);
        }
      }
      revalinoTypingAnimation();
    }, 1000);
  }
}

typingAnimation();

const scrollElements = document.querySelectorAll('.scroll-down, .scroll-up');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  scrollElements.forEach((element) => {
    const elementTop = element.offsetTop;
    const elementHeight = element.offsetHeight;
    const viewportHeight = window.innerHeight;

    if (scrollPosition > elementTop - viewportHeight / 2 && scrollPosition < elementTop + elementHeight) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
});

const serviceElements = document.querySelectorAll('.service');
const serviceRevealed = new Array(serviceElements.length).fill(false);

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  serviceElements.forEach((element, index) => {
    const elementTop = element.offsetTop;
    const elementHeight = element.offsetHeight;
    const viewportHeight = window.innerHeight;

    if (scrollPosition > elementTop - viewportHeight / 1.5 && scrollPosition < elementTop + elementHeight && !serviceRevealed[index]) {
      element.classList.add('reveal');
      serviceRevealed[index] = true;
    }
  });
});

const portfolioElements = document.querySelectorAll('.portfolio');
const portfolioRevealed = new Array(portfolioElements.length).fill(false);

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  portfolioElements.forEach((element, index) => {
    const elementTop = element.offsetTop;
    const elementHeight = element.offsetHeight;
    const viewportHeight = window.innerHeight;

    if (index < 2) {
      // Portfolio 1 dan 2
      if (scrollPosition > elementTop - viewportHeight / 1 && scrollPosition < elementTop + elementHeight && !portfolioRevealed[index]) {
        element.classList.add('reveal');
        portfolioRevealed[index] = true;
      }
    } else {
      // Portfolio 3 dan 4
      if (scrollPosition > elementTop - viewportHeight / 1 + 200 && scrollPosition < elementTop + elementHeight && !portfolioRevealed[index]) {
        element.classList.add('reveal');
        portfolioRevealed[index] = true;
      }
    }
  });
});

const skillsBox = document.querySelectorAll('.skillsBox');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;

  skillsBox.forEach((box) => {
    const boxTop = box.offsetTop;
    const boxHeight = box.offsetHeight;

    if (scrollPosition > boxTop - viewportHeight / 1.5 && scrollPosition < boxTop + boxHeight) {
      box.classList.add('show');
    }
  });
});
