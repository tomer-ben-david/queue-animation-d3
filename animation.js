var animation = animation || (function () {
    return {
        updateQueueAnimation: function(animationQueue) {
            var occupancy = animationQueue["occupancy"];
			var viewer_width = 1 * (d3.select("#queue_viewer").style("width").replace("px", ""));
			var slot_width = 30;	// the width of a square representing a slot
			var slot_gap = 5;		// the gap between slots
			
            //console.log("filledSlots=" + filledSlots);
            //console.log("emptySlots=" + emptySlots);
			
            // filled slots
            var sel_filled = d3.select("#queue_viewer").selectAll("div.filled");
			var current_occupancy = 0;
			
			if(sel_filled[0][0]) {
				if(sel_filled[0][0].constructor === Array) {
					current_occupancy = sel_filled[0][0].length;
				}
				else {
					current_occupancy = 1;
				}
			}
			
			if(current_occupancy > occupancy) {
				sel_filled.datum(function(d, i) {
					return d - (occupancy - current_occupancy);
				});
			}
			
			var start = viewer_width / 2 - ((slot_width + slot_gap) * occupancy) / 2;
			
			var d_filled = sel_filled.data(d3.range(1, occupancy + 1));
			d_filled
				.attr("class", "filled")
				.transition()
				.style("left", function(d) { return (start + d * (slot_width + slot_gap)) + "px"; });
			d_filled.enter()
				.append("div")
				.attr("class", "filled")
				.style("left", 0)
				.transition()
				.style("left", function(d) { return (start + d * (slot_width + slot_gap)) + "px"; });
			d_filled.exit()
				.transition()
				.style("left", function(d) { return viewer_width + "px"; })
				.remove();
        },

        /*
         * From a queue state received from an external service, creates an animation compatible queue state
         * For now, the animated state is the same as the received state
         */
        createNewQueueAnimatedState: function(queue) {
            return queue;
        }
    }
})();
