<template>
  <b-col class="col-12 side-menu p-0">
    <ChatListItemVue
      v-for="item in userMasages"
      :key="item.name"
      :data="item"
      :toggleButton="toggleButton"
    />
  </b-col>
</template>

<script>
import ChatListItemVue from "./ChatListItem.vue";
export default {
  name: "ChatList",
  components: {
    ChatListItemVue,
  },
  data() {
    return {
      userMasages: [
        {
          name: "Darlene Black",
          avatar: "visitor1.png",
          avatarfrom: "user.png",
          lastMessage: "Hey, how is your project?",
          isonline: "1",
        },
        {
          name: "Theresa Steward",
          avatar: "visitor2.png",
          lastMessage: "Hi, Dmitry! I have a work for you. We",
          status: { isOnline: true },
          unread: true,
        },
        {
          name: "Brandon Wilson",
          avatar: "visitor3.png",
          lastMessage: "I am Russian and I am learning Engl",
          status: { isOnline: false },
        },
        {
          name: "Kyle Fisher",
          avatar: "visitor4.png",
          lastMessage: "So, It’s up to you!",
          status: { isOnline: true },
        },
        {
          name: "Audrey Alexander",
          avatar: "visitor5.png",
          avatarfrom: "user.png",
          lastMessage: "When you got it?",
          status: { isOnline: true },
        },
        {
          conference: true,
          avatarfrom: "user.png",
          name: "Design Conference",
          lastMessage: "Can you guys help me with it?",
          names: [
            "visitor1.png",
            "visitor2.png",
            "visitor3.png",
            "visitor4.png",
            "visitor4.png",
          ],
        },
      ],
    };
  },
  methods: {
    toggleButton(event) {
      const buttons = document.querySelectorAll(".side-menu__row");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
      }
      event.target.offsetParent.classList.toggle("active");
    },
  },
};
</script>

<style lang="scss">
.side-menu {
  background: #fff;
  border-radius: 5px;
}
</style>