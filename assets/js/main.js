// filepath: c:\Users\shahi\source\GitHub\rusty-jar.github.io\assets\js\main.js

document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectLink = this.querySelector('a').getAttribute('href');
            window.location.href = projectLink;
        });
    });
});