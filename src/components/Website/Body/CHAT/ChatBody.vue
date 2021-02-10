<template>
  <keep-alive>
    <b-container fluid class="chat-container">
      <b-row class="chat-wrapper">
        <b-col class="pr-4" xl="3" lg="3" md="12" sm="12" xs="12">
          <ChatSidebarVue
            :getChatList="getChatList"
            :getChatListFetching="getChatListFetching"
          />
        </b-col>
        <b-col class="pl-4" xl="9" lg="9" md="12" sm="12" xs="12">
          <ChatMainVue
            :getChatForm="getChatForm"
            :getChatFormFetching="getChatFormFetching"
          />
        </b-col>
      </b-row>
    </b-container>
  </keep-alive>
</template>

<script>
import ChatMainVue from "./ChatMain.vue";
import ChatSidebarVue from "./ChatSidebar.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ChatBody",
  components: {
    ChatMainVue,
    ChatSidebarVue,
  },
  computed: mapGetters([
    "getChatList",
    "getChatForm",
    "getChatListFetching",
    "getChatFormFetching",
  ]),
  methods: {
    ...mapActions(["ChatPageActions"]),
  },
  created() {
    // if (!this.getWPposts.lendth) {
    //   this.getWPposts();
    // }
    this.ChatPageActions();
  },
};
</script>

<style lang="scss">
.chat-container {
  flex: 1 1 auto;
}
.chat-wrapper {
  padding: 2rem 6rem;
  @media (max-width: 1200px) {
    padding: 2rem 4rem;
  }
  @media (max-width: 1160px) {
    padding: 1rem;
  }
}
</style>
