<template>
   <div>
            <button  v-on:click.once="filter">submit</button>
   </div>
</template>


<script>
export default {
    
     data:function (){
        return{
            
            services: [],
            serviceList: "",
            serviceType: "Electrical",
            serviceDescription: "",
            serviceName: "",
            serviceTime: "",
            servicePrice: "",
            serviceImg: "",
            queryString: `serviceType=Electrical`
        }
    },

     mounted:
    
    function getServices (){
        fetch(`http://localhost:5000/Servicelist`, {
            method: "GET",
                 }
        ).then(res=> res.json()).then(res => this.services= res)
    },

    method: {
        filter:function getServiceType () {
            return this.services.filter( () => {
                return this.services.ServiceType.valueOf(this.serviceType) 
            })
    }}
}
</script>



<style scoped>
    
</style>