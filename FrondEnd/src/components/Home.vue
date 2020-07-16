<template>
    <div>
        <Carousel/>
    <div class="description">
        <h1>Hello World</h1>
        <h4>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
             not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h4>
    </div>   
    <div class="sectionSpace"></div>
        <ServiceCatagory/>
    <div id="trial">
        <h1>{{product}}</h1>
    </div>
    </div>


</template>

<script>

import Carousel from "./Carousel";
import ServiceCatagory from "./ServiceCatagory";

export default {
    name: "Home",
    components: {
        Carousel,
        ServiceCatagory
    }
       
    
   
}



</script>

<style scoped>
.description{
    display: flex;
    flex-direction: column;
    height: 300px;
    padding-top: 50px;
    margin-left: 10%;
    width: 80%;
    justify-content: center;
}

.sectionSpace{
    height: 100px;
}


</style>