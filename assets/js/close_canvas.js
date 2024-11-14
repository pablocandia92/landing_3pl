document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.navbar-nav .nav-button').forEach(item => {
        item.addEventListener('click', () => {
            const offcanvasElement = document.getElementById('offcanvasNavbar');
            try {
                const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    
                // If no instance exists, create one
                if (!offcanvas) {
                    offcanvas = new bootstrap.Offcanvas(offcanvasElement);
                }
    
                offcanvas.hide();
            } catch {

            }
        });
    });
});