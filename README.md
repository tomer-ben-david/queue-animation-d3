# queue-animation-d3

## Queue animated aspects

1. input: `queue-size` output: `queue-size` number of squares; each square representing an item in the queue.

Example input json 

```json
{ "queues":
  {
    "name": "name1"
    "occupancy": 5
    "target-size": 10
  }
  {
    "queue-name": "name2"
    "occupancy": 7
    "target-size": 12
  }
}
```

2. REQ-QUEUE-JSON-PARSE: parse json and show number of items (rectangles) as same number as the value of "occupancy" in json.
2. http://blog.visual.ly/creating-animations-and-transitions-with-d3-js/
2. https://www.google.co.il/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=queue%20animation%20d3
