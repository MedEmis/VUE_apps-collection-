<template>
  <b-col class="bg-white my-searches p-4">
    <b-row class="my-searches__title pb-4 text-center">
      <b-col class="col-6 p-0 font-weight-bold text-uppercase">my searches</b-col>
      <b-col class="col-6 p-0 font-weight-bold text-uppercase text-primary"
        >Edit list</b-col
      >
    </b-row>
    <hr class="mt-0 mb-2" />
    <b-row class="p-2 my-searches__wrapper">
      <b-col class="bg-white my-searches__item">
        <MySearchesItemVue
          v-for="group in getGroup()"
          :key="group.name"
          :data="group"
        />
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import MySearchesItemVue from "./MySearchesItem.vue";

export default {
  name: "MySearches",
  components: {
    MySearchesItemVue,
  },
  data() {
    return {
      mySearch: [
        {
          name: "UX/UI designer",
          location: "Remote",
          plus: 240,
          bell: false,
        },
        {
          name: "Web designer",
          location: "Los-Angeles, CA",
          bell: true,
        },
        {
          name: "Graphic designer",
          location: "Los-Angeles, CA",
          plus: 40,
          bell: true,
        },
        {
          name: "Web designer",
          location: "Los-Angeles, CA",
          bell: true,
        },
      ],
    };
  },
  methods: {
    getGroup() {
      return this.mySearch.slice(0, 3);
    },
  },
};
</script>

<style lang="scss" scoped>
.my-searches {
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