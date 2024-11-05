$(document).ready(function() {
    
    let currentIndex = 0;
    let prevIndex = 0;
    const items = $('.carousel-solutions__item');
    const totalItems = items.length;


    function slideCarousel() {


        //if (prevIndex !== currentIndex) {
            items.removeClass('active slide-in-left slide-in-right slide-out-left slide-out-right');

            const direction = prevIndex > currentIndex ? 'left' : 'right';
            console.log(direction, prevIndex, currentIndex) // TODO si se se pasa de len(items) o 0
            if (direction === 'left') {
                items.eq(prevIndex).addClass('slide-out-right');
                setTimeout(() => {
                    items.eq(currentIndex).addClass('slide-in-left');

                    items.removeClass('active').hide();
                    items.eq(currentIndex).addClass('active').show();
                    $('.indicator').removeClass('active').eq(currentIndex).addClass('active');
                }, 150);

            } else if (direction === 'right') {
                items.eq(prevIndex).addClass('slide-out-left');
                setTimeout(() => {
                    items.eq(currentIndex).addClass('slide-in-right');

                    items.removeClass('active').hide();
                    items.eq(currentIndex).addClass('active').show();
                    $('.indicator').removeClass('active').eq(currentIndex).addClass('active');
                }, 150);
            }
            
        //}


    }


    $('.next').click(function() {
        prevIndex = currentIndex;
        currentIndex = (currentIndex + 1) % totalItems;
        slideCarousel();
    });

    $('.prev').click(function() {
        prevIndex = currentIndex;
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        slideCarousel();
    });

    $('.indicator').click(function() {
        currentIndex = $(this).data('slide');
        slideCarousel();
    });

    // Touch events for mobile
    // let touchStartX = 0;
    // let touchEndX = 0;
    // let touchStartY = 0;
    // let touchEndY = 0;
    // const swipeThreshold = 30; // Umbral de deslizar en píxeles
    
    // $('.carousel-solutions-container').on('touchstart', function(event) {
    //     touchStartX = event.changedTouches[0].screenX;
    //     touchStartY = event.changedTouches[0].screenY; // Guardar la posición Y al inicio
    // });
    
    // $('.carousel-solutions-container').on('touchend', function(event) {
    //     touchEndX = event.changedTouches[0].screenX;
    //     touchEndY = event.changedTouches[0].screenY; // Guardar la posición Y al final
    //     handleGesture();
    // });
    
    // function handleGesture() {
    //     console.log('gesture');
    //     let hasSwiped = false; // Variable para rastrear si hubo un swipe
    
    //     // Calcular la diferencia en los ejes
    //     const deltaX = touchEndX - touchStartX;
    //     const deltaY = touchEndY - touchStartY;
    
    //     // Verificar que el movimiento fue principalmente horizontal
    //     if (Math.abs(deltaX) > Math.abs(deltaY)) {
    //         // Verifica si el movimiento es mayor que el umbral
    //         if (deltaX < -swipeThreshold) {
    //             // Swipe left
    //             prevIndex = currentIndex;

    //             currentIndex = (currentIndex + 1) % totalItems;
    //             hasSwiped = true;
    //         } else if (deltaX > swipeThreshold) {
    //             // Swipe right
    //             prevIndex = currentIndex;

    //             currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    //             hasSwiped = true;
    //         }
    //     }
    
    //     // Llama a slideCarousel solo si hubo un swipe
    //     if (hasSwiped) {
    //         slideCarousel();
    //     }
    // }

    // Inicializa el carousel mostrando el primer ítem
    items.removeClass('active').hide();
    items.eq(currentIndex).addClass('active').show();
    $('.indicator').removeClass('active').eq(currentIndex).addClass('active');
});
