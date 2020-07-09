<template>
    <div>
        <Carousel/>
        <h1>Hello World</h1>
        
    <div id="trial">
        <h1>{{product}}</h1>
    </div>
    </div>


</template>

<script>

import Carousel from "./Carousel";


export default {
    name: "Home",
    components: {
        Carousel
      
    }
   
}



</script>

<style scoped>

</style>