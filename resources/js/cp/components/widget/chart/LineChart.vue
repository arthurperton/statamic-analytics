<template>
    <resize-container
        @size="onSize"
        @resizeStart="onResizeStart"
        @resizeEnd="onResizeEnd"
    >
    <div class="w-full h-full">
            <div v-if="resizing">...</div>
            <svg v-else :width="width" :height="height">
                <g
                    :width="boundsWidth"
                    :height="boundsHeight"
                    ref="axes"
                    :transform="`translate(${marginLeft}, ${marginTop})`"
                />
                <g
                    :width="boundsWidth"
                    :height="boundsHeight"
                    ref="data"
                    :transform="`translate(${marginLeft}, ${marginTop})`"
                />
            </svg>
        </div>
    </resize-container>
</template>

<script>
import * as d3 from 'd3';

export default {
    props: {
        width: {
            type: Number,
            default: 800,
        },
        height: {
            type: Number,
            default: 400,
        },
    },

    data() {
        return {
            marginTop: 30,
            marginRight: 30,
            marginBottom: 40,
            marginLeft: 40,
            data: [],
        };
    },

    computed: {
        boundsWidth() {
            return this.width - this.marginLeft - this.marginRight;
        },

        boundsHeight() {
            return this.height - this.marginTop - this.marginBottom;
        },

        xScale() {
            return d3
                .scaleTime()
                .domain(d3.extent(this.data, (d) => d[0]))
                .range([0, this.boundsWidth]);
        },

        yScale() {
            return (
                d3
                    .scaleLinear()
                    .domain([0, d3.max(this.data, (d) => d[1])])
                    // .domain(d3.extent(this.data, (d) => d[1]))
                    .range([this.boundsHeight, 0])
            );
        },

        xAxis() {
            return d3
                .axisBottom(this.xScale)
                .tickSize(0)
                .ticks(7)
                .tickPadding(24);
        },

        yAxis() {
            return d3
                .axisLeft(this.yScale)
                .tickSize(this.boundsWidth)
                // .ticks(5)
                // .tickFormat((n) => `${d3.format('.1f')(0.001 * n)}s`)
                .tickPadding(24);
        },
    },

    created() {
        const date = new Date();
        date.setHours(0, 0, 0);

        const data = [];
        for (let days = 0; days < 7; days++) {
            data.push([
                new Date(date.getTime()),
                0 + Math.floor(Math.random() * 20),
            ]);

            date.setDate(date.getDate() - 1);
        }

        this.data = data;
    },


    methods: {
        onSize(size) {
            this.applySize(size);
        },

        onResizeStart(size) {
            // this.resizing = true;
        },

        onResizeEnd(size) {
            this.applySize(size);
        },

        applySize({ width, height }) {
            this.width = width;
            this.height = height;

            this.resizing = false;

            this.$nextTick(() => this.draw());
        },

        draw() {
            const axesSvg = d3.select(this.$refs.axes);
            axesSvg.selectAll('*').remove();

            this.drawXAxis(axesSvg);
            this.drawYAxis(axesSvg);

            const dataSvg = d3.select(this.$refs.data);
            dataSvg.selectAll('*').remove();

            this.drawLine(dataSvg);
        },

        drawXAxis(svg) {
            svg.append('g')
                .attr('class', 'text-sm text-grey-60')
                .attr('transform', `translate(0, ${this.boundsHeight})`)
                .call(this.xAxis);
        },

        drawYAxis(svg) {
            svg.append('g')
                .attr('class', 'text-md text-grey-60')
                .attr('transform', `translate(${this.boundsWidth}, 0)`)
                .call(this.yAxis)
                .call((g) =>
                    g.selectAll('line').style('stroke', 'hsl(210, 30%, 95%)'),
                ) // grey-30
                .call((g) => g.select('.domain').remove());
        },

        drawLine(svg) {
            const xScale = this.xScale;
            const yScale = this.yScale;

            const line = d3
                .line()
                .x(function (d) {
                    return xScale(d[0]);
                })
                .y(function (d) {
                    return yScale(d[1]);
                });
            // .curve(d3.curveCardinal);

            svg.append('path')
                .attr('fill', 'none')
                .attr('stroke', 'steelblue')
                .attr('stroke-linejoin', 'round')
                .attr('stroke-width', 2.5)
                .attr('d', line(this.data));
        },
    },
}
</script>