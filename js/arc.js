//ARC
var margin = { top: 20, right: 20, bottom: 20, left: 20 },
  width = 300 - margin.right - margin.left,
  height = 300 - margin.top - margin.bottom,
  radius = width / 3.5;

var color = d3.scaleOrdinal().range(["#FF0000", "#FFFFFF"]);

var arc = d3
  .arc()
  .outerRadius(radius - 10)
  .innerRadius(radius - 30);

var pie = d3
  .pie()
  .sort(null)
  .startAngle(-1 * Math.PI)
  .endAngle(1 * Math.PI)
  .value(function(d, i) {
    return d;
  });

//ARC 1
var svg1 = d3
  .select("#arc1")
  .append("svg")
  .attr("height", height)
  .attr("width", width)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var g1 = svg1
  .selectAll(".arc1")
  .data(pie(data.arc1))
  .enter()
  .append("g")
  .attr("class", "arc1");

var path = g1
  .append("path")
  .attr("d", arc)
  .attr("stroke-width", "2px")
  .attr("stroke", "white")
  .attr("fill", function(d, i) {
    return color(i);
  });

svg1
  .append("text")
  .attr("x", "10")
  .attr("y", "65")
  .attr("font-size", "1.2em")
  .text("70");

svg1
  .append("text")
  .attr("x", "5")
  .attr("y", "90")
  .attr("font-size", "1.2em")
  .attr("text-anchor", "middle")
  .text("CONSOLE");

//ARC 2
var svg2 = d3
  .select("#arc2")
  .append("svg")
  .attr("height", height)
  .attr("width", width)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var g2 = svg2
  .selectAll(".arc2")
  .data(pie(data.arc2))
  .enter()
  .append("g")
  .attr("class", "arc2");

g2
  .append("path")
  .attr("d", arc)
  .attr("stroke-width", "2px")
  .attr("stroke", "white")
  .attr("fill", function(d, i) {
    return color(i);
  });

svg2
  .append("text")
  .attr("x", "10")
  .attr("y", "65")
  .attr("font-size", "1.2em")
  .text("65");

svg2
  .append("text")
  .attr("x", "5")
  .attr("y", "90")
  .attr("font-size", "1.2em")
  .attr("text-anchor", "middle")
  .text("PC");

//ARC 3
var svg3 = d3
  .select("#arc3")
  .append("svg")
  .attr("height", height)
  .attr("width", width)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var g3 = svg3
  .selectAll(".arc3")
  .data(pie(data.arc3))
  .enter()
  .append("g")
  .attr("class", "arc3");

g3
  .append("path")
  .attr("d", arc)
  .attr("stroke-width", "2px")
  .attr("stroke", "white")
  .attr("fill", function(d, i) {
    return color(i);
  });

svg3
  .append("text")
  .attr("x", "10")
  .attr("y", "65")
  .attr("font-size", "1.2em")
  .text("38");

svg3
  .append("text")
  .attr("x", "5")
  .attr("y", "90")
  .attr("font-size", "1.2em")
  .attr("text-anchor", "middle")
  .text("SMARTPHONES");

//ARC 4
var svg4 = d3
  .select("#arc4")
  .append("svg")
  .attr("height", height)
  .attr("width", width)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var g4 = svg4
  .selectAll(".arc4")
  .data(pie(data.arc4))
  .enter()
  .append("g")
  .attr("class", "arc4");

g4
  .append("path")
  .attr("d", arc)
  .attr("stroke-width", "2px")
  .attr("stroke", "white")
  .attr("fill", function(d, i) {
    return color(i);
  });

svg4
  .append("text")
  .attr("x", "10")
  .attr("y", "65")
  .attr("font-size", "1.2em")
  .text("35");

svg4
  .append("text")
  .attr("x", "5")
  .attr("y", "90")
  .attr("font-size", "1.2em")
  .attr("text-anchor", "middle")
  .text("DEDICATED");

svg4
  .append("text")
  .attr("x", "5")
  .attr("y", "110")
  .attr("font-size", "1.2em")
  .attr("text-anchor", "middle")
  .text("HANDHELD");

svg4
  .append("text")
  .attr("x", "5")
  .attr("y", "130")
  .attr("font-size", "1.2em")
  .attr("text-anchor", "middle")
  .text("SYSTEM");

//ARC 5
var svg5 = d3
  .select("#arc5")
  .append("svg")
  .attr("height", height)
  .attr("width", width)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var g5 = svg5
  .selectAll(".arc5")
  .data(pie(data.arc2))
  .enter()
  .append("g")
  .attr("class", "arc5");

g5
  .append("path")
  .attr("d", arc)
  .attr("stroke-width", "2px")
  .attr("stroke", "white")
  .attr("fill", function(d, i) {
    return color(i);
  });

svg5
  .append("text")
  .attr("x", "10")
  .attr("y", "65")
  .attr("font-size", "1.2em")
  .text("26");

svg5
  .append("text")
  .attr("x", "5")
  .attr("y", "90")
  .attr("font-size", "1.2em")
  .attr("text-anchor", "middle")
  .text("WIRELESS");

svg5
  .append("text")
  .attr("x", "5")
  .attr("y", "110")
  .attr("font-size", "1.2em")
  .attr("text-anchor", "middle")
  .text("DEVICE");
