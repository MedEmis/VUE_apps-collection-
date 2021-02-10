<template>
  <b-col>
    <b-row>
      <b-col class="p-4 bg-white">
        <h5 class="experience__title">Experience</h5>
        <b-row class="p-0 experience__wrapper">
          <b-col class="p-0">
            <UserExperienceBlockVue
              v-for="(item, index) in exerienceSourse"
              :key="item.position"
              :data="item"
              :number="index + 1"
              :count="exerienceSourse.length"
            />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import UserExperienceBlockVue from "./UserExperienceBlock.vue";
export default {
  name: "UserExperience",
  components: {
    UserExperienceBlockVue,
  },
  data() {
    return {
      totalCount: 0,
      exerienceSourse: [
        {
          position: "Freelance UX/UI designer",
          empoloyer: "Self Employed",
          empoloyerIcon: "frelance.png",
          location: "Around the world",
          date: "Jun 2016 — Present",
          duration: "3 yrs 3 mos",
          description:
            "Work with clients and web studios as freelancer.  Work in next areas: eCommerce web projects; creative landing pages;  iOs and Android apps; corporate web sites and corporate identity sometimes.",
        },
        {
          position: "UX/UI designer",
          empoloyer: "Upwork",
          empoloyerIcon: "upWork.png",
          location: "International",
          date: "Jun 2019 — Present",
          duration: "3 mos",
          description:
            "New experience with Upwork system. Work in next areas: UX/UI design, graphic design, interaction design, UX research.",
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