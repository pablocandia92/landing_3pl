document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
        item.addEventListener('click', () => {
            console.log('Nav item clicked');
            const offcanvasElement = document.getElementById('offcanvasNavbar');
            const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement); // Get the existing instance

            // If no instance exists, create one
            if (!offcanvas) {
                offcanvas = new bootstrap.Offcanvas(offcanvasElement);
            }

            offcanvas.hide(); // Hide the offcanvas
        });
    });
});