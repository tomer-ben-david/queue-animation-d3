(function () {
    function updateQueueAnimation(animationQueue) {
        var sel = d3.select("#queue_viewer")
                .selectAll("div");
        
        var d = sel.data(d3.range(1, animationQueue.occupancy + 1));
        d.enter()
            .append("div")
            .style("left", function(d) { return (d * (20 + 5)) + "px"; });
        d.exit()
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
            "target-size": 10
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
	
    setInterval(
        function () {
            run();
        },
        1000);
    
})();
