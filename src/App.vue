<template>
<div id="app">
  <v-app>
    <v-content>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <div class = "container">
      <Header/>
      <Sidebar/>
      <router-view/>
    </div>
    </v-content>
  </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import Tasklist from '@/components/Tasklist.vue';

@Component({
  components: {
      Header,
      Sidebar,
      Tasklist
  },
})

export default class App extends Vue {

}


</script>

<style lang="css">
*{
    font-family: 'Open Sans', sans-serif;
}

body{
    padding: 0px;
    height: 100%;
    width: 100%;
    
}

.container{
    height: 100vh;
    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: 60px auto;
}

hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
