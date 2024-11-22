document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.currentprogramscrol');

    scrollContainer.addEventListener('wheel', function(event) {
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaY;
    });
});