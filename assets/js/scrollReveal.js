
window.sr = ScrollReveal({ reset: true });

sr.reveal('.scroll-effect-1s',{
    duration: 1000,
});

sr.reveal('.scroll-effect-3s',{
    duration: 3000,
});

sr.reveal('.scroll-effect-left-3s', {
    duration: 3000,
    origin: 'left',
    distance: '40px',
});

sr.reveal('.scroll-effect-4s',{
    duration: 4000,
    distance: '100px',
});
