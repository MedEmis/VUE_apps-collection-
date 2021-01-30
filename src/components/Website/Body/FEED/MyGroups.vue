<template>
  <b-col class="bg-white my-group p-4">
    <b-row class="my-group__title pb-4 text-center">
      <b-col class="col-6 p-0 font-weight-bold text-uppercase">my groups</b-col>
      <b-col class="col-6 p-0 font-weight-bold text-uppercase text-primary"
        >Edit list</b-col
      >
    </b-row>
    <hr class="mt-0 mb-2" />
    <b-row class="p-2 my-group__wrapper">
      <b-col class="bg-white my-group__item">
        <GroupItemSmallVue
          v-for="group in getGroup()"
          :key="group.name"
          :data="group"
        />
      </b-col>
    </b-row>
    <a class="font-weight-bold" href="#">Show all ({{ myGroups.length }})</a>
  </b-col>
</template>

<script>
import GroupItemSmallVue from "./GroupItemSmall.vue";
export default {
  name: "MyGroups",
  components: {
    GroupItemSmallVue,
  },
  data() {
    return {
      myGroups: [
        {
          name: "Moscow State Linguistical University",
          avatar: "university.png",
        },
        {
          name: "Digital freelancers group",
          avatar: "Group.png",
        },
        {
          name: "Interaction design association",
          avatar: "interaction.png",
        },
        {
          name: "Interaction design association",
          avatar: "interaction.png",
        },
        {
          name: "Interaction design association",
          avatar: "interaction.png",
        },
        {
          name: "Interaction design association",
          avatar: "interaction.png",
        },
      ],
    };
  },
  methods: {
    getGroup() {
      return this.myGroups.slice(0, 3);
    },
  },
};
</script>

<style lang="scss" scoped>
.my-group {
  border-radius: 5px;

  &__title {
    &_text {
    }

    &_edit {
    }
  }
  &__wrapper {
    padding: 0 10% !important;
  }
  &__item {
  }
}
</style>