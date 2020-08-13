<template>
<div class="quoteform">
    <h1>Get a Quote</h1>
  <form class="contact-form" @submit.prevent="submit">
    <label>Name</label>
    <input type="text" 

    name="from_name"
    v-model="form.to_name"
     class="input"
    >
    <br/>
    <label>Email</label>
    <input type="email" 
    name="reply_to"
    v-model="form.reply_to"
     class="input"
    >
     <br/>
    <label class="textAreaLabel">Message</label>
    <textarea name="message"
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

     submit ()  {
        //  var   template_params= {
        // "reply_to": this.email,
        // "name": this.name,
        // "to_name": "to_name_value",
        // "html": this.html
        //     }
      
        event.preventDefault()
        console.log(this.form.message)
        emailjs.send('gmail', 'template_RZenTIyl', {reply_to : this.form.reply_to, html: this.form.message, name: this.form.name }, 'user_MATCgaEeoHw119UWC9Txw')
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