(function() {
      const track = document.querySelector('.carousel-track');
      const cards = Array.from(track.children);
      const prevBtn = document.querySelector('.prev-btn');
      const nextBtn = document.querySelector('.next-btn');
      const cardWidth = cards[0].getBoundingClientRect().width + 30; // card width + margin approximate
      let currentIndex = 0;

      function moveToIndex(index) {
        if (index < 0) {
          currentIndex = cards.length - 1;
        } else if (index >= cards.length) {
          currentIndex = 0;
        } else {
          currentIndex = index;
        }
        const distance = -currentIndex * cardWidth;
        track.style.transform = `translateX(${distance}px)`;
      }

      prevBtn.addEventListener('click', () => {
        moveToIndex(currentIndex - 1);
        resetAutoSlide();
      });

      nextBtn.addEventListener('click', () => {
        moveToIndex(currentIndex + 1);
        resetAutoSlide();
      });

      // Auto slide every 4 seconds
      let autoSlideInterval = setInterval(() => {
        moveToIndex(currentIndex + 1);
      }, 4000);

      function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
          moveToIndex(currentIndex + 1);
        }, 4000);
      }

      // Initialize positions (optional if cards have margin, but safer)
      moveToIndex(0);
    })();