<template>
  <aside>
    <b-row class="px-3">
      <b-col class="col-12">
        <b-row class="mb-4"><ChatListVue /> </b-row>
        <b-row class="mb-4"
          ><NewArticleButtonVue text="Start new chat" />
        </b-row>
      </b-col>
    </b-row>
    <b-overlay :show="$attrs.getChatListFetching" no-wrap></b-overlay>
  </aside>
</template>

<script>
import NewArticleButtonVue from "../FEED/NewArticleButton.vue";
import ChatListVue from "./ChatList.vue";

export default {
  name: "ChatSidebar",
  components: { ChatListVue, NewArticleButtonVue },
  data() {
    return {};
  },
};
</script>

<style>
</style>