<template>
    <div class="headerBar">
        <div>
         
            <ul class="headerGroup">
                   <div>
                <img class="logo" src="@/assets/154-1547479_handyman-logos-for-business-cards-download-handyman.png"/>
            </div>
                <li >
                    <button href="#" class="headerList">
                        <img class="iconImage" src="https://cdn0.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-3/24/5046-512.png"/>
                        <div>
                        <h4 class="headerText">888-888-8888</h4>
                        <h4 class="headerText">Give me a call or send a text</h4>
                       
                    </div>
                    </button>
                </li>
                 <li >
                    <button href="#" class="headerList">
                        <!-- <img class="iconImage" src="https://cdn0.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-3/24/5046-512.png"/> -->
                        <b-icon icon="calendar" class="h1 mb-2"></b-icon>
                        <div>
                        <h4 class="headerText">Get A Quote</h4>
                        <h4 class="headerText">Let me know what you need!</h4>
                       
                    </div>
                    </button>
                </li>
                 <li >
                    <button href="#" class="headerList">
                        <b-icon icon="inbox" class="h1 mb-2"></b-icon>
                        <div>
                        <h4 class="headerText">brettEmail@email.com</h4>
                        <h4 class="headerText">Send me and email</h4>
                  
                    </div>
                    </button>
                </li>
                  <li></li>
                   <li></li>
            </ul>


         </div>  
    </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

Vue.use(BootstrapVueIcons)

export default {
    name: "Header",   


}
</script>

<style>
.headerBar{
    z-index: 3;
    position: sticky;
    top: 0;
    margin-top: -50px;
}

.headerGroup{
    display: flex;
    background-image: url("../assets/abstract-antique-backdrop-background-129731.jpg");
    padding-top: 20px;
    width: 100%;
    padding-bottom: -10px;
    margin-bottom: 0px;
    justify-content: space-around; 
    z-index: 2;
}

.iconImage{
    height: 50px;
    width: 50px;
}
.headerList{
    display: flex;
    height: 80px;
    border-width: .002em;
    border: solid  darkslategray;
    padding: 2px;
    padding-right: 6px;
   background-image: url("../assets/abstract-antique-backdrop-background-129731.jpg");
    align-items: center;
    justify-self: center;
    border-radius: 10px;
    }

.headerList:hover{
    background-color: brown;
     background-image: url();
}

.headerList:hover .headerText{
    color: wheat;
}

.headerText{
    color: darkslategray;
    font-size: .8em;
    margin-left: 5px;
}

.logo{
    width: 200px;
}

.calenderIcon{
    height: 50px;

}
</style>

