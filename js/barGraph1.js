//BAR GRAPH 1
var parseDate = d3.timeParse("%Y"); //Converting data to year format.

var margin = { top: 80, right: 40, bottom: 10, left: 10 };

var y = d3 //Scaling value of Y axis
  .scaleLinear()
  .domain([0, 12])
  .range([300, 0]);

var x = d3 //Scaling value of X axis
  .scaleTime()
  .domain(
    d3.extent(data.year1, function(d) {
      return parseDate(d);
    })
  )
  .range([0, 610]);

var ticks = [0, 2, 4, 6, 8, 10, 12];
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
  .select("#barGraph1")
  .append("div")
  .style("position", "absolute")
  .style("padding", "0 10px")
  .style("background", "white")
  .style("opacity", 0.9);

var svg = d3
  .select("#barGraph1")
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
  .data(data.value1)
  .enter()
  .append("rect")
  .attr("height", 0)
  .attr("width", "30")
  .attr("fill", "red")
  .attr("transform", "translate(40,0)")
  .attr("x", function(d, i) {
    return 60 * i;
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
      .html("Value: $" + d + " Billion")
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

barGroup //Calling Y- axis.
  .append("g")
  .attr("class", "axisY")
  .call(yAxis);

barGroup //Calling X- axis.
  .append("g")
  .attr("class", "axis x")
  .attr("transform", "translate(50,300)")
  .call(xAxis);
