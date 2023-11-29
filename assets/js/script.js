document.addEventListener('DOMContentLoaded', function() {
    var contentContainer = document.querySelector('.content-container');
    
    window.addEventListener('scroll', function() {
        var centerY = window.innerHeight / 2 + window.scrollY;
        var contentContainerCenterY = contentContainer.offsetTop + contentContainer.offsetHeight / 2;

        // Calcula la distancia al centro y ajusta el tamaño
        var distanceToCenter = Math.abs(centerY - contentContainerCenterY);
        var scaleFactor = 1 - (distanceToCenter / (window.innerHeight / 2));

        // Limita el factor de escala a un rango entre 0.5 y 1
        scaleFactor = Math.max(0.5, Math.min(scaleFactor, 1));

        // Aplica el cambio de escala a la caja general
        contentContainer.style.transform = 'scale(' + scaleFactor + ')';
    });
});