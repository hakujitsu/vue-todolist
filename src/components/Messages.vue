<template>
  <div class="messages" v-if="messages.lastUpdated">
    <h1>Messages</h1>
    <div v-for="(message, idx) of currMessages" :key="idx">
        <div> {{ message }} </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { messages } from '../services/Message';
import _ from 'lodash';

@Component({
  components: {
  },
})
export default class Messages extends Vue {
    protected messages = messages;
    // Use these getter variables, or otherwise.
    get selectedUserId() {
        // YOUR SOLUTION HERE?
        return '';
    }

    get currMessages() {
        // YOUR SOLUTION HERE?
        return [];
    }
}
</script>
