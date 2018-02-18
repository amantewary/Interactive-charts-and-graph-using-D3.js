//PIE CHART 1
var margin = { top: 20, right: 20, bottom: 20, left: 20 },
  width = 320 - margin.right - margin.left,
  height = 320 - margin.top - margin.bottom,
  radius = width / 2;

var color = d3.scaleOrdinal() //Adding color to pie chart
              .range(["#FF0000", "#000000", "#E1E1E1"]);

var arc = d3
  .arc()
  .outerRadius(radius - 10)
  .innerRadius(0);

var arcHover = d3
  .arc()
  .outerRadius(radius + 1)
  .innerRadius(0);

var pie = d3
  .pie()
  .sort(null)
  .value(function(d, i) {
    return d;
  });

var label = d3
  .arc()
  .outerRadius(radius - 50)
  .innerRadius(radius - 60);

var svg = d3
  .select("#pie1")
  .append("svg")
  .attr("height", height)
  .attr("width", width)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var g = svg
  .selectAll(".arc")
  .data(pie(data.pie1))
  .enter()
  .append("g")
  .attr("class", "arc");

g
  .append("path")
  .attr("d", arc)
  .attr("stroke-width", "2px")
  .attr("stroke", "white")
  .attr("fill", function(d, i) {
    return color(i);
  })
  .on("mouseenter", function(d) { //Adding mouse events for interactivity.
    d3
      .select(this)
      .attr("stroke", "white")
      .transition()
      .duration(200)
      .attr("d", arcHover)
      .attr("stroke-width", 1);
  })
  .on("mouseleave", function(d) {
    d3
      .select(this)
      .transition()
      .duration(200)
      .attr("d", arc);
  })
  .transition() //Adding transition to the pie chart.
  .ease(d3.easeLinear)
  .duration(2000)
  .attrTween("d", animatePie);

g
  .append("text")
  .attr("transform", function(d) {
    return "translate(" + label.centroid(d) + ")";
  })
  .attr("y", "0.35em")
  .attr("fill", "white")
  .attr("font-size", "1.6em")
  .text(function(d, i) {
    return data.pie1[i];
  })
  .transition() //Adding transition to the text.
  .ease(d3.easeLinear)
  .duration(2000);

//Function for Arc Tween
function animatePie(b) {
  b.innerRadius = 0;
  var i = d3.interpolate({ startAngle: 0, endAngle: 0 }, b);
  return function(t) {
    return arc(i(t));
  };
}
