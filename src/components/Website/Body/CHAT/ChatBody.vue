<template>
  <b-container fluid class="chat-container">
    <b-row class="chat-wrapper">
      <b-col class="pr-4" xl="3" lg="3" md="12" sm="12" xs="12">
        <ChatSidebarVue />
      </b-col>
      <b-col class="pl-4" xl="9" lg="9" md="12" sm="12" xs="12">
        <ChatMainVue />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ChatMainVue from "./ChatMain.vue";
import ChatSidebarVue from "./ChatSidebar.vue";
export default {
  name: "ChatBody",
  components: {
    ChatMainVue,
    ChatSidebarVue,
  },
};
</script>

<style lang="scss" >
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