var dataset = [ 5, 10, 15, 20, 25 ];

var exampleInput = { "queues":[
                        {
                          "name": "name1",
                          "occupancy": 5,
                          "target-size": 10
                        },
                        {
                          "queue-name": "name2",
                          "occupancy": 7,
                          "target-size": 12
                        }
                    ]
                  }

//d3.select("body").selectAll("div")
//    .data(dataset)
//    .enter()
//    .append("div")
//    .attr("class", "bar");

// Your beautiful D3 code will go here
var svg = d3.select("body").append("svg");
svg.style("width", "100%")
var mySquare=svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x",function(d, i) { return (i * 50) + 25; })
    .attr("y",svg.height / 2)
    .attr("width",30)
    .attr("height",30)
    .transition()
    .attr("x",function(d, i) { return (i * 50) + 25 + 1000; })
    .duration(2000)
    .delay(100)