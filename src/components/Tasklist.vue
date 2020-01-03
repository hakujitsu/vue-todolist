<template>
    <div class = "main">
        <div class = "taskheader">Today</div>
        <Task :flist="Tasks"/>
    </div>
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import _ from 'lodash';
import Task from '@/components/Task.vue';
import { TaskService, indivtask } from '@/services/TaskService'



@Component({
  components: {
      Task
  },
})

export default class Tasklist extends Vue {
    Tasks:indivtask[] = TaskService.Tasks;
}
</script>


<style scoped>
/* Tasklist */

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
