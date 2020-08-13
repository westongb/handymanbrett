<template>
    <div>
        <b-container class="bv-example-row">
            <b-row>
                <b-col class="serviceType1" ><a href="/meetBrett"><div class="serviceText"><h4>Service Type1</h4><p class="serviceDesc">A short decription of what is going on</p></div></a></b-col>
                <b-col class="serviceType2"><a href="/meetBrett"><div class="serviceText"><h4>Service type 2</h4><p class="serviceDesc">A short decription of what is going on</p></div></a></b-col>
                <b-col class="serviceType3"><a href="/helloworld"><div class="serviceText"><h4>Service type 3</h4><p class="serviceDesc">A short decription of what is going on</p></div></a></b-col>
                 <b-col class="serviceType4" ><a href="/meetBrett"><div class="serviceText"><h4>Service Type1</h4><p class="serviceDesc">A short decription of what is going on</p></div></a></b-col>
                <b-col class="serviceType5"><a href="/meetBrett"><div class="serviceText"><h4>Service type 2</h4><p class="serviceDesc">A short decription of what is going on</p></div></a></b-col>
                <b-col class="serviceType6"><a href="/helloworld"><div class="serviceText"><h4>Service type 3</h4><p class="serviceDesc">A short decription of what is going on</p></div></a></b-col>
                
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
    background-image: url("../assets/HM light fixture repair.jpg");
    background-size:cover;
  background-repeat: no-repeat;
   background-size: 200%;
   background-position: center;
    height: 150px;
    border-radius: 100px;
    margin: 2%;
    width: 150px;
    align-items: center;
    
}

.serviceType1:hover {
 background-image: url("../assets/abstract-antique-backdrop-background-129731.jpg");
 background-size: auto;
      -webkit-transition: all 0s ease-in-out;
}

.serviceType1:hover .serviceText {
    opacity: 2;

     -webkit-transition: all 0s ease-in-out;
}


.serviceType2 {
    background-image: url("../assets/HM Ikea furnature assembly 2.jpg");
      background-position: center;
    background-size: cover;
  background-repeat: no-repeat;
     background-size: 200%;
    height: 150px;
    border-radius: 205px;
    margin: 20px;
    width: 150px;
    align-items: center;
    
}

.serviceType2:hover {
    background-image: url("../assets/abstract-antique-backdrop-background-129731.jpg");
    background-size: auto;
      -webkit-transition: all 0s ease-in-out;
}

.serviceType2:hover .serviceText {
    opacity: 2;

     -webkit-transition: all 0s ease-in-out;
}


.serviceType3 {
    background-image: url("../assets/HM leaf raking.jpg");
 background-position: center;
 
  background-repeat: no-repeat;
    background-size: 200%;
    height: 150px;
    border-radius: 205px;
    margin: 20px;
    width: 150px;
    align-items: center;

    
}

.serviceType3:hover {
    background-image: url("../assets/abstract-antique-backdrop-background-129731.jpg");
 /* background-image: url(); */
 background-size: auto;
      -webkit-transition: all 0s ease-in-out;
}

.serviceType3:hover .serviceText {
    opacity: 2;

     -webkit-transition: all 0s ease-in-out;
}

.serviceType4 {
    background-image: url("../assets/HMdoor repair.jpg");
        background-position: center;
    background-size: cover;
  background-repeat: no-repeat;
      background-size: 200%;
    height: 150px;
    border-radius: 205px;
    margin: 20px;
    width: 150px;
    align-items: center;

    
}

.serviceType4:hover {
    background-image: url("../assets/abstract-antique-backdrop-background-129731.jpg");
 /* background-image: url(); */
 background-size: auto;
      -webkit-transition: all 0s ease-in-out;
}

.serviceType4:hover .serviceText {
    opacity: 2;

     -webkit-transition: all 0s ease-in-out;
}

.serviceType5 {
    background-image: url("../assets/HM smoke detectors.jpg");
    
  background-repeat: no-repeat;
    background-size: 200%;
    height: 150px;
    border-radius: 205px;
    margin: 20px;
    width: 150px;
    align-items: center;

    
}

.serviceType5:hover {
    background-image: url("../assets/abstract-antique-backdrop-background-129731.jpg");
 /* background-image: url(); */
 background-size: auto;
      -webkit-transition: all 0s ease-in-out;
}

.serviceType5:hover .serviceText {
    opacity: 2;

     -webkit-transition: all 0s ease-in-out;
}

.serviceType6 {
    background-image: url("../assets/HM toilet repair.jpg");
      background-position: center;
      background-size: 200%;
  background-repeat: no-repeat;
  
    height: 150px;
    border-radius: 205px;
    margin: 20px;
    width: 150px;
    align-items: center;

    
}

.serviceType6:hover {
    background-image: url("../assets/abstract-antique-backdrop-background-129731.jpg");
 /* background-image: url(); */
 background-size: auto;
      -webkit-transition: all 0s ease-in-out;
}

.serviceType6:hover .serviceText {
    opacity: 2;

     -webkit-transition: all 0s ease-in-out;
}



.serviceText{
    display: flex;
    flex-direction: column;
    height: 150px;
    width: 75%;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    color: black;
    opacity: 0;
     position: absolute;
     margin-left: auto;
}

h4{
    font-size: 100%;
}

.serviceDesc{
    font-size: 70%;
}



</style>