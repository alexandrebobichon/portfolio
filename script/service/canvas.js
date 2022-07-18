const animation = new AnimationCanvas();

let requestId = animation.requestId;

//init canvas
let canvas = animation.canvas;
let context = animation.context;
let dpi = animation.dpi
let particle_count = animation.particle_count;
let particles = animation.particles;
let couleurs = animation.couleurs;
let style_height = animation.style_height;
let style_width = animation.style_width;
let loop = () => { return window.requestAnimationFrame(animation.animate) };

animation.context.scale(dpi, dpi);


//set particule for display
for (let i = 0; i < particle_count; i++) {

    animation.fix_dpi();
    let particle = new Particule(animation, i);

    let nb_particles = (nb) => { return (particle_count / 10) * nb; };
    let conditionPos = (cond1, cond2) => { return nb_particles(cond1) > i && nb_particles(cond2) <= i };
    let emplacement = (divX, divY) => { return particle.x = canvas.width / divX, particle.y = canvas.height / divY; };

    for (let indexStag = 1; indexStag <= 10; indexStag++) {
        if (indexStag <= 2) {
            if (conditionPos(indexStag, indexStag - 1)) emplacement(20, 1.1);
        }
        if (indexStag <= 3.2 && indexStag > 2) {
            if (conditionPos(indexStag, indexStag - 1)) emplacement(20, 10);
        }
        if (indexStag <= 5.6 && indexStag > 4.4) {
            if (conditionPos(indexStag, indexStag - 1)) emplacement(1.1, 1.1);
        }
        if (indexStag <= 6.8 && indexStag > 5.6) {
            if (conditionPos(indexStag, indexStag - 1)) emplacement(1.1, 10);
        }
        if (indexStag <= 8 && indexStag > 6.8) {
            if (conditionPos(indexStag, indexStag - 1)) emplacement(2, 1.1);
        }
        if (indexStag <= 10 && indexStag > 8) {
            if (conditionPos(indexStag, indexStag - 1)) emplacement(2, 10);
        }
    }

    particles.push(particle);
}

// Event start an stop animation
document.getElementById('canvasActiveAction').addEventListener('click', () => {
    animation.requestId === false ? animation.start(loop()) : animation.stop();
});