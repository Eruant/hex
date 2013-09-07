define(['Class'], function (Class) {
					 
	return Class.extend({
		/**
		 * @method init - initializes the Class
		 */
		init: function (x, y, radius, sides, startAngle, anticlockwise) {
			this.x = x;
			this.y = y;
			this.radius = radius;
			this.sides = sides || 6; // default to hexigon
			this.startAngle = startAngle || 0;
			this.anticlockwise = anticlockwise || false;
			
			this.calculateAngle();
		},
		/**
		 * @method calculateAngle - calculates the inner angle of the polygon
		 */
		calculateAngle: function () {
			var a = (Math.PI * 2) / this.sides;
			a = this.anticlockwise ? -a : a;
			
			this.angle = a;
		},
		/**
		 * @method update - updates the login
		 */
		update: function () {
		},
		/**
		 * @method draw - draws to the canvas
		 */
		draw: function (ctx) { 
			if (this.sizes < 3) {
				return;
			};
			
			ctx.save();
			ctx.translate(this.x, this.y);
			ctx.rotate(this.startAngle);
			ctx.beginPath();
			ctx.moveTo(this.radius, 0);
			for (var i = 1; i < this.sides; i++) {
				ctx.lineTo(this.radius * Math.cos(this.angle * i), this.radius * Math.sin(this.angle * i));
			}
			ctx.restore();
		}
	});
});