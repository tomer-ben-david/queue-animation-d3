(function () {
    function fetchNewQueueState() {
        return { "queues":
          [{
            "name": "Queue Name",
            "occupancy": Math.floor(Math.random() * 10), // max 10 elements in queue
            "target-size": 10
          }]
        }
    }
    
    function updateQueue() {
        var obj = fetchNewQueueState();
        if(!obj) {
            return;
        }
        
        var queue = obj.queues ? obj.queues[0] : null;
        
        if(!queue) {
            return;
        }
        
        var sel = d3.select("#queue_viewer")
                .selectAll("div");
        
        var d = sel.data(d3.range(1, queue.occupancy + 1));
        d.enter()
            .append("div")
            .style("left", function(d) { return (d * (20 + 5)) + "px"; });
        d.exit()
            .remove();
    }
    
    setInterval(
        function () {
            updateQueue();
        },
        1000);
    
})();
