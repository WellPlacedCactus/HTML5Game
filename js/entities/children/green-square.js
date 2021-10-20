
import Entity from '../entity.js';
import Game from '../../game.js';
import Random from '../../misc/random.js';
import Spark from '../../particles/children/spark.js';

export default class GreenSquare extends Entity {

	constructor(x, y, width, height) {
		super(x, y, width, height, 'lime');
		this.random = new Random();
	}

	tick() {
		if (Game.mouse.buttons[0]) {
			if (
				Game.mouse.x > this.x &&
				Game.mouse.y > this.y &&
				Game.mouse.x < this.x + this.width &&
				Game.mouse.y < this.y + this.height) {
					
					this.die();
					
					this.handler.add(new GreenSquare(
						this.random.randint(0, Game.width - 150),
						this.random.randint(0, Game.height - 150),
						this.random.randint(100, 200),
						this.random.randint(100, 200)
					));

					for (let i = 0; i < 10; i++) {
						this.handler.add(new Spark(
							Game.mouse.x,
							Game.mouse.y,
							this.random.randint(25, 50),
							this.random.randint(-5, 5),
							this.random.randint(-5, 5),
							this.random.randint(1, 5)
						));
					}
			}
		}
	}
}