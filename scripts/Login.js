Particles.init({
    selector: '.LoginBackground',
    color: ['#9eff76'],
    connectParticles: true,
    responsive: [{
        breakpoint: 800,
        options: {
            maxParticles: 300,
            connectParticles: false
        }
    }]
});