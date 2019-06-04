<template>
    <div>
        <vue-c3 :handler="handler"></vue-c3>
    </div>
</template>

<script>
import Vue from 'vue'
import VueC3 from 'vue-c3'
import Colors from './resources/chart-colors.js'
import $ from "jquery";

    export default {
        name: 'Pie',
        components: {
            'vue-c3': VueC3,
        },
        props: {
            data: {
                type: Array,
                required: true 
            }
        },
        data () {
            return {
                handler: new Vue(),
                dataMap: {},
                identifiers: [],
                colors: Colors.colors,
                rows: [[], []]
            }
        },
        watch: {
            data: {
                handler: function(newData) {
                    this.clear();
                    this.fill(newData);
                },
                deep: true
            }
        },
        mounted () {
            this.fill(this.data);
        },
        methods: {
            fill(data) {
                for (let i in data) {
                    let label = data[i].label
                    let value = data[i].value

                    this.rows[0].push(label)
                    this.rows[1].push(value)
                }
                
                let options = this.generateCharOptions()
                this.handler.$emit('init', options)

                let _this = this          
                setTimeout(function() { 
                    _this.renderValues()
                }, 100); 
            },
            renderValues() {
                $(this.$el).find('.c3-bar-val-text').remove()
                let container = this.$el
                var tspans = container.querySelectorAll('.c3-chart-arc text');
                var ts = Array.prototype.slice.call(tspans);

                
                for(var i = 0; i<ts.length; i++){
                    var cont = ts[i].innerHTML;

                    if (cont != '') {
                        var clone = ts[i].cloneNode(1);
                        
                        let itemValue = this.rows[1][i]
                        clone.textContent = itemValue
                        clone.setAttribute('dy', '1.5em')
                        clone.classList.add("c3-bar-val-text")
                        clone.style['font-weight'] = 'bold'
                        
                        ts[i].parentNode.insertBefore(clone, ts[i].nextSibling)
                    }
                }
            },
            generateCharOptions() {
                const options = {
                    data: {
                        rows: this.rows,
                        label: {
                            show: true
                        },
                        type : 'pie'
                    },
                    color: {
                        pattern: this.colors
                    },
                    pie: {
                        label: {
                            format: function(value, ratio, id) {
                                var label = ''
                                var text = id.split(':')[0]
                                if (text.length > 14) { label+= text.substring(0,14) }
                                else { label+= text }
                                return label
                            }
                        },
                    },
                    legend: {
                        hide: true
                    },
                    tooltip: {
                        format: {
                            name: function (name) { return name.split(':')[0] },
                            value: function (value) { return value; }
                        }
                    }
                }

                return options
            },
            clear() {
                this.identifiers = []
                this.rows = []
                this.rows.push([])
                this.rows.push([])
            },
        }
    }
</script>