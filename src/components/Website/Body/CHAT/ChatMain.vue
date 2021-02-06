<template>
  <main>
    <b-row class="profile-main-wrapper px-1">
      <b-col>
        <b-row class="mb-4"><ChatFormVue :chat="chat" /> </b-row>
      </b-col>
    </b-row>
    <b-overlay :show="$attrs.getChatFormFetching" no-wrap></b-overlay>
  </main>
</template>

<script>
import ChatFormVue from "./ChatForm.vue";

export default {
  name: "ChatMain",
  components: { ChatFormVue },
  data() {
    return {
      chat: {
        chatWith: "Kyle Fisher",
        avatar: "visitor4.png",
        lastOnline: "4 hours ago",
        messages: [
          {
            type: "incoming",
            id: 1,
            date: "28.06.2020",
            messages: ["Oh, sh#t! This junior designers!!!!!!!!!!!!!!!!"],
            params: {
              statusRead: true,
              time: "4:29 PM",
            },
          },
          {
            type: "outcoming",
            id: 2,
            date: "29.06.2020",
            messages: [
              "Hi, Kyle. How are you doing? Did you get that job yesterday?",
            ],
            params: {
              statusRead: true,
              time: "4:20 PM",
            },
          },
          {
            type: "incoming",
            id: 3,
            date: "29.06.2020",
            messages: ["Nope, they kicked me out of the office!"],
            params: {
              statusRead: true,
              time: "4:29 PM",
            },
          },
          {
            type: "outcoming",
            id: 4,
            date: "29.06.2020",
            params: {
              statusRead: true,
              time: "4:30 PM",
            },
            messages: [
              "Wow! I can invite you in my new project.  We need a product designer right now!",
              "Wow! I can invite you in my new project. We need a produvite you in my new project. We need a produvite you in my new project. We need a produvite you in my new project. We need a produvite you in my new project. We need a product designer right now!",
            ],
          },
          {
            type: "incoming",
            id: 5,
            date: "29.06.2020",
            messages: [
              "It’ll be great! I need this job, but...It’ll be great! I need this job, but...It’ll be great! I need this job, but...It’ll be great! I need this job, but...It’ll be great! I need this job, but...It’ll be great! I need this job, but...",
              "So, it’s up to you!",
            ],
            params: {
              statusRead: false,
              time: "4:31 PM",
            },
          },
        ],
        media: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      },
    };
  },
};
</script>

<style lang="scss">
</style>