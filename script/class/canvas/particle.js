class Particule {

    constructor(
        animation,
        id,
        radius = 3,
        x = Math.floor((Math.random() * ((+getComputedStyle(canvas).getPropertyValue("width").slice(0, -2) * dpi) - this.radius + 1) + this.radius)),
        y = Math.floor((Math.random() * ((+getComputedStyle(canvas).getPropertyValue("height").slice(0, -2) * dpi) - this.radius + 1) + this.radius)),
    ) {
        this.id = id;
        this.context = animation.context;
        this.animation = animation;
        this.radius = radius;
        // Set axe X, Y
        this.x = x;
        this.y = y;
        this.color = couleurs[Math.floor(Math.random() * couleurs.length)];
        // Speed movement
        this.speedx = Math.round((Math.random() * 201) + 0) / 100;
        this.speedy = Math.round((Math.random() * 201) + 0) / 100;

        switch (Math.round(Math.random() * couleurs.length)) {
            case 1:
                this.speedx *= 1;
                this.speedy *= 1;
                break;
            case 2:
                this.speedx *= -1;
                this.speedy *= 1;
                break;
            case 3:
                this.speedx *= 1;
                this.speedy *= -1;
                break;
            case 4:
                this.speedx *= -1;
                this.speedy *= -1;
                break;
        }
    }

    move = () => {

        let particles = this.animation.particles;

        // particule circle
        this.context.beginPath();
        this.context.globalCompositeOperation = 'source-over';
        this.context.fillStyle = this.color;
        this.context.globalAlpha = 1;
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.context.fill();
        this.context.closePath();

        this.x = this.x + this.speedx;
        this.y = this.y + this.speedy;

        const createAndMovePart = (x, y) => {
            this.speedx *= -1;

            if (particles.length === 100) { this.animation.statement = false; }
            // if (particles.length === 20) { this.animation.statement = true }

            if (this.animation.statement) {
                particles.push(new Particule(this.animation, particles.length + 1, 3, this.x + x, this.y + y));
            } else {
                // particles.pop();
            }

            this.animation.stop();
            this.animation.animate();
        }

        if (this.x <= 0 + this.radius) {
            createAndMovePart(10, 10)
        }
        if (this.x >= canvas.width - this.radius) {
            createAndMovePart(-10, -10)
        }
        if (this.y <= 0 + this.radius) {
            this.speedy *= -1;
        }
        if (this.y >= canvas.height - this.radius) {
            this.speedy *= -1;
        }


        //Get the particule and set the line whit the distance
        for (let index = 0; index < particle_count; index++) {
            let particleActuelle = particles[index],
                yd = particleActuelle.y - this.y,
                xd = particleActuelle.x - this.x,
                d = Math.sqrt(xd * xd + yd * yd);

            //set the link beetween particule
            if (d < 200) {
                this.context.beginPath();
                this.context.globalAlpha = (200 - d) / (200 - 0);
                this.context.globalCompositeOperation = 'destination-over';
                this.context.lineWidth = 0.5;
                this.context.moveTo(this.x, this.y);
                this.context.lineTo(particleActuelle.x, particleActuelle.y);
                this.context.strokeStyle = this.color;
                this.context.lineCap = "round";
                this.context.stroke();
                this.context.closePath();
            }
        }
    };
};