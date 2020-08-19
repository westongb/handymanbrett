<template>
    <div>
        <b-container class="bv-example-row">
            <b-row class="serviceCatagory">
                <b-col class="serviceType1" ><a href="/Services"><div class="serviceText"><h4>Electrical</h4><p class="serviceDesc">Lighting, appliances and outlets</p></div></a></b-col>
                <b-col class="serviceType2"><a href="/Services"><div class="serviceText"><h4>Interior</h4><p class="serviceDesc">A short decription of what is going on</p></div></a></b-col>
                <b-col class="serviceType3"><a href="/Services"><div class="serviceText"><h4>Landscaping</h4><p class="serviceDesc">Get your yard looking the way you want</p></div></a></b-col>
                 <b-col class="serviceType4" ><a href="/Services"><div class="serviceText"><h4>Furnature</h4><p class="serviceDesc">Let us put together your new furnature</p></div></a></b-col>
                <b-col class="serviceType5"><a href="/Services"><div class="serviceText"><h4>Plumbing</h4><p class="serviceDesc">Got issues with your pipes. We can do that.</p></div></a></b-col>
                <b-col class="serviceType6"><a href="/Services"><div class="serviceText"><h4>Odd Jobs</h4><p class="serviceDesc">Not sure how to describe your issue? Let us help.</p></div></a></b-col>
                
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
 background-position: top;
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
    background-position: top;
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
 background-position: top;
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
 background-position: top;
 background-size: auto;
      -webkit-transition: all 0s ease-in-out;
}

.serviceType4:hover .serviceText {
    opacity: 2;

     -webkit-transition: all 0s ease-in-out;
}

.serviceType5 {
    background-image: url("../assets/HM Garbage Disposal Repair.jpg");
    
  background-repeat: no-repeat;
    background-size: 150%;
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
 background-position: top;
      -webkit-transition: all 0s ease-in-out;
}

.serviceType5:hover .serviceText {
    opacity: 2;

     -webkit-transition: all 0s ease-in-out;
}

.serviceType6 {
    background-image: url("../assets/HM towel rack.jpg");
      background-position: center;
      background-size: 150%;
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
 background-position: top;
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
    color: brown;
    opacity: 0;
     position: absolute;
     margin-left: auto;
      text-shadow:2px 2px 10px white;
      font-weight: 900;
}

h4{
    font-size: 110%;
    text-decoration: underline;
    
}

.serviceDesc{
    font-size: 90%;
}

@media only screen and (max-width: 1080px){
    .serviceCatagory{
        display: flex;
        flex-direction: column;
    }
}

</style>