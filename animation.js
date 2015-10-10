// animation is like an object with private members it does not have currently any private members wihch internal functions can be aware of.
var animation = animation || (function () {
    return {
        updateQueueAnimation: function(animationQueue) {
			if(animationQueue.error) {
				d3.select("#queue_error").text("Error: " + animationQueue.error);
				return;
			}
			
            var occupancy = animationQueue["occupancy"];
			var target_size = animationQueue["target-size"];
			
			// 1 * - convert string to int.
			// Q: what is this ".style("width").replace("px", ""))"
			var viewer_width = 1 * (d3.select("#queue_viewer").style("width").replace("px", ""));
			var slot_width = 30;	// the width of a square representing a slot
			var slot_gap = 5;		// the gap between slots

			// set the name of the queue
			d3.select("#queue_name").text(animationQueue.name);
			
			// the left edge of the region occupied by the squares that form the queue
			var start = viewer_width / 2 - ((slot_width + slot_gap) * target_size) / 2;

			// draw the empty squares
			var sel_empty = d3.select("#queue_viewer").selectAll("div.empty");
			var d_empty = sel_empty.data(d3.range(1, target_size + 1));
			
			d_empty.enter()
				.append("div")
				.attr("class", "empty")
				.style("left", function(d) {
									return (start + d * (slot_width + slot_gap)) + "px";
								});
								
			d_empty.style("left", function(d) {
										return (start + d * (slot_width + slot_gap)) + "px";
									});
			
			d_empty.exit()
				.remove();
			
            // adjust the position of the existing filled squares
            var sel_filled = d3.select("#queue_viewer").selectAll("div.filled");
			sel_filled
				.transition()
				.style("left", function(d, i) {
									var newLeft = Math.floor(start + d * (slot_width + slot_gap));
									console.log("current_occupancy < occupancy - selection: d=" + d + " i=" + i + " newLeft=" + newLeft);
									return newLeft + "px";
								});
			// make the sure the dom order is the same as the data order
			sel_filled.sort();
			
			var current_occupancy = 0;
			
			// a d3 selection is an array. The first element of the array contains the selected elements
			if(sel_filled[0]) {
				if(sel_filled[0].constructor === Array) {
					// if the first element of the d3 selection is an array, it means there are more than 1 elements selected
					current_occupancy = sel_filled[0].length;
				}
				else {
					// if the first element of the d3 selection is _not_ an array, it means there is only 1 element selected
					current_occupancy = 1;
				}
			}
			
			console.log("current_occupancy=" + current_occupancy + " occupancy=" + occupancy);
			
			var d_filled = null;
			if(current_occupancy < occupancy) {
				// shift current values to right
				sel_filled.datum(function(d, i) {
					var newDatum = d + (occupancy - current_occupancy);
					return newDatum;
				});
				
				// move the squares to the right in order to make room to the left
				sel_filled
					.transition()
					.delay(50)
					.style("left", function(d, i) {
										var newLeft = Math.floor(start + d * (slot_width + slot_gap));
										return newLeft + "px";
									});
				
				// create the new squares
				d3.select("#queue_viewer").selectAll("div.dummy")
					.data(d3.range(1, (occupancy - current_occupancy) + 1))
					.enter()
					.append("div")
					.style("left", -slot_width + "px")
					.attr("class", "filled")
					.transition()
					.delay(250)
					.style("left", function(d, i) {
										var newLeft = Math.floor(start + d * (slot_width + slot_gap));
										return newLeft + "px";
									});

				
			}
			else if(current_occupancy == occupancy) {
				// do nothing
			}
			else {
				// remove the squares from the right
				d_filled = sel_filled.data(d3.range(1, occupancy + 1));
				
				d_filled.exit()
					.transition()
					.delay(50)
					.style("left", function(d, i) {
										return viewer_width + "px";
									})
					.remove();
			}
			
			if(occupancy == 0) {
				d3.select("#queue_info").text("Empty queue");
			}
			else {
				d3.select("#queue_info").text("");
			}
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
