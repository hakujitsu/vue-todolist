<template>
  <div class = "main">
      <div class = "taskheader">{{ $route.params.tag }}</div>
      <Task :flist="filteredlst"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Task from '@/components/Task.vue';

@Component({
  components: {
    Task,
  },
})


export default class Tag extends Vue {
  tag:string= "";
  filteredlst:indivtask[] = [];

  mounted(){
    this.tag = this.$route.params.tag;
    this.filteredlst = this.Tasks.filter(x => x.tag != undefined && x.tag.includes(this.$route.params.tag));
  }

  destroyed(){
    this.tag = "";
    this.filteredlst = [];

  }

  Tasks:indivtask[] = [
    {
      name: "Do CVWO Task",
      done: true,
      id: 1,
    },
    {
      name: "Play Celeste",
      done: false,
      tag: ["Important"],
      id: 2
    },
    {
      name: "Sleep",
      done: false,
      id: 3
    }
  ];  
}

export interface indivtask{
    name: string;
    done: boolean;
    tag?: string[];
    date?: Date;
    id: number;
}

export interface indivtag{
        name: string;
}


</script>

<style scoped>
.main{
    box-sizing: border-box;
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 40px;
    background-color: #ffffff;

    overflow: scroll;
}

.taskheader{
    font-size: 20px;
    font-weight: bold;
}

</style>
