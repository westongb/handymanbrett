<template>

    <div class="site">
          <div class="sitebackground"></div>  
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
    <div>
        <HandyMan class="HandyMan"/>
    </div>
    <div>
        <Reviews/>
    </div>
    <div class="footer">

    </div>
    </div>


</template>

<script>
import HandyMan from "./Brett"
import Carousel from "./Carousel";
import ServiceCatagory from "./ServiceCatagory";
import Reviews from "./Reviews";

export default {
    name: "Home",
    components: {
        Carousel,
        ServiceCatagory,
        HandyMan,
        Reviews
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
    color: black;
    z-index: 3;
}

.sectionSpace{
    height: 100px;
}

.site{

    
}

.sitebackground{
    top: 0;
    left: 0;
    width: 100%;
    height: 1200px;
    position: absolute;
    background-color: rgba(245, 244, 244, 0.5);
    z-index: 0;
}

.footer{
     background-image: url("../assets/abstract-antique-backdrop-background-129731.jpg");
     height: 100px;
}

</style>