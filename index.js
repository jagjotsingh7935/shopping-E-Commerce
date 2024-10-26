
const boxes = document.querySelectorAll('.box1');
const newBoxes = document.querySelectorAll('.new-box1')
// Iterate through each box and add an event listener
boxes.forEach(box => {
    box.addEventListener('click', () => {
        // Get the target page from the data-target attribute
        const targetPage = box.getAttribute('data-target');
        // Redirect to the target page
        window.location.href = targetPage;
    });
});
newBoxes.forEach(newBox => {
    newBox.addEventListener('click',() => {
        const newTargetPage = newBox.getAttribute('data-target') ;
        window.location.href = newTargetPage;
    })
})



// image 

const thumbnail = document.querySelectorAll(".thumbnail img");
const mainImage = document.getElementById("mainImage");

thumbnail.forEach(thumbnail => {
    thumbnail.addEventListener('click',function(){
        mainImage.src = this.src;
    });
});


//Shop now
const shopButton = document.getElementById("shopNow");

shopButton.addEventListener('click', shopNow);

function shopNow() {
    window.open("shop.html",'_parent'); 
}


const exploreButton = document.getElementById("exploreBtn");
exploreButton.addEventListener('click',exploreBtn);

function exploreBtn(){
    window.open("shop.html","_parent");
}










//Features
document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.features .feature1, .features .feature2, .features .feature3, .features .feature4, .features .feature5, .features .feature6');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove animation class to reset animation
                entry.target.classList.remove('animate');
                // Trigger reflow to reset animation
                void entry.target.offsetWidth;
                // Add animation class again
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    features.forEach(feature => {
        observer.observe(feature);
    });
});


//Sliding-Images

document.addEventListener('DOMContentLoaded', function() {
    const sliderSection = document.querySelector('.slider-section');
    const slides = document.querySelector('.slides');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentIndex = 0;
    const slideCount = document.querySelectorAll('.slide').length;
    const slideInterval = 2500; // Change slide every 3 seconds

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

    // Event listener for next button
    nextButton.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide(); // Reset auto-slide timer on manual navigation
    });

    // Event listener for prev button
    prevButton.addEventListener('click', () => {
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
});




// banner 

document.addEventListener('DOMContentLoaded', function() {
    // Target the section you want to animate
    const banner1 = document.querySelector('.banner1');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when section is in view
                if (entry.target === banner1) {
                    banner1.classList.add('animate');
                }
            } else {
                // Remove animation class when section is out of view
                if (entry.target === banner1) {
                    banner1.classList.remove('animate');
                }
            }
        });
    }, { threshold: 0.1 });

    // Observe the targeted section
    observer.observe(banner1);
});


  
//Slider

const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});


document.addEventListener('click', (event) => {
    const isClickInsideNavbar = navbar.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickInsideNavbar && !isClickOnHamburger) {
        navbar.classList.remove('active'); // Hide the navbar
    }
});