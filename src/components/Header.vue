<template>
    <div class = "header">
        the grind never stops
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import _ from 'lodash';

@Component({
  components: {

  },
})

export default class Header extends Vue {
}
</script>


<style scoped>
/* Header */
.header{
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 3;
    background-color: #DB4C3F;

    box-sizing: border-box;
    padding-top: 12px;
    padding-left: 20px;
    font-size: 24px;
    color: #ffffff; 
}
</style>
