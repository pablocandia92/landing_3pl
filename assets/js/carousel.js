$(document).ready(function() {
    let currentIndex = 0;
    const items = $('.carousel-solutions__item');
    const totalItems = items.length;


    function updateCarousel() {

        items.removeClass('active').hide();
        items.eq(currentIndex).addClass('active').show();
        $('.indicator').removeClass('active').eq(currentIndex).addClass('active');
    }

    $('.next').click(function() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    $('.prev').click(function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    $('.indicator').click(function() {
        currentIndex = $(this).data('slide');
        updateCarousel();
    });

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    $('.carousel-solutions-container').on('touchstart', function(event) {
        touchStartX = event.changedTouches[0].screenX;
    });

    $('.carousel-solutions-container').on('touchend', function(event) {
        touchEndX = event.changedTouches[0].screenX;
        handleGesture();
    });

    function handleGesture() {
        if (touchStartX > touchEndX + 50) {
            // Swipe left
            currentIndex = (currentIndex + 1) % totalItems;
        } else if (touchStartX < touchEndX - 50) {
            // Swipe right
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        }
        updateCarousel();
    }

    // Inicializa el carousel mostrando el primer ítem
    updateCarousel();
});

