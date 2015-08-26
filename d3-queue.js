var dataset = [ 5, 10, 15, 20, 25 ];

var queuesSnapshotJson =
                        [
                            {
                              "name": "name1",
                              "occupancy": 5,
                              "target-size": 10
                            }, {
                              "name": "name1",
                              "occupancy": 5,
                              "target-size": 10
                            }, {
                              "name": "name1",
                              "occupancy": 5,
                              "target-size": 10
                            }, {
                              "name": "name1",
                              "occupancy": 5,
                              "target-size": 10
                            }
                        ];

//d3.select("body").selectAll("div")
//    .data(dataset)
//    .enter()
//    .append("div")
//    .attr("class", "bar");

// Your beautiful D3 code will go here
var svg = d3.select("body").append("svg");
svg.style("width", "100%")
var mySquare=svg.selectAll("rect")
    .data(queuesSnapshotJson)
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