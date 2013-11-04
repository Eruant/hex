define(['Class'], function (Class) {

  var xPosition = 0,
      yPosition = 0;

  return Class.extend({

    /**
     * @method init - initializes the Class
     */
    init: function (target) {
      // get the pointer type
      this.pointerEventType = (('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch)) ? 'touchstart' : 'click';

      // add an event to the target element
      target.addEventListener(this.pointerEventType, this.positionListener, false);
    },
    /**
     * @method positionListener - deals with click / touch events
     */
    positionListener: function (event) {
      xPosition = event.offsetX;
      yPosition = event.offsetY;
    },
    /**
     * @method getPosition - gets the private variables x and y
     */
    getPosition: function () {
      return { x: xPosition, y: yPosition };
    },

    draw: function (ctx) {
      ctx.save();
      ctx.translate(xPosition, yPosition);
      ctx.strokeStyle = 'rgb(0, 255, 0)';
      ctx.strokeRect(-16, -16, 32, 32);
      ctx.restore();
    }
  });
});
