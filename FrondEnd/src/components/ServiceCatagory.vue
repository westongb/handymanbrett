<template>
    <div>
        <b-container class="bv-example-row">
            <b-row>
                <b-col class="serviceType1" ><div class="serviceText"><h4>Meet Your Handyman</h4><p>A short decription of what is going on</p></div></b-col>
                <b-col class="serviceType2"><div class="serviceText"><h4>Customer Reviews</h4><p>A short decription of what is going on</p></div></b-col>
                <b-col class="serviceType3"><div class="serviceText"><h4>Type of service</h4><p>A short decription of what is going on</p></div></b-col>
                
            </b-row>
        </b-container>
    </div>
</template>

:style="{ backgroundImage: `url('${image}')` }"

<script>

require ("../assets/rsz_handyman_brett.jpg");
import serviceImage from "../assets/handtools5.jpg"



export default {
    name: "ServiceCatagory",
     data:function (){
        return{
            // image: brettImage,
            serviceImage: serviceImage,
        }
}
}
</script>

<style>
.serviceType1 {
    background-image: url("../assets/rsz_handyman_brett.jpg");
  background-repeat: no-repeat;
  background-size: 120%;
    height: 300px;
    border-radius: 205px;
    margin: 20px;
    width: 300px;
    align-items: center;
    
}

.serviceType1:hover {
   background-color: blanchedalmond;
 background-image: url();
      -webkit-transition: all 0s ease-in-out;
}

.serviceType1:hover .serviceText {
    opacity: 2;

     -webkit-transition: all .5s ease-in-out;
}


.serviceType2 {
    background-image: url("../assets/johan-godinez-dDYRYivNzbI-unsplash.jpg");
  background-repeat: no-repeat;
  background-size: 120%;
    height: 300px;
    border-radius: 205px;
    margin: 20px;
    width: 300px;
    align-items: center;
    
}

.serviceType2:hover {
    background-color: blanchedalmond;
 background-image: url();
      -webkit-transition: all 0s ease-in-out;
}

.serviceType2:hover .serviceText {
    opacity: 2;

     -webkit-transition: all .5s ease-in-out;
}


.serviceType3 {
    background-image: url("../assets/jacek-dylag-Vve7XkiUq_Y-unsplash.jpg");
  background-repeat: no-repeat;
  background-size: 120%;
    height: 300px;
    border-radius: 205px;
    margin: 20px;
    width: 300px;
    align-items: center;

    
}

.serviceType3:hover {
    background-color: blanchedalmond;
 background-image: url();
      -webkit-transition: all 0s ease-in-out;
}

.serviceType3:hover .serviceText {
    opacity: 2;

     -webkit-transition: all .5s ease-in-out;
}



.serviceText{
    margin-top: 40%;
    align-items: center;
    color: black;
    opacity: 0;
     position: absolute;
}




</style>