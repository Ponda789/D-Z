const calculator = {
	read: function(){
		const x = +prompt();
		const y = +prompt();
		this.x = +x;
		this.y = +y;
	},
	sum: function() {
		this.read();
		console.log(this.x + this.y);
	},
	mult: function() {
		this.read();
		console.log(this.x * this.y);
	},
}
calculator.mult();
