<template>
<div class="services">
  <div class="hello">
    <h2>Services</h2>
    <div></div>
    <!-- <img style="height:200px; object-fit: cover " src="https://images.pexels.com/photos/577513/pexels-photo-577513.jpeg"/>
     <b-button v-b-toggle.collapse-{services.service_name} variant="primary" v-for="item in services" :key="item.service_name">{{services[1].service_name}}</b-button>
  <b-collapse id="collapse-1" class="mt-2">
    <b-card>
      <p class="card-text"></p>
      <div class="serviceDescription">
      <b-button v-b-toggle.collapse-1-inner size="sm">Light Fixtures:</b-button>
      <b-collapse id="collapse-1-inner" class="mt-2">
        <b-card>We will replace your old light fixtures with the new ones you just purchased, no
problems. But if you want to fix a broken fixture, let us take a look and we may be able to repair it.!</b-card>
      </b-collapse>
       <b-button v-b-toggle.collapse-2-inner size="sm">Ceiling Fans:</b-button>
       <b-collapse id="collapse-2-inner" class="mt-2">
        <b-card>Want to save air conditioning costs? We would be happy to install a new ceiling fan that
will provide cooling air in the summer and an even heat in the winter.!</b-card>
      </b-collapse>
       <b-button v-b-toggle.collapse-3-inner size="sm">Light switches:</b-button>
       <b-collapse id="collapse-3-inner" class="mt-2">
        <b-card>Light switches are mechanical devices and they can wear out. We can replace them
and restore when they have failed and need replacement.!</b-card>
      </b-collapse>
       <b-button v-b-toggle.collapse-4-inner size="sm">Toggle Inner Collapse</b-button>
       <b-collapse id="collapse-4-inner" class="mt-2">
        <b-card>Hello!</b-card>
       
      </b-collapse>
       </div>
       <div></div>
    </b-card>
  </b-collapse> -->

  <Electrical/>
  
  </div>
  <!-- <AddServices/> -->
</div>
</template>

<script>

// import AddServices from "./AddService";
import Electrical from './services/Electrical';

export default {
  name: 'Services',
     components: {
          // AddServices,
          Electrical
       },
 data:function (){
        return{
         
            services: [],
            serviceList: null,
            serviceType: "",
            serviceDescription: "",
            serviceName: "",
            serviceTime: "",
            servicePrice: "",
            serviceImg: "",
        }
    },
    // mounted:
    
    // function getServices (){
    //     fetch(`http://localhost:5000/services`, {
    //         method: "GET",
    //              }
    //     ).then(res=> res.json()).then(res => this.services= res)
    // },

   method: function postService (){
        fetch('http://localhost:5000/postservices', {
          method: "Post",
          body: JSON.stringify(
            {
         "serviceType": this.serviceType,
        "serviceName": this.serviceName,
        "job_time": this.serviceTime,
        "price": this.servicePrice,
        "description": this.serviceDescription,
        "img": this.serviceImg

            }
          )
        }).then (res => console.log("service created" +res))
   }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
.services{
  width: 100%;
  padding-left: 15%;
}

.serviceDescription{
  display: flex;
  flex-direction: column;
}



.hello{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70%;
 

}

</style>
