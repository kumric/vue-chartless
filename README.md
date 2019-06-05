## Install
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
![alt text](https://s3.eu-west-1.amazonaws.com/kumricbucket/chart123.png?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luEEoaCXVzLWVhc3QtMSKAAn4AFelD2rVCpzKgr84iZcQqPDO1c1gpjRY6p0tb4dh1tYR1AbMhyFqxN6Pw09DqYied7B33n%2FA5duE0PX1EJ%2BWQxBj5EYNfZyEOvk%2FQ8h1uj8WRk6OSldJuCLcfl%2FDzokFiimdIHDtMNd4XGd%2Bw2qQV2k%2Foq4cFJXNmI8De5thoSSh9ndxdfF2lPP5OzJNFslpQl3h1ZEBEBIMDP99cl1S29fz3yGoNutq382VUfKObj20oFfQwaq26VpvetkMtQzWEXryhh9OYqjYE%2BSfvwfJBOSyIHe3YHBhsUdIlFQP%2BFWG1gjztZIF03LkC0jpEKr54GZt53S3h%2BMniIaAtqgQq2wMIHxAAGgw5NTk1MDAyMDgwOTkiDE7iaECdiWIpPJoRxyq4A3szicPUsZ4fdliV5B2OVFvFcQmY%2FvNqRUaZ%2FVPrRyzOjh0rEMoM1xFCFMdFin8HB87iTBfP%2BYDjWW63Atm0w8Uq8xRmmys8AOuiSiVch5t0wSrcktZhHQEbgOgkmtXdbUjzYV4z3I4GXAV%2BdW%2BheCaMChRxyYAbONzx6eKFp9C3PgnRli%2FgApzWA6GcfJl7x%2B1Vn9gO%2BbfLMeJXP%2BKZ2of0YOFPLwLHPqwTJ2jafjy9eJgwfyW0BYZHBE3zMjIFgakDgqK6s4RLdv0gfS7gUH2IRyFoItmRGOzQYeKf8JwBdXXY9bynmVB1dFhabSDI5l4cBzzP8jEyn4F5e6dEBZuQAfJgfmdRXgAVQ5gzb6OJk%2F7sqG2AAGAjJB88Eum%2Bz50%2B%2FCdrYfIrlsQ1zqeLzmGo%2FnkO3DmKbUPaffje1irkwIF66QpCfH%2Bs36P4ixJNRBCZ7MGvZuS3vhzoa%2BvUkGZlPTqBpcnrqq6cSwSsV9SlDchjsaTsZ0IDA3mizs%2BFN6nF0%2B7etfZyFJGL6YAEZQYhleDnFbl3k%2FcCTyUGE%2F4vvTOkEki%2Bb48jQzS5HCIeGNXHf%2BN7neIWMJ3%2F4OcF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190605T223558Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA56ZVLI7RRXERKLE5%2F20190605%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=92877cbc295a547c7d835eaa57fd09e7654e26c1e40534bced003824e2114dc3)
