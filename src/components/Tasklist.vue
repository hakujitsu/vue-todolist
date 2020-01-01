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


@Component({
  components: {
      Task
  },
})

export default class Tasklist extends Vue {
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
