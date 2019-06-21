import intro from "./blocks/intro.js"

const ssc = () => {
	return {
		blocks: {
			intro
		},

		story() {
			var currentBlock = "intro"
			var result = ""

			while (currentBlock !== false) {
				result = this.blocks[currentBlock].current()
				currentBlock = this.blocks[currentBlock].next()
			}

			return result
		}
	}
}

console.log(ssc().story())
