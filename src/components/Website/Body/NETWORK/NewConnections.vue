<template>
  <b-col class="p-0">
    <NewConnectionItemVue
      v-for="connection in newConnections"
      :key="connection.name"
      :data="connection"
    />
  </b-col>
</template>

<script>
import NewConnectionItemVue from "./NewConnectionItem.vue";
export default {
  name: "NewConnection",
  components: {
    NewConnectionItemVue,
  },
  data() {
    return {
      totalCount: 0,
      newConnections: [
        {
          avatar: "visitor3.png",
          name: "Brandon Wilson",
          position: "Senior UX designer",
          connections: 623,
          message:
            "Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?",
        },
        {
          avatar: "visitor2.png",
          name: "Theresa Steward",
          position: "iOS developer",
          connections: 481,
        },
      ],
      resentConnections: [
        {
          avatar: "visitor5.png",
          name: "Audrey Alexander",
          position: "Team lead at Googler",
        },
        {
          avatar: "visitor4.png",
          name: "Kyle Fisher",
          position: "Product designer at Commandor Corp",
        },
        {
          avatar: "visitor1.png",
          name: "Darlene Black",
          position: "HR-manager, 10 000 connections",
        },
        {
          name: "Eduardo Russell",
          avatar: "visitor6.png",
          position: "Full stack developer at Yandex",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.connections {
  &__title {
    font-weight: 700;
    padding: 10px 0;
  }
  &__wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>