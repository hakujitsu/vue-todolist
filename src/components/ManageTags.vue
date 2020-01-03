<template>
    <div class = "taglist">
        <div class = "task" v-for= "tag in Tags" v-bind:key="tag.name">
            <div class="tagspacing">
            <div class="circle" :style="{'background-color': tag.color}"></div>
            <span class = "tagname">{{tag.name}}</span>

            <img class = "edit" @click="initialiseEditDialog(tag)" src = "../assets/svgs/edit.svg">
            <img class = "delete" @click="deletedialog = tag" src = "../assets/svgs/delete.svg">
            </div>
            <hr/>
          
        </div>

        <div class = "addtag" @click="tagdialog = true">
            Add Tag
        </div>

        {{flist}}

        <!-- ADD TAG FUNCTIONALITY -->
        <v-dialog :value="tagdialog" width="350">
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                    Add Tag
                </v-card-title>
  
                <v-card-text class="pt-5">
                    Tag Name
                    <v-text-field v-model="newtagname" dense></v-text-field>
                    Color
                    <v-combobox v-model="select" :items="colors" dense/>
                </v-card-text>
                    
                <v-card-actions>
                    <v-spacer/>
                    <v-btn color="#DB4C3F" text @click="addTag()">
                        Confirm
                    </v-btn>
                    <v-btn color="#DB4C3F" text @click="cancelDialog()">
                        Cancel
                    </v-btn> 
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- EDIT TASK FUNCTIONALITY -->
        <v-dialog :value="editdialog" width="350">
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                    Edit Tag
                </v-card-title>
  
                <v-card-text class="pt-5">
                    Tag Name
                    <v-text-field v-model="edittagname" dense></v-text-field>
                </v-card-text>
                    
                <v-card-actions>
                    <v-spacer/>
                    <v-btn color="#DB4C3F" text @click="editTag()">
                        Confirm
                    </v-btn>
                    <v-btn color="#DB4C3F" text @click="cancelDialog()">
                        Cancel
                    </v-btn> 
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- DELETE TAG FUNCTIONALITY -->
         <v-dialog :value="deletedialog" width="400">
            <v-card>
                <v-card-text class="black--text pt-5">
                    Are you sure you want to delete this tag?
                </v-card-text>
  
                <v-divider/>
  
                <v-card-actions>
                    <v-spacer/>
                <v-btn color="#DB4C3F" text @click="deleteTag(deletedialog)">
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
import { Component, Vue } from 'vue-property-decorator';
import _ from 'lodash';
import { TagService, indivtag } from '@/services/TagService'
import Tag from '../views/Tag.vue';

@Component({
  components: {
  },
})

export default class ManageTags extends Vue { 
    Tags:indivtag[] = TagService.Tags;

    tagdialog: indivtag | null = null;
    select:string = "";
    colors:string[] = ["Red", "Yellow", "Pink", "Purple", "Blue", "Green"];
    editdialog: indivtag | null = null;
    deletedialog: indivtag | null = null;

    newtagname:string = "";
    edittagname:string = "";

    addTag(){
        TagService.addTag(this.newtagname, this.select);
        this.cancelDialog();
    }

    deleteTag(oldTag:indivtag){
        TagService.deleteTag(oldTag);
        this.cancelDialog();
    }

    initialiseEditDialog(x:indivtag){
        this.editdialog = x;
        this.edittagname = x.name;
    }

    editTag(){
        this.cancelDialog();
    }


    cancelDialog(){
        this.newtagname = "";
        this.tagdialog = null;
        this.newtagname = "";
        this.edittagname = "";
        this.deletedialog = null;
        this.editdialog = null;
        
    }
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
.taglist{
    box-sizing: border-box;
    padding-top: 20px;
}

.tagname{
    font-size: 14px;
    margin-left: 10px;
}

.tag{
    font-size: 12px;
    color: #9F9F9F;
}

.tagspacing {
    box-sizing: border-box;
    padding-top: 10px;
    padding-bottom: 10px;
}

.addtag{
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

/* Others */
.circle {
    box-sizing: border-box;
    display: inline-block;
    background-color: palevioletred;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    margin-right: 5px;
}
</style>



