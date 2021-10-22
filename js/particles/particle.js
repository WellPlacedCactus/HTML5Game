

export default class Particle {

	constructor(position, rotation, scale, velocity, color) {
		this.position = position;
		this.rotation = rotation;
		this.scale = scale;
		this.velocity = velocity;
		this.color = color;
		this.dead = false;
		this.handler = null;
	}

	translate(vector) {
		this.position[0] += Math.cos(vector[0]) * vector[1];
		this.position[1] += Math.sin(vector[0]) * vector[1];
	}

	rotate(scalar) {
		this.rotation += scalar;
	}

	scaleBy(scalar) {
		this.scale += scalar;
		if (this.scale < 0) {
			this.die();
		}
	}

	slow(scalar) {
		this.velocity[1] -= scalar;
		if (this.velocity[1] < 0) {
			this.die();
		}
	}

	die() {
		this.dead = true;
	}

	tick() {}

	draw(c) {
		c.fillStyle = `hsl(${this.color}, 100%, 50%)`;
		c.fillRect(
			this.position[0],
			this.position[1],
			this.scale,
			this.scale
		);
	}
}