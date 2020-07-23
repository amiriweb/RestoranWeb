import $ from 'jquery';
import waypoints from '../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
 constructor() {
    this.itemsToReveal = $(".feature-box");
    this.hideInitially();
    this.createWaypoints();
 }

 hideInitially() {
   console.log(this.itemsToReveal);
   this.itemsToReveal.addClass("reveal-item");
 }

 createWaypoints() {
   this.itemsToReveal.each(function(){
     var currentItem = this;
      new Waypoint({
          element: currentItem,
          handler: function() {
              $(currentItem).addClass("reveal-item--is-visible");
          },
          offset: "125%"
      });
   });
 }
}
export default RevealOnScroll;
