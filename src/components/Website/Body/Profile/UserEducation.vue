<template>
  <b-col class="p-0">
    <b-row>
      <b-col class="p-4 bg-white">
        <h5 class="experience__title">Education</h5>
        <b-row class="p-0 experience__wrapper">
          <b-col class="p-0">
            <UserEducationBlockVue
              v-for="(item, index) in educationSourse"
              :key="item.position"
              :data="item"
              :number="index + 1"
              :count="educationSourse.length"
            />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import UserEducationBlockVue from "./UserEducationBlock.vue";
export default {
  name: "UserEducation",
  components: {
    UserEducationBlockVue,
  },
  data() {
    return {
      totalCount: 0,
      educationSourse: [
        {
          institute: "Moscow State Linguistic University",
          instituteIcon: "education.png",
          degree:
            "Bachelor's degree Field Of StudyComputer and Information Systems Security/Information Assurance",
          duration: "2013 — 2017",
          description: "Additional English classes and UX profile courses​.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.experience {
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