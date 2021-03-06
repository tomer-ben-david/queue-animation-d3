var parser = parser || (function () {
    var _queueName = "";
    var _jsonPathOccupancy = "";
    var _jsonPathTargetQueueSize = "";
    var _keys = [];
	var _localTesting = "0";
	
    return {
        init: function(queueName, jsonPathOccupancy, jsonPathTargetQueueSize, keys, localTesting) {
            _queueName = queueName;
            _jsonPathOccupancy = jsonPathOccupancy;
            _jsonPathTargetQueueSize = jsonPathTargetQueueSize;
			_keys = keys;
			_localTesting = localTesting;
        },

        getQueueState: function (response) {
			if(response.error) {
				return {
					"error": response.error
				}
			}
			
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
            
            if(_localTesting == "1") {
				targetQueueSize = targetQueueSize + Math.floor(Math.random() * targetQueueSize);
				occupancy = Math.floor(Math.random() * targetQueueSize);
            }
			
			if(_keys && _keys.length > 0) {
				_queueName = "";
				for(var i = 0, n = _keys.length; i < n; ++i) {
					var val = jsonPath(response, _keys[i]);
					if(val) {
						_queueName += val[0] + " ";
					}
				}
			}
			
            console.log("name=" + _queueName + " occupancy=" + occupancy + " target-size=" + targetQueueSize);
            
            return {
                "name": _queueName,
                "occupancy": occupancy,
                "target-size": targetQueueSize
            }
        }
    }
})();
