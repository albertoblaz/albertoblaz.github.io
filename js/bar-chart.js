(function() {
var svg = d3.select(".bar-chart").append('svg'),
    margin = {top: 20, right: 20, bottom: 30, left: 80},
    width = 300 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// var tooltip = d3.select("body").append("div").attr("class", "toolTip");

var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleBand().range([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

const data = [
    { key: 'games', title: 'Board/Video Games', value: 59 },
    { key: 'sports', title: 'Sports', value: 66 },
    { key: 'cooking', title: 'Cooking', value: 69 },
    { key: 'economics', title: 'Economics', value: 75 },
    { key: 'cinema', title: 'Cinema', value: 80 },
    { key: 'history', title: 'History', value: 91 },
    { key: 'music', title: 'Music', value: 95 },
    { key: 'code', title: 'Code', value: 98 },
]

const color = d3.scaleOrdinal([ '#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5' ]) // d9d9d9bc80bdccebc5ffed6f

x.domain([0, d3.max(data, (d) => d.value )])
y.domain(data.map((d) => d.key)).padding(0.4)

const yAxis = d3.axisLeft(y)

g.append("g")
    .attr("class", "axis axis--y")
    .attr("y", height)
    .call(yAxis);

g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", 0)
    .attr("height", y.bandwidth())
    .attr("y", (d) => y(d.key))
    .attr("width", (d) => x(d.value))
    .style('fill', (d,i) => color(i))
    // .on("mousemove", function(d){
    //     tooltip
    //         .style("left", d3.event.pageX - 50 + "px")
    //         .style("top", d3.event.pageY - 70 + "px")
    //         .style("display", "inline-block")
    //         .html((d.title) + "<br>" + (d.value));
    // })
    // .on("mouseout", (d) => { tooltip.style("display", "none") });
}())