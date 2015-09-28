var parser = parser || (function () {
    var _queueName = "";
    var _jsonPathOccupancy = "";
    var _jsonPathTargetQueueSize = "";
    
    return {
        init: function(queueName, jsonPathOccupancy, jsonPathTargetQueueSize) {
            _queueName = queueName;
            _jsonPathOccupancy = jsonPathOccupancy;
            _jsonPathTargetQueueSize = jsonPathTargetQueueSize;
        },

        getQueueState: function (response) {
            var occupancy = jsonPath(response, _jsonPathOccupancy);
            var targetQueueSize = jsonPath(response, _jsonPathTargetQueueSize);

            if(occupancy) {
                occupancy = occupancy[0];
            }
            else {
                occupancy = 0;
            }
            
            if(targetQueueSize) {
                targetQueueSize = targetQueueSize[0];
            }
            else {
                targetQueueSize = 0;
            }
            
            // for testing
            occupancy = Math.floor(Math.random() * targetQueueSize);
            
            console.log("name=" + _queueName + " occupancy=" + occupancy + " target-size=" + targetQueueSize);
            
            return {
                "name": _queueName,
                "occupancy": occupancy,
                "target-size": targetQueueSize
            }
        }
    }
})();
