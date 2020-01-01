<template>
  <Tasklist/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tasklist from '../components/Tasklist.vue';

@Component({
  components: {
      Tasklist,
  },
})

export default class Main extends Vue {

}
</script>
