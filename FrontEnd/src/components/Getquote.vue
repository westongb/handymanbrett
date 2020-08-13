<template>
<div class="quoteform">
    <h1>Get a Quote</h1>
  <form class="contact-form" @submit.prevent="sendForm">
    <label>Name</label>
    <input type="text" 
    value= e.target.name
    name="from_name"
    v-model="form.to_name"
     class="input"
    >
    <br/>
    <label>Email</label>
    <input type="email" 
    name="reply_to"
    value= e.target.name
    v-model="form.reply_to"
     class="input"
    >
     <br/>
    <label class="textAreaLabel">Message</label>
    <textarea name="message"
    value= e.target.name
    v-model="form.message"
    class="messageLabel"
    rows="4"
    ></textarea>
     <br/>
    <input type="submit" 
    value="Send"
       
    >
  </form>




  
</div>
</template>

<script>
// import emailjs from 'emailjs-com';
import emailjs from 'emailjs-com';




export default {

     data() {
      return {
        form: {
            to: 'westongb@gmail.com',
             Subject: "Trial Email",
             from_name: "Weston",
            reply_to: "",
            message: "",
            to_name:"",
            html: `<h2> ${this.email} and ${this.Name} </h2>`

        },
      
        }},

    mount:{
        function(){
      emailjs.init(" user_MATCgaEeoHw119UWC9Txw");
   }
    },


  methods: {

     resetform (e)  {
        //  var   template_params= {
        // "reply_to": this.email,
        // "name": this.name,
        // "to_name": "to_name_value",
        // "html": this.html
        //     }
      
        e.preventDefault()
        console.log(e.target)
        emailjs.sendForm('gmail', 'template_RZenTIyl', e.target, 'user_MATCgaEeoHw119UWC9Txw')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }

   }


}

</script>

<style scoped>

.quoteform{
    width: 90%;
    height: 300px;
    margin: auto;
    background-color: wheat;
}

.messageLabel{
    width: 300px;
}
.input{
    width: 300px;
    margin-left: 23px;
}

.textAreaLabel{
    margin-top: -50px;
}

</style>