<template>
    <div class = "sidebar">
            <div class = "default_sidebar">
                <div class = "default_options">
                    <img class = "icon" src = "../assets/svgs/all.svg">
                    <span class = "sb">All</span>
                </div>

                <router-link :to="{name: 'home'}">
                <div class = "default_options">
                    <img class = "icon" src = "../assets/svgs/today.svg">
                    <span class = "sb">Today</span>
                </div>
                </router-link>

                <div class = "default_options">
                    <img class = "icon" src = "../assets/svgs/thisweek.svg">
                    <span class = "sb">This Week</span>
                </div>
            </div>
    
            <div class = "sidebar_tags">
                <router-link :to="{name: 'taglist'}">
                <div class = "sb_tag_title">                   
                    <strong>Tags</strong>                   
                </div>
                </router-link>
                <hr/>

                <div class = "sbtag" v-for= "tag in Tags" v-bind:key="tag.name">
                    <router-link :to="{name: 'Tag', params: {tag: tag.name}}">
                    <div>
                        <div class="circle" :style="{'background-color': tag.color}"></div>
                        {{tag.name}}
                    </div> 
                    </router-link>
                </div>
                
            </div>
        </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import _ from 'lodash';

@Component({
  components: {

  },
})

export default class Sidebar extends Vue {
    Tags:indivtag[] = [
        {
            name: "Important",
            color: "#DC9393",
        },
        {
            name: "Work",
            color: "#A8D8A5",
        }
    ];
}

export interface indivtag{
    name: string;
    color: string;
}
</script>


<style scoped>
/* Sidebar */
.sidebar{
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;

    background-color: #FAFAFA;
    /* border-right: 1px solid rgba(255, 255, 255, 0.3);
    border-width: thin;
    border-color: rgba(255, 255, 255, 0.3); 
    1px solid rgba(255, 255, 255, 0.3) */
} 

.default_sidebar{
    box-sizing: border-box;
    padding-top: 20px;
    padding-left: 20px;
    
    font-size: 14px;
}

.default_options{
    box-sizing: border-box;
    padding-bottom: 10px;
}

.sb{
    box-sizing: border-box;
    padding-left: 5px;
    padding-top: 10px;
}

.icon {
    height: 20px;
    width: auto;
    vertical-align: middle;
}


/* Sidebar – tags */
.sidebar_tags{
    box-sizing: border-box;
    padding-top: 20px;
    padding-left: 20px;
    overflow: scroll;
}

.sb_tag_title{
    font-size: 14px;
    box-sizing: border-box;
    padding-bottom: 10px;
}

.sbtag {
    box-sizing: border-box;
    padding-right: 20px;
    padding-bottom: 10px;
    font-size: 14px;
}

/* Others */

.icon {
    height: 20px;
    width: auto;
    vertical-align: middle;
}

.addtag{
    height: 1em;
    width: auto;
    float: right;
    vertical-align: middle;
    padding-right: 15px;
}

.circle {
    box-sizing: border-box;
    display: inline-block;
    background-color: palevioletred;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    margin-right: 5px;
}

hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    padding-bottom: 10px;
}
</style>
