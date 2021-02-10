<template>
  <b-col>
    <b-row>
      <b-col class="p-4 bg-white skills">
        <h5 class="skills__title">Skills & Endoresments</h5>
        <b-row class="p-0 skills__wrapper">
          <b-col class="p-0 skills__item" xl="4" lg="6" md="10" sm="10">
            <SkillsEndoresmentItemVue
              name="User experience (UX)"
              :src="getImages('UserExperience')"
            />
          </b-col>
          <b-col class="p-0 skills__item" xl="4" lg="6" md="10" sm="10">
            <SkillsEndoresmentItemVue
              name="User interface (UI)"
              :src="getImages('UserInterface')"
            />
          </b-col>
          <b-col class="p-0 skills__item" xl="4" lg="10" md="10" sm="10">
            <SkillsEndoresmentItemVue
              name="Brand identity"
              :src="getImages('BrandIdentity')"
            />
          </b-col>
        </b-row>
        <div class="skills__link">
          <a class="link-block" href="#">Show all ({{ totalCount }})</a>
        </div>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import SkillsEndoresmentItemVue from "./SkillsEndoresmentItem.vue";

export default {
  name: "SkillsEndoresment",
  components: {
    SkillsEndoresmentItemVue,
  },
  data() {
    return {
      totalCount: 0,
      imgSourse: {
        UserExperience: [
          "smallVisitor1.png",
          "smallVisitor2.png",
          "smallVisitor3.png",
          "smallVisitor4.png",
          "smallVisitor4.png",
          "smallVisitor4.png",
          "smallVisitor4.png",
          "smallVisitor5.png",
          "smallVisitor6.png",
        ],
        UserInterface: [
          "smallVisitor7.png",
          "smallVisitor8.png",
          "smallVisitor9.png",
          "smallVisitor10.png",
          "smallVisitor11.png",
          "smallVisitor12.png",
          "smallVisitor4.png",
        ],
        BrandIdentity: [
          "smallVisitor7.png",
          "smallVisitor3.png",
          "smallVisitor10.png",
          "smallVisitor12.png",
          "smallVisitor4.png",
        ],
      },
    };
  },
  mounted() {
    this.getCount(this.imgSourse);
  },
  methods: {
    getImages(type) {
      return this.imgSourse[type];
    },
    getCount(base) {
      Object.keys(base).forEach((key) => {
        this.totalCount += base[key].length;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.skills {
  &__title {
    font-weight: 700;
    padding: 10px 0;
    &_number {
      font-weight: 400;
      color: #777;
    }
  }
  &__wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  &__item {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    &_name {
      margin-top: 10px;
      font-weight: 700;
    }

    &_description {
      font-size: 12px;
    }
  }

  &__link {
    padding: 20px 0;
  }
}
</style>