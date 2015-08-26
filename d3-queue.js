var dataset = [ 5, 10, 15, 20, 25 ];

//d3.select("body").selectAll("div")
//    .data(dataset)
//    .enter()
//    .append("div")
//    .attr("class", "bar");

// Your beautiful D3 code will go here
var svg = d3.select("body").append("svg");
var mySquare=svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x",function(d, i) { return (i * 50) + 25; })
    .attr("y",svg.height / 2)
    .attr("width",30)
    .attr("height",30);


mySquare
    .transition()
    .attr("x",320)
    .duration(2000)
    .delay(100);
