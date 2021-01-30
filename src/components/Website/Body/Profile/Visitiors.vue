<template>
  <b-col class=" dashboard">
    <b-row class="dashboard-title"
      ><span class="dashboard-title_text">visitors</span>
      <a class="link-block" href="#">view all</a></b-row
    >
    <VisitorCardVue
      v-for="visitor in visitors"
      :key="visitor.name"
      :data="visitor"
    />
  </b-col>
</template>

<script>
import VisitorCardVue from "./VisitorCard.vue";
export default {
  name: "Vistors",
  components: {
    VisitorCardVue,
  },
  data() {
    return {
      visitors: [
        {
          name: "Darlene Black",
          avatar: "visitor1.png",
          position: "HR-manager, 10 000 connec...",
        },
        {
          name: "Theresa Steward",
          avatar: "visitor2.png",
          position: "iOS developer",
        },
        {
          name: "Brandon Wilson",
          avatar: "visitor3.png",
          position: "Senior UX designer",
        },
        {
          name: "Kyle Fisher",
          avatar: "visitor4.png",
          position: "Product designer at Com...",
        },
        {
          name: "Audrey Alexander",
          avatar: "visitor5.png",
          position: "Team lead at Google",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.dashboard {
  background: #fff;
  padding-bottom: 3rem;
}
.dashboard-title {
  padding: 2rem;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &_text {
    font-weight: 700;
  }
}
</style>