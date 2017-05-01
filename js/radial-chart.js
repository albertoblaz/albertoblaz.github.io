(function() {
    const width = 120
    const height = 120
    const radio = 54

    const svg = d3.select(".radial-chart")
        .append('svg')
        .attr('class', 'progress')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', `0 0 ${width} ${height}`)

    svg.append('circle')
        .attr('cx', width/2)
        .attr('cy', height/2)
        .attr('r', radio)
        .attr('class', 'progress__meter')

    svg.append('circle')
        .attr('cx', width/2)
        .attr('cy', height/2)
        .attr('r', radio)
        .attr('class', 'progress__value')

    const g = svg.append('g')
        .attr("transform", "translate(" + width/2 + "," + height/2 + ")")
        .attr('width', width/2)
        .attr('height', height/2)

    g.append('text')
        .attr('dx', -8)
        .attr('dy', 4)
        .attr('class', 'progress__label-number')
        .text('3')

    g.append('text')
        .attr('dx', -22)
        .attr('dy', 25)
        // .attr('class', 'progress__label-text')
        .text('Years')

    const data = 3
// <svg class="progress" width="120" height="120" viewBox="0 0 120 120">
//     <circle class="progress__meter" cx="60" cy="60" r="54" stroke-width="12" />
//     <circle class="progress__value" cx="60" cy="60" r="54" stroke-width="12" />
// </svg>

}())