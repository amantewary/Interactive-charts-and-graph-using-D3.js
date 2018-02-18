//BAR GRAPH 3
var parseDate = d3.timeParse("%Y"); //Converting data to year format.

var margin = { top: 80, right: 40, bottom: 0, left: 10 };

var y = d3 //Scaling value of Y axis
  .scaleLinear()
  .domain([0, 200])
  .range([300, 0]);

var x = d3 //Scaling value of X axis
  .scaleTime()
  .domain(
    d3.extent(data.year3, function(d) {
      return parseDate(d);
    })
  )
  .range([0, 510]);

var ticks = [0, 50, 100, 150, 200];
var gridlines = d3 //Adding gridlines
  .axisLeft(y)
  .tickValues(ticks)
  .tickFormat("")
  .tickSize(-innerWidth);

var yAxis = d3 //Adding Y axis
  .axisLeft(y)
  .tickValues(ticks)
  .tickSize(0);

var xAxis = d3.axisBottom(x); //Adding X axis

var tooltip = d3 //Adding tooltip
  .select("#barGraph3")
  .append("div")
  .style("position", "absolute")
  .style("padding", "0 10px")
  .style("background", "white")
  .style("opacity", 0.9);

var svg = d3
  .select("#barGraph3")
  .append("svg")
  .attr("height", "100%")
  .attr("width", "100%");

var barGroup = svg //Creating group for adding bar graph, X-Y axis and gridlines.
  .append("g")
  .attr("transform", "translate(" + margin.top + "," + margin.left + ")");

barGroup
  .append("g")
  .attr("class", "grid")
  .attr("transform", "translate(20,0)")
  .call(gridlines);

barGroup
  .selectAll("rect")
  .data(data.value3)
  .enter()
  .append("rect")
  .attr("height", "0")
  .attr("width", "50")
  .attr("fill", "red")
  .attr("transform", "translate(40,0)")
  .attr("x", function(d, i) {
    return 100 * i;
  })
  .attr("y", function(d) {
    return 150 + y(d);
  })
  .on("mouseover", function(d) { //Adding mouse events for interactivity.
    tooltip //Invoking tootip on mouse over.
      .transition()
      .duration(200)
      .style("opacity", 0.9);
    tooltip
      .html("Value: " + d + " Million")
      .style("left", d3.event.pageX + "px")
      .style("top", d3.event.pageY - 2220 + "px");
  })
  .on("mousemove", function() {
    this.style.fill = "black";
  })
  .on("mouseout", function() {
    this.style.fill = "red";
    tooltip
      .transition()
      .duration(500)
      .style("opacity", 0);
  })
  .transition() //Adding transition to the bar graph.
  .duration(900)
  .attr("height", function(d) {
    return 300 - y(d);
  })
  .attr("y", function(d) {
    return y(d);
  })
  .delay(function(d, i) {
    return i * 100;
  });

barGroup
  .append("g") //Calling Y- axis.
  .attr("class", "axisY")
  .call(yAxis);

barGroup
  .append("g") //Calling Y- axis.
  .attr("class", "axis x")
  .attr("transform", "translate(60,300)")
  .call(xAxis);

svg
  .append("text")
  .attr("x", "80")
  .attr("y", "350")
  .text(
    "*mobile phone users who play games on mobile phones at least once per month"
  );
