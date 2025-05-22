    const hero = document.getElementById("hero");
  const dots = document.querySelectorAll(".dot");

  const images = [
    "./Kashikenath.jpg",
    "./vns/H1.webp",
    "./vns/H2.jpg"
  ];

  let currentIndex = 0;
  let interval;

  function changeImage(index) {
    currentIndex = index;
    hero.style.backgroundImage = `url('${images[index]}')`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");

    // Reset the auto-slide timer on manual click
    clearInterval(interval);
    startAutoSlide();
  }

  function startAutoSlide() {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      changeImage(currentIndex);
    }, 4000); // 4 seconds
  }

  // Initial start
  startAutoSlide();
  function openPopup() {
    document.getElementById("formPopup").style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closePopup() {
    document.getElementById("formPopup").style.display = "none";
    document.body.style.overflow = "auto";
  }

  document.getElementById("contactForm").addEventListener("submit", function () {
    alert("Thank you! We have received your message.");
  });



