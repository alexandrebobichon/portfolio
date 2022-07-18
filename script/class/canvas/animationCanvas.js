class AnimationCanvas {

    constructor(
        canvas = document.getElementById('canvas'),
        context = null,
        dpi = window.devicePixelRatio || 1,
        particle_count = 20,
        particles = [],
        couleurs = ["#B7B7B7", "#5F5F5F", "#F0F0F0"],
        style_height = null,
        style_width = null,
        statement = true

    ) {
        this.requestId = false;
        this.canvas = canvas;
        this.context = context === null ? this.canvas.getContext('2d') : context;
        this.dpi = dpi;
        this.particle_count = particle_count;
        this.particles = particles;
        this.couleurs = couleurs;
        this.style_height = style_height === null ? +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2) : style_height;
        this.style_width = style_width === null ? +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2) : style_width;
        this.statement = statement

    }

    //Start and stop animation
    start = (loop) => {
        if (this.requestId === false) {
            this.requestId = loop;
            return this;
        }
    }

    stop = (loop) => {
        if (this.requestId) {
            window.cancelAnimationFrame(this.requestId);
            this.requestId = false;
            return this;
        }
    }

    fix_dpi = () => {

        //scale the canvas
        this.canvas.setAttribute('height', style_height * dpi);
        this.canvas.setAttribute('width', style_width * dpi);
    }

    animate = () => {

        this.requestId = false;
        this.start(loop());

        this.fix_dpi();
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.particles.length; i++) {

            this.particles[i].move();
        }
    }
}