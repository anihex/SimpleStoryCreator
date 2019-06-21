(function () {
	'use strict';

	var intro = {
		_city: "",

		place() {
			const places = [
				`In a forest`,
				`In a forest near ${this.city}`,
				`In the capital of ${this.country()}`,
				`In the capital of ${this.country()}, ${this.city},`,
				`In a remote village of ${this.country()}`
			];

			return places[3]
		},

		get city() {
			return this._city
		},

		set city(value) {
			if (this._city === "") {
				this._city = value;
			}
		},

		country() {
			return "Gaia"
		},

		current() {
			return this.place()
		},

		next() {
			return false
		}
	};

	const ssc = () => {
		return {
			blocks: {
				intro
			},

			story() {
				var currentBlock = "intro";
				var result = "";

				while (currentBlock !== false) {
					result = this.blocks[currentBlock].current();
					currentBlock = this.blocks[currentBlock].next();
				}

				return result
			}
		}
	};

	console.log(ssc().story());

}());
