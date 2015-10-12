var polling = polling || (function () {
    var _url;
    var _pollingInterval;
    
	var count = 0;
	var intervaId;
	
	function pollError(err) {
		console.error(err);
		
		d3.select(this).remove();
	}
	
	function pollLoaded() {
		d3.select(this).remove();
	}
	
	// function called at each tick for requesting new queue info
	// this function uses jsonp approach in order to get data from other domains
	// it creates a script node, attaches the error and onload events, attaches the script to the head node
	// sets the url
	// on both events the script is removed from DOM
	function poll() {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.onerror = pollError;
		script.onload = pollLoaded;
		
		document.getElementsByTagName("head")[0].appendChild(script);
		
		script.src = _url;
	}

    return {
        init: function(url, pollingInterval) {
            _url = url;
            _pollingInterval = pollingInterval;
        },

		
        start: function() {
            poll();

            intervalId = setInterval(function() {
                            poll();
                       },
                       _pollingInterval);
        }
    }
})();
