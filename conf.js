var conf = conf || {
  "queuedata-uri": "test/response.json",
  "polling-interval-sec": "1", // seconds
  "response-jsonpath": {
      "occupancy": "$.queuedatavalue.occupancydatavalue.occupancyvalueval",
      "target-size": "$.targetqueuesizedatavalue.targetqueuesizevalue"
  }
}
