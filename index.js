// Target elements for box and new-box click navigation
try {
    const boxes = document.querySelectorAll('.box1');
    const newBoxes = document.querySelectorAll('.new-box1');

    // Event listeners for navigation on click
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            const targetPage = box.getAttribute('data-target');
            window.location.href = targetPage;
        });
    });

    newBoxes.forEach(newBox => {
        newBox.addEventListener('click', () => {
            const newTargetPage = newBox.getAttribute('data-target');
            window.location.href = newTargetPage;
        });
    });
} catch (error) {
    console.error('Error in box navigation:', error);
}

// Image thumbnail functionality
try {
    const thumbnail = document.querySelectorAll(".thumbnail img");
    const mainImage = document.getElementById("mainImage");

    thumbnail.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            mainImage.src = this.src;
        });
    });
} catch (error) {
    console.error('Error in thumbnail functionality:', error);
}

// "Shop Now" button navigation
try {
    const shopButton = document.getElementById("shopNow");
    if (shopButton) {
        shopButton.addEventListener('click', () => {
            window.open("shop.html", '_parent');
        });
    }
} catch (error) {
    console.error('Error in "Shop Now" button navigation:', error);
}

// "Explore" button navigation
try {
    const exploreButton = document.getElementById("exploreBtn");
    if (exploreButton) {
        exploreButton.addEventListener('click', () => {
            window.open("shop.html", "_parent");
        });
    }
} catch (error) {
    console.error('Error in "Explore" button navigation:', error);
}

// Features animations using IntersectionObserver
document.addEventListener('DOMContentLoaded', function () {
    try {
        const features = document.querySelectorAll('.features .feature1, .features .feature2, .features .feature3, .features .feature4, .features .feature5, .features .feature6');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('animate');
                    void entry.target.offsetWidth; // Trigger reflow to reset animation
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        features.forEach(feature => observer.observe(feature));
    } catch (error) {
        console.error('Error in features animations:', error);
    }
});

// Sliding image functionality
document.addEventListener('DOMContentLoaded', function () {
    try {
        const sliderSection = document.querySelector('.slider-section');
        const slides = document.querySelector('.slides');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');

        if (slides) { // Only run the slider logic if the .slides element exists
            let currentIndex = 0;
            const slideCount = document.querySelectorAll('.slide').length;
            const slideInterval = 2500; // Change slide every 2.5 seconds

            function updateSlider() {
                const slideWidth = document.querySelector('.slide').offsetWidth;
                slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            }

            function nextSlide() {
                currentIndex = (currentIndex + 1) % slideCount;
                updateSlider();
            }

            function prevSlide() {
                currentIndex = (currentIndex - 1 + slideCount) % slideCount;
                updateSlider();
            }

            nextButton?.addEventListener('click', () => {
                nextSlide();
                resetAutoSlide(); // Reset auto-slide timer on manual navigation
            });

            prevButton?.addEventListener('click', () => {
                prevSlide();
                resetAutoSlide(); // Reset auto-slide timer on manual navigation
            });

            // Initialize slider
            updateSlider();

            // Automatic slide transition
            let autoSlide = setInterval(nextSlide, slideInterval);

            function resetAutoSlide() {
                clearInterval(autoSlide);
                autoSlide = setInterval(nextSlide, slideInterval);
            }
        } else {
            console.error('Element with class "slides" not found.');
        }

        if (sliderSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        sliderSection.classList.add('animate');
                    } else {
                        sliderSection.classList.remove('animate');
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(sliderSection);
        } else {
            console.error('Element with class "slider-section" not found.');
        }
    } catch (error) {
        console.error('Error in sliding image functionality:', error);
    }
});

// Banner animations using IntersectionObserver
document.addEventListener('DOMContentLoaded', function () {
    try {
        const banner1 = document.querySelector('.banner1');

        if (banner1) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        banner1.classList.add('animate');
                    } else {
                        banner1.classList.remove('animate');
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(banner1);
        } else {
            console.error('Element with class "banner1" not found.');
        }
    } catch (error) {
        console.error('Error in banner animations:', error);
    }
});

// Navbar toggle functionality
try {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');

    if (hamburger && navbar) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navbar.classList.toggle('active');
        });

        document.addEventListener('click', (event) => {
            const isClickInsideNavbar = navbar.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);

            if (!isClickInsideNavbar && !isClickOnHamburger) {
                navbar.classList.remove('active');
            }
        });
    } else {
        console.error('Hamburger or Navbar element not found.');
    }
} catch (error) {
    console.error('Error in navbar toggle functionality:', error);
}
