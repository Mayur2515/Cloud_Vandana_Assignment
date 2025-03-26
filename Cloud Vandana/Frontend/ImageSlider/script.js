document.addEventListener('DOMContentLoaded', function() {

    const images = [
        { src: 'Images/Nature.avif', caption: 'Beautiful Nature' },
        { src: 'Images/Ocean.avif', caption: 'Serene Ocean' },
        { src: 'Images/Sunset.avif', caption: 'Stunning Sunset' }
    ];
    
    const slider = document.getElementById('slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    function initializeSlider() {
        
        slider.innerHTML = '';
    
        images.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            if (index === 0) slide.classList.add('active');
            
            slide.innerHTML = `
                <img src="${image.src}" alt="${image.caption}">
                <div class="slide-caption">${image.caption}</div>
            `;
            
            slider.appendChild(slide);
        });
    }
  
    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        
       
        slides.forEach(slide => slide.classList.remove('active'));
        
        
        slides[index].classList.add('active');
        currentSlide = index;
    }
    
 
    function nextSlide() {
        currentSlide = (currentSlide + 1) % images.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + images.length) % images.length;
        showSlide(currentSlide);
    }
    
   
    initializeSlider();
    
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
   
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });
    
    
    let slideInterval = setInterval(nextSlide, 5000);
    
    
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
});