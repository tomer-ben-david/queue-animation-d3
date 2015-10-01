var conf = conf || {
  "queuedata-uri": "test/response.json",	// the url to query in order to get queue data
  "polling-interval-sec": "1", 				// the polling interval in seconds
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
