## Instalal
a
```
npm i vue-chartless
```

## Basic usage

```html
<!-- Vue component -->
<template>
    <div>
        <Chart 
            :def="def"
            :data="data"
        ></Chart>
    </div>
</template>

<script>
import Chart from 'vue-chartless'

export default {
    components: {
      Chart
    },
    data: () => ({
        def : {
            type : 'pie'
        },
        data : [
            { label: 'London', value:'330' },
            { label: 'Barcelona', value:'430' },
            { label: 'Paris', value:'150' },
            { label: 'Belgrade', value:'220' }
        ]
    })
}
</script>
```

## Supported types
* pie
* bar

![alt text](https://kumricbucket.s3-eu-west-1.amazonaws.com/chart114.png)
