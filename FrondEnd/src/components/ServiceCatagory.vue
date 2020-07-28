<template>
    <div>
        <b-container class="bv-example-row">
            <b-row>
                <b-col class="serviceType1" ><a href="/meetBrett"><div class="serviceText"><h4>Service Type1</h4><p class="serviceDesc">A short decription of what is going on</p></div></a></b-col>
                <b-col class="serviceType2"><a href="/meetBrett"><div class="serviceText"><h4>Service type 2</h4><p class="serviceDesc">A short decription of what is going on</p></div></a></b-col>
                <b-col class="serviceType3"><a href="/helloworld"><div class="serviceText"><h4>Service type 3</h4><p class="serviceDesc">A short decription of what is going on</p></div></a></b-col>
                 <b-col class="serviceType1" ><a href="/meetBrett"><div class="serviceText"><h4>Service Type1</h4><p class="serviceDesc">A short decription of what is going on</p></div></a></b-col>
                <b-col class="serviceType2"><a href="/meetBrett"><div class="serviceText"><h4>Service type 2</h4><p class="serviceDesc">A short decription of what is going on</p></div></a></b-col>
                <b-col class="serviceType3"><a href="/helloworld"><div class="serviceText"><h4>Service type 3</h4><p class="serviceDesc">A short decription of what is going on</p></div></a></b-col>
                
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
    background-image: url("../assets/handtools5.jpg");
  background-repeat: no-repeat;
  background-size: 300%;
   background-position: center;
    height: 150px;
    border-radius: 205px;
    margin: 20px;
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
    background-image: url("../assets/johan-godinez-dDYRYivNzbI-unsplash.jpg");
      background-position: center;
  background-repeat: no-repeat;
  background-size: 120%;
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
    background-image: url("../assets/jacek-dylag-Vve7XkiUq_Y-unsplash.jpg");
    
  background-repeat: no-repeat;
  background-size: 120%;
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