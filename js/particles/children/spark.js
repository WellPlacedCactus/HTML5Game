
import Particle from '../particle.js';


export default class Spark extends Particle {

	constructor(x, y, rotation, scale, direction, magnitude) {
		super([x, y], rotation, scale, [direction, magnitude], 60);
		this.rotationSpeed = Math.random() * 0.5;
	}

	tick() {
		this.translate(this.velocity);
		this.rotate(this.rotationSpeed);
		this.scaleBy(-0.5);
		this.slow(0.1);
	}

	draw(c) {
		c.fillStyle = `hsl(${this.color}, 100%, 50%)`;
		c.save();
		c.translate(this.position[0], this.position[1]);
		c.rotate(this.rotation);
		c.fillRect(-this.scale / 2, -this.scale / 2, this.scale, this.scale);
		c.restore();
	}
}