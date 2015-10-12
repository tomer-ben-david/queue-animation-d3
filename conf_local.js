var conf = conf || {
  "queuedata-uri": "test/response.js",	// the url to query in order to get queue data
  "polling-interval-sec": "2", 				// the polling interval in seconds
  "local-testing": "1",						// 1 for local testing (random target-size, occupancy), 0 for disabling local testing
  "response-jsonpath": {					// a list of json path expressions (jsonpath.js). These expressions are to be applied to the json response.
      "occupancy": "$.queuedatavalue.occupancydatavalue.occupancyvalueval",	// the json path to queue occupancy
      "target-size": "$.targetqueuesizedatavalue.targetqueuesizevalue",		// the json path to queue target size
	  
	  "keys": [																// a list of json path expressions. the values found after
																			// appling these expression to the response are concatenated
																			// in order to get the name of the queue
		"$.keynamevalue.subkeyvalue-a",
		"$.keynamevalue.subkeyvalue-b"
	  ]
  }
}
