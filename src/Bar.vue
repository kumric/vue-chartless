<template>
    <div class="c3-bar-container">
        <vue-c3 :handler="handler"></vue-c3>
    </div>
</template>

<script>
import Vue from 'vue'
import VueC3 from 'vue-c3'
import Colors from './resources/chart-colors.js'

export default {
    name: 'C3BarStatic',
    components: {
        VueC3
    },
    props: {
        data: {
            type: Array,
            required: true 
        }
    },
    data() {
        return {
            isLoading: false,
            handler: new Vue(),
            dataMap: {},
            colors: Colors.colors,
            rows: [ [], [] ],
            categories: [],
            barColumns: ['barId'],
        }
    },
    computed: {
        padding: function() {
            if (this.categories.length > 12) { return 40 } 
            else if (this.categories.length > 8) { return 25 }
            else if (this.categories.length > 4) { return 10 }
            return 0
        }
    },
    watch: {
        data: {
            handler: function(newData) {
                this.clear();
                this.fillStatic(newData) 
            },
            deep: true
        }
    },
    mounted() {
        this.clear()
        this.fillStatic(this.data) 
    },
    methods: {
        fillStatic(data) {
            for (let i in data) {
                let label = data[i].label
                let value = data[i].value

                this.categories.push(label)
                this.barColumns.push(value)

                this.rows[0].push(label)
                this.rows[1].push(value)
            }

            let options = this.generateCharOptions()
            this.handler.$emit('init', options)
        },
        generateCharOptions() {
            const options = {
                data: {
                    columns: [
                        this.barColumns
                    ],
                    type: 'bar',
                    colors: {
                        barId: '#9de5c4' //"#4fc08d"
                    }
                },
                color: {
                    pattern: this.colors
                },
                axis: {
                    x: {
                        label: {
                            text: '',
                            position: 'outer-center',
                        },
                        type: 'category',
                        categories: this.categories,
                        tick: {
                            centered: true
                        }
                    },
                    y: {
                        max: Math.max(this.barColumns),
                        min: 0,
                        padding: {
                            top: 0,
                            bottom: 0
                        },
                    }
                },
                legend: {
                    show: false
                },
                padding: {
                    bottom: this.padding
                }
            }

            return options
        },
        clear() {
            this.rows = []
            this.rows.push([])
            this.rows.push([])
            this.categories = []
            this.barColumns = ['barId']
        }
    }
}
</script>

<style>
.c3-bar._expanded_ {
  fill-opacity: 0.8;
}

.c3-bar-container path {
  fill: none;
  stroke-width: 1;
  stroke: #969696;
  /* stroke: #000; */
}

.c3-event-rect {
    cursor: default !important;
}

.c3-tooltip-name--barId td:first-child {
    display: none;
}

.c3-tooltip-container .c3-tooltip tbody tr:first-child th {
    font-weight: normal;
}

.c3-tooltip-container .c3-tooltip tbody tr:first-child  {
    display: flex !important;
}

.c3-tooltip-name--barId .value {
    text-align: left !important;
}
</style>
