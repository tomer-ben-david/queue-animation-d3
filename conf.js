var conf = conf || {
  "queuedata-uri": "http://192.168.0.102/queue-animation-d3/test/response.json",
  "polling-interval-sec": "1", // seconds
  "response-jsonpath": {
      "occupancy": "$.queuedatavalue.occupancydatavalue.occupancyvalueval",
      "target-size": "$.targetqueuesizedatavalue.targetqueuesizevalue"
  }
}
