<template>
    <div>
        <Pie v-if="def.type == 'pie'" :data="data"></Pie>
        <div v-else>
            <h2>This type will probably come in the next versions.</h2>
            <p>Stay tuned. Thank you.</p>
        </div>
        
    </div>
</template>

<script>
import Pie from './Pie.vue'

    export default {
        name: 'Chartless',
        components: {
            Pie
        },
        props: {
            def: {
                type: Object,
                required: true
            },
            data: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style>
/* Chart C3 global */
.c3-chart-arc.c3-target g path {
  opacity: .8;
}

.c3-chart-arc path {
  stroke: #fff;
  z-index: 1000000000000;
}

.c3-chart-arc rect {
  stroke: white;
  stroke-width: 1;
}

.c3-chart-arc text {
  fill: #000000;
}

.c3-chart-arc.c3-target.c3-focused g path {
  opacity: 1;
  cursor: default !important;
}

.c3-chart-arc.c3-target g path {
  opacity: .8;
}

.c3-target.c3-defocused {
  opacity: 0.4 !important;
}

/* Tooltip */
.c3-tooltip-container {
  z-index: 10;
}

.c3-tooltip {
  border-collapse: collapse;
  border-spacing: 0;
  background-color: #fff;
  empty-cells: show;
  -webkit-box-shadow: 7px 7px 12px -9px #777777;
  -moz-box-shadow: 7px 7px 12px -9px #777777;
  box-shadow: 7px 7px 12px -9px #777777;
  opacity: 1;
}

.c3-tooltip th {
  background-color: #FFF;
  font-size: 13px;
  padding: 2px 5px;
  text-align: left;
  color: #000000;
}

.c3-tooltip td {
  font-size: 13px;
  padding: 3px 6px;
  background-color: #fff;
}

.c3-tooltip td > span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 6px;
  border-radius: 5px;
}

.c3-tooltip .value {
  text-align: right;
}
</style>