
import Entity from '../entity.js';
import Game from '../../game.js';
import Spark from '../../particles/children/spark.js';

export default class ColorfulSquare extends Entity {

	constructor(x, y, width, height, color) {
		super([x, y], [width, height], color);
	}

	tick() {
		this.color += Math.random();

		if (Game.mouse.buttons[0]) {
			let contitions = [
				Game.mouse.x > this.position[0],
				Game.mouse.y > this.position[1],
				Game.mouse.x < this.position[0] + this.size[0],
				Game.mouse.y < this.position[1] + this.size[1]
			];
			if (contitions.every(c => c)) {
				this.die();

				this.handler.add(new ColorfulSquare(
					this.random.randint(0, Game.width - 150),
					this.random.randint(0, Game.height - 150),
					this.random.randint(100, 200),
					this.random.randint(100, 200),
					this.random.randint(0, 360)
				));

				for (let i = 0; i < 10; i++) {
					this.handler.add(new Spark(
						Game.mouse.x,
						Game.mouse.y,
						Math.random() * Math.PI,
						this.random.randint(10, 20),
						Math.random() * Math.PI * 2,
						this.random.randint(1, 5)
					));
				}
			}
		}
	}
}