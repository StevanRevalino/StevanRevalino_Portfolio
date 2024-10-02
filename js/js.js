const navSlide = () => {
    const burger = document.querySelector(".hamburgerMenu");
    const navList = document.querySelector("nav");
  
    burger.addEventListener("click", () => {
      navList.classList.toggle("navActive");
      burger.classList.toggle("toggle__burger");
    });
  };
  navSlide();
  
  const sliders = document.querySelectorAll('.portfolioSlider');
  
  sliders.forEach(slider => {
    const images = slider.querySelectorAll('img');
    const prevBtn = slider.querySelector('.prevBtn');
    const nextBtn = slider.querySelector('.nextBtn');
    let currentImage = 0;
  
    prevBtn.addEventListener('click', () => {
      images[currentImage].classList.remove('active');
      currentImage = (currentImage - 1 + images.length) % images.length;
      images[currentImage].classList.add('active');
    });
  
    nextBtn.addEventListener('click', () => {
      images[currentImage].classList.remove('active');
      currentImage = (currentImage + 1) % images.length;
      images[currentImage].classList.add('active');
    });
  });