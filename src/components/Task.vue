<template>
    <div class = "tasklist">
        <div class = "task" v-for= "task in flist" v-bind:key="task.name">
            <div class="taskspacing">
            <input type = "checkbox" @change="completeTask(task)"/>
            <span class = "taskname">{{task.name}}</span>

            <img class = "edit" @click="initialiseEditDialog(task)" src = "../assets/svgs/edit.svg">
            <img class = "delete" @click="deletedialog = task" src = "../assets/svgs/delete.svg">
            <div >     
                <span class = "tag" v-for= "tag in task.tag" v-bind:key="tag">{{tag}}  </span>
            </div>
            </div>
            <hr/>
          
        </div>

        <div class = "addtask" @click="adddialog = true">
            Add Task
        </div>

        <!-- ADD TASK FUNCTIONALITY -->
        <v-dialog :value="adddialog" width="500">
            <v-card>    
                <v-card-title class="headline grey lighten-2" primary-title>
                    Add Task
                </v-card-title>
  
                <v-card-text class="pt-5">
                    Task Name
                    <v-text-field v-model="formtaskname" dense/>
                    Tags
                    <v-combobox v-model="select" :items="tags" multiple chips dense/>
                </v-card-text>
  
                <v-divider/>
  
                <v-card-actions>
                    <v-spacer/>
                    <v-btn color="#DB4C3F" text @click="createTask()">
                        Confirm
                    </v-btn>
                    <v-btn color="#DB4C3F" text @click="cancelDialog()">
                        Cancel
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- EDIT TASK FUNCTIONALITY -->
        <v-dialog :value="editdialog" width="500">
            <v-card>    
                <v-card-title class="headline grey lighten-2" primary-title>
                    Edit Task
                </v-card-title>
  
                <v-card-text class="pt-5">
                    Task Name
                    <v-text-field v-model="editformtaskname" dense/>
                    Tags
                    <v-combobox v-model="editselect" :items="tags" multiple chips dense/>
                </v-card-text>
  
                <v-divider/>
  
                <v-card-actions>
                    <v-spacer/>
                    <v-btn color="#DB4C3F" text @click="editTask()">
                        Confirm
                    </v-btn>
                    <v-btn color="#DB4C3F" text @click="cancelDialog()">
                        Cancel
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- DELETE BUTTON FUNCTIONALITY -->
         <v-dialog :value="deletedialog" width="400">
            <v-card>
                <v-card-text class="black--text pt-5">
                    Are you sure you want to delete this task?
                    {{deletedialog}}
                </v-card-text>
  
                <v-divider/>
  
                <v-card-actions>
                    <v-spacer/>
                <v-btn color="#DB4C3F" text @click="deleteTask(deletedialog)">
                    Yes
                </v-btn>
                <v-btn color="#DB4C3F" text @click="cancelDialog()">
                    No
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import _ from 'lodash';
import { TaskService, indivtask } from '@/services/TaskService';

@Component({
  components: {
  },
})

export default class Task extends Vue { 
    @Prop() readonly flist!: indivtask[];  

    Tasks:indivtask[] = TaskService.Tasks;

    adddialog: indivtask | null = null;
    editdialog: indivtask | null = null;
    deletedialog: indivtask | null = null;

    formtaskname:string = "";
    select:string[] = [];
    tags:string[] = ["Important", "Work"];

    editformtaskname:string = "";
    editselect:string[] = [];

    completeTask(x:indivtask){
        // how to check the checkbox???
        x.done = true;
    }

    createTask(){
        let newTask:indivtask = {
            name: this.formtaskname,
            done: false,
            tag: this.select,
            id: this.Tasks[this.Tasks.length - 1].id + 1,
        };
        TaskService.addTask(newTask);
        this.cancelDialog();
    }

    deleteTask(oldTask:indivtask){
        TaskService.deleteTask(oldTask);
        this.cancelDialog();
    }

    initialiseEditDialog(x:indivtask){
        this.editdialog = x;
        this.editformtaskname = x.name;
        if(this.editselect !== undefined){
            this.editselect = x.tag!;
        }
        //implement id?   
    }

    editTask(x:indivtask){
        console.log(x);
        let something:indivtask = {
            name: this.editformtaskname,
            done: false,
            tag: this.editselect,
            id: 999
            //to be fixed
        };
        this.cancelDialog();
    }

    cancelDialog(){
        this.formtaskname = "";
        this.select=[];
        this.deletedialog = null;
        this.adddialog = null;
        this.editdialog = null;
        this.editformtaskname = "";
        this.editselect=[];
    }
}

</script>

<style scoped>
.tasklist{
    box-sizing: border-box;
    padding-top: 20px;
}

.taskname{
    font-size: 14px;
    margin-left: 10px;
}

.tag{
    font-size: 12px;
    color: #9F9F9F;
}

.taskspacing {
    box-sizing: border-box;
    padding-top: 10px;
    padding-bottom: 10px;
}

.addtask{
    font-size: 14px;
    box-sizing: border-box;
    padding-top: 10px;
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



