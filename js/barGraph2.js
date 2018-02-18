//BAR GRAPH 2
var tooltip = d3 //Adding tooltip
  .select("#barGraph2")
  .append("div")
  .style("position", "absolute")
  .style("padding", "0 10px")
  .style("background", "white")
  .style("opacity", 0.9);

var svg = d3
  .select("#barGraph2")
  .append("svg")
  .attr("height", "100%")
  .attr("width", "100%");

svg //Appending rectangle for value of "Digital Format"
  .selectAll("rect.total")
  .data(data.value2)
  .enter()
  .append("rect")
  .attr("class", "total")
  .attr("height", "35")
  .attr("width", "800")
  .attr("fill", "black")
  .attr("x", "90")
  .attr("y", function(d, i) {
    return 70 * i;
  })
  .on("mouseover", function(d) { //Adding mouse event for interactivity
    tooltip //Invoking tooltip on mouseover
      .transition()
      .duration(200)
      .style("opacity", 0.9);
    tooltip
      .html("Digital Format: " + (100 - d) + "%")
      .style("left", d3.event.pageX + "px")
      .style("top", d3.event.pageY - 2220 + "px");
  })
  .on("mousemove", function() {
    this.style.fill = "#3A3A3A";
  })
  .on("mouseout", function() {
    this.style.fill = "black";
    tooltip
      .transition()
      .duration(500)
      .style("opacity", 0);
  });

svg //Appending rectangle for value of "Physical Format"
  .selectAll("rect.actual")
  .data(data.value2)
  .enter()
  .append("rect")
  .attr("class", "actual")
  .attr("height", "35")
  .attr("width", "0")
  .attr("fill", "red")
  .attr("x", "90")
  .attr("y", function(d, i) {
    return 70 * i;
  })
  .on("mouseover", function(d) { //Adding mouse event for interactivity
    tooltip //Invoking tooltip on mouseover
      .transition()
      .duration(200)
      .style("opacity", 0.9);
    tooltip
      .html("Physical Format: " + d + "%")
      .style("left", d3.event.pageX + "px")
      .style("top", d3.event.pageY - 2220 + "px");
  })
  .on("mousemove", function() {
    this.style.fill = "#FF7B7B";
  })
  .on("mouseout", function() {
    this.style.fill = "red";
    tooltip
      .transition()
      .duration(500)
      .style("opacity", 0);
  })
  .transition() //Adding transitions to bar graph.
  .duration(2000)
  .attr("width", function(d) {
    return d * 7;
  })
  .attr("x", "90")
  .delay(function(d, i) {
    return i * 100;
  });

svg
  .append("text")
  .selectAll("tspan")
  .data(data.year2)
  .enter()
  .append("tspan")
  .attr("x", "50")
  .attr("y", function(d, i) {
    return 25 + 70 * i;
  })
  .text(function(d) {
    return d;
  });

svg
  .append("text")
  .selectAll("tspan")
  .data(data.value2)
  .enter()
  .append("tspan")
  .attr("x", "100")
  .attr("y", function(d, i) {
    return 25 + 70 * i;
  })
  .attr("fill", "white")
  .attr("stroke", "none")
  .text(function(d) {
    return d;
  });

svg
  .append("text")
  .selectAll("tspan")
  .data([20, 28, 31])
  .enter()
  .append("tspan")
  .attr("x", "730")
  .attr("y", function(d, i) {
    return 25 + 70 * i;
  })
  .attr("fill", "white")
  .attr("stroke", "none")
  .text(function(d) {
    return d;
  });
svg
  .append("text")
  .attr("x", "80")
  .attr("y", "200")
  .text(
    "*includes subscriptons, digital full games, add-on content, mobile apps and social network gaming"
  );
