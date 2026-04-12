// Simple JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            alert('You clicked on ' + this.querySelector('h3').textContent);
        });
    });
});