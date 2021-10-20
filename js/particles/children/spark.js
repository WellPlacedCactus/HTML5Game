
import Particle from '../particle.js';

// enhanced color system?!

export default class Spark extends Particle {

	constructor(x, y, size, vx, vy, decay) {
		super(x, y, size, 'yellow', vx, vy, decay);
	}

	tick() {
		this.x += this.vx;
		this.y += this.vy;

		this.size -= this.decay;
		if (this.size < 0) {
			this.die();
		}
	}
}