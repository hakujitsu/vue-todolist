<template>
  <div class = "main">
      <div class = "taskheader">{{ $route.params.tag }}</div>
      <Task :flist="filteredlst"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Task from '@/components/Task.vue';
import { TaskService, indivtask } from '@/services/TaskService'

@Component({
  components: {
    Task,
  },
})

export default class Tag extends Vue {
  tag:string= "";
  filteredlst:indivtask[] = [];

  @Watch('$route.params.tag') onTagChanged(val: string, oldVal: string){
    this.tag = this.$route.params.tag;
    this.filteredlst = this.Tasks.filter(x => x.tag != undefined && x.tag.includes(this.tag));
  }

  @Watch('Tasks') onTasksChanged(val: indivtask[], oldVal: indivtask[]){
    this.tag = this.$route.params.tag;
    this.filteredlst = this.Tasks.filter(x => x.tag != undefined && x.tag.includes(this.tag));
  }

  mounted(){
    this.tag = this.$route.params.tag;
    this.filteredlst = this.Tasks.filter(x => x.tag != undefined && x.tag.includes(this.tag));
  }
  
  Tasks:indivtask[] = TaskService.Tasks;  
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
