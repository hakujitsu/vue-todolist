<template>
    <div class = "main">
        <div class = "tagheader">Tags</div>
        <ManageTags/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import _ from 'lodash';
import ManageTags from '@/components/ManageTags.vue';


@Component({
  components: {
      ManageTags
  },
})

export default class Header extends Vue {
}
</script>


<style scoped>
/* Taglist */

.main{
    box-sizing: border-box;
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 40px;
    background-color: #ffffff;

    overflow: scroll;
}

.tagheader{
    font-size: 20px;
    font-weight: bold;
}

</style>