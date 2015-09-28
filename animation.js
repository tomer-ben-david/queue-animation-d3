var animation = animation || (function () {
    return {
        updateQueueAnimation: function(animationQueue) {
            var filledSlots = animationQueue["occupancy"];
            var emptySlots = animationQueue["target-size"] - filledSlots;

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
            var d_empty = sel_empty.data(d3.range(filledSlots + 1, animationQueue["target-size"] + 1));
            d_empty
                .attr("class", "empty")
                .style("left", function(d) { return (d * (30 + 5)) + "px"; });

            d_empty.enter()
                .append("div")
                .attr("class", "empty")
                .style("left", function(d) { return (d * (30 + 5)) + "px"; });
            d_empty.exit()
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
