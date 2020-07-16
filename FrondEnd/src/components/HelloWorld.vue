<template>
<div class="services">
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
    <h2>Services</h2>
    <div></div>
    <img style="height:200px; object-fit: cover " src="https://images.pexels.com/photos/577513/pexels-photo-577513.jpeg"/>
     <b-button v-b-toggle.collapse-1 variant="primary">Electrical</b-button>
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
  </b-collapse>
   <img style="height:200px; object-fit: cover " src="https://images.pexels.com/photos/67184/pexels-photo-67184.jpeg"/>
   <b-button v-b-toggle.collapse-2 variant="primary">Toggle Collapse</b-button>
  <b-collapse id="collapse-2" class="mt-2">
    <b-card>
      <p class="card-text">Collapse contents Here</p>
      <b-button v-b-toggle.collapse-2-inner size="sm">Toggle Inner Collapse</b-button>
      <b-collapse id="collapse-2-inner" class="mt-2">
        <b-card>Hello!</b-card>
      </b-collapse>
       <div class="serviceBreak"></div>
    </b-card>
  </b-collapse>
    <img style="height:200px; object-fit: cover " src="https://images.pexels.com/photos/279645/pexels-photo-279645.jpeg"/>
   <b-button v-b-toggle.collapse-3 variant="primary">Toggle Collapse</b-button>
  <b-collapse id="collapse-3" class="mt-2">
    <b-card>
      <p class="card-text">Collapse contents Here</p>
      <b-button v-b-toggle.collapse-3-inner size="sm">Toggle Inner Collapse</b-button>
      <b-collapse id="collapse-3-inner" class="mt-2">
        <b-card>Hello!</b-card>
      </b-collapse>
    </b-card>
  </b-collapse>
  <b-button v-b-toggle.collapse-4 variant="primary">Toggle Collapse</b-button>
  <b-collapse id="collapse-4" class="mt-2">
    <b-card>
      <p class="card-text">Collapse contents Here</p>
      <b-button v-b-toggle.collapse-4-inner size="sm">Toggle Inner Collapse</b-button>
      <b-collapse id="collapse-4-inner" class="mt-2">
        <b-card>Hello!</b-card>
      </b-collapse>
    </b-card>
  </b-collapse>
   <b-button v-b-toggle.collapse-5 variant="primary">Toggle Collapse</b-button>
  <b-collapse id="collapse-5" class="mt-2">
    <b-card>
      <p class="card-text">Collapse contents Here</p>
      <b-button v-b-toggle.collapse-5-inner size="sm">Toggle Inner Collapse</b-button>
      <b-collapse id="collapse-5-inner" class="mt-2">
        <b-card>Hello!</b-card>
      </b-collapse>
    </b-card>
  </b-collapse>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
  height: 1000px;

}

</style>
