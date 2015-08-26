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

2. REQ-QUEUE-JSON-PARSE: We show right now a few ractangles each representing an item in queue.  however if there are currently 30 items in queue we don't want to show 30 rectangles so with regards to the number in "occupancy" the if we right now show 5 items in queue in the animation then in middle of first rect should show 1 in middle of second should show number (text) 2 then ... at the fifth element should show the number 30, this will enable us to know there are 30 items in the queue.
2. http://blog.visual.ly/creating-animations-and-transitions-with-d3-js/
2. https://www.google.co.il/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=queue%20animation%20d3
