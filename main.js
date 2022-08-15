(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
            
    const scroll = document.querySelector('#scroll-btn');
    const top = document.querySelector('.wrapper');
    window.onscroll = () => (window.pageYOffset > 1000) ? scroll.style.display = 'block' : scroll.style.display = 'none';    
    scroll.addEventListener('click', () => {
        top.scrollIntoView({
            behavior: "smooth",
            block:    "start" 
        });
    }); 
})();