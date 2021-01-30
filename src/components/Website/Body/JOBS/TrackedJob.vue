<template>
  <b-col class="bg-white tracked p-4">
    <b-row class="tracked__title pb-4 text-center">
      <b-col class="col-6 p-0 font-weight-bold text-uppercase"
        >Tracked jobs</b-col
      >
    </b-row>
    <hr class="mt-0 mb-2" />
    <b-row class="p-2 tracked__wrapper">
      <b-col class="bg-white tracked__item">
        <TrackedJobItemVue
          v-for="group in getGroup()"
          :key="group.name"
          :data="group"
        />
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import TrackedJobItemVue from "./TrackedJobItem.vue";

export default {
  name: "TrackedJob",
  components: { TrackedJobItemVue },
  data() {
    return {
      tracked: [
        {
          name: "UX/UI Designer",
          employer: "Upwork",
          avatar: "upWork.png",
        },
        {
          name: "Product designer",
          employer: "Facebook",
          avatar: "facebook.png",
        },
      ],
    };
  },
  methods: {
    getGroup() {
      return this.tracked.slice(0, 3);
    },
  },
};
</script>

<style lang="scss" scoped>
.tracked {
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