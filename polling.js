var polling = polling || (function () {
    var _url;
    var _pollingInterval;
    var _callback;
    
    function internalCallback(error, response) {
        if(!error || typeof(error) == "undefined") {
            _callback(response);
        }
        else {
			if(error.status = 404) {
				_callback({
					"error": _url + " not found"
				});
			}
			else {
				_callback({
					"error": error.response
				});
			}
            console.log(error);
        }
    }
    
    return {
        init: function(url, pollingInterval, callback) {
            _url = url;
            _pollingInterval = pollingInterval;
            _callback = callback;
        },

        start: function() {
            d3.json(_url, internalCallback);

            setInterval(function() {
                            d3.json(_url, internalCallback);
                       },
                       _pollingInterval);
        }
    }
})();
