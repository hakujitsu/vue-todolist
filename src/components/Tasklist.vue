<template>
    <div class = "main">
        <div class = "taskheader">Today</div>
        <Task/>
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

.tasklist{
    box-sizing: border-box;
    padding-top: 20px;
}

.taskname{
    font-size: 14px;
}

.tag{
    font-size: 12px;
    color: #9F9F9F;
}

.addtask{
    font-size: 14px;
    color: #696969;
}

.edit{
    float: right;
    height: 17px;
    width: auto;
    vertical-align: middle;
    fill: #9F9F9F;
    padding-right: 10px;
}

.delete{
    float:right;
    height: 20px;
    width: auto;
    vertical-align: middle;
    fill: #9F9F9F;
}
</style>
