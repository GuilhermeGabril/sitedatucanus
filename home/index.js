document.querySelectorAll('nav ul li a').forEach((link) => {
    link.addEventListener('mouseover', () => {
        link.classList.add('hover-orange'); 
    });

    link.addEventListener('mouseout', () => {
        link.classList.remove('hover-orange');
    });
});
