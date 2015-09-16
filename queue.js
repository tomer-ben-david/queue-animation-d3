(function () {
    function updateQueueAnimation(animationQueue) {
        
		var filledSlots = animationQueue.occupancy;
		var emptySlots = animationQueue.target_size - filledSlots;
		
		//console.log("filledSlots=" + filledSlots);
		//console.log("emptySlots=" + emptySlots);
		
		// filled slots
        var sel_filled = d3.select("#queue_viewer").selectAll("div.filled");
        var d_filled = sel_filled.data(d3.range(1, filledSlots + 1));
		d_filled
			.attr("class", "filled")
            .style("left", function(d) { return (d * (30 + 5)) + "px"; });
        d_filled.enter()
            .append("div")
			.attr("class", "filled")
            .style("left", function(d) { return (d * (30 + 5)) + "px"; });
        d_filled.exit()
            .remove();
		
		// empty slots
		var sel_empty = d3.select("#queue_viewer").selectAll("div.empty");
		var d_empty = sel_empty.data(d3.range(filledSlots + 1, animationQueue.target_size + 1));
		d_empty
			.attr("class", "empty")
            .style("left", function(d) { return (d * (30 + 5)) + "px"; });

        d_empty.enter()
            .append("div")
			.attr("class", "empty")
            .style("left", function(d) { return (d * (30 + 5)) + "px"; });
        d_empty.exit()
            .remove();
    }
    
	/*
	 * Returns a new queue state.
	 * The state will come from a rest service, but for now it is just a json
	 * with a random occupancy.
	 */
    function fetchNewQueueState() {
        var obj = { "queues":
          [{
            "name": "Queue Name",
            "occupancy": Math.floor(Math.random() * 10), // max 10 elements in queue
            "target_size": 10
          }]
        };
		
		if(!obj) {
            return null;
        }
		
		var queue = obj.queues ? obj.queues[0] : null;
        return queue;
    }
    
	/*
	 * From a queue state received from an extern service, creates an animation compatible queue state
	 * For now, the animated state is the same as the received state
	 */
    function createNewQueueAnimatedState(queue) {
		return queue;
	}
	
	function run() {
		var q = fetchNewQueueState();
		var aq = createNewQueueAnimatedState(q);
		updateQueueAnimation(aq);
	}
	
    var interval = setInterval(
        function () {
            run();
        },
        1000);
    
})();
