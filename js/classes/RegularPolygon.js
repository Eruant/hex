define(['Class'], function (Class) {
					 
	return Class.extend({
		/**
		 * @method init - initializes the Class
		 */
		init: function () {
		},
		
		drawPolygon: function (ctx, x, y, radius, sides, startAngle, anticlockwise) {
			
			if (sides < 3) {
				return;
			}
			
			var sides = sides || 6,
				angle = this.calculateAngle(sides, anticlockwise || false),
				i;
			
			ctx.save();
			ctx.translate(x, y);
			ctx.rotate(startAngle || 0);
			ctx.beginPath();
			ctx.moveTo(radius, 0);
			for (i = 1; i < sides; i++) {
				ctx.lineTo(radius * Math.cos(angle * i), radius * Math.sin(angle * i));
			}
			ctx.closePath();
			ctx.restore();
		},
		/**
		 * @method calculateAngle - calculates the inner angle of the polygon
		 */
		calculateAngle: function (sides, anticlockwise) {
			var a = (Math.PI * 2) / sides;
			a = anticlockwise ? -a : a;
			
			return a;
		}
	});
});