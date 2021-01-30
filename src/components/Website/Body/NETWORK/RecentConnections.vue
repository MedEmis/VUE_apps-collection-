<template>
  <b-col class="p-0 m-0">
    <b-row>
      <RecentConversationItemVue
        v-for="item in recent"
        :key="item.name"
        :data="item"
    /></b-row>
  </b-col>
</template>

<script>
import RecentConversationItemVue from "./RecentConversationItem.vue";
export default {
  name: "RecentConnections",
  components: {
    RecentConversationItemVue,
  },
  data() {
    return {
      recent: [
        {
          avatar: "visitor5.png",
          name: "Audrey Alexander",
          position: "Team lead at Googler",
          date: "Yesterday, 14:30",
        },
        {
          avatar: "visitor4.png",
          name: "Kyle Fisher",
          position: "Product designer at Commandor Corp",
          date: "Yesterday, 12:03",
        },
        {
          avatar: "visitor1.png",
          name: "Darlene Black",
          position: "HR-manager, 10 000 connections",
          date: "26 aug, monday",
        },
        {
          name: "Eduardo Russell",
          position: "Full stack developer at Yandex",
          avatar: "visitor6.png",
          date: "25 aug, sunday",
        },
        {
          name: "Eduardon Russell",
          position: "Full stack developer at Yandex",
          avatar: "visitor6.png",
          date: "25 aug, sunday",
        },
      ],
    };
  },
};
</script>

<style>
</style>