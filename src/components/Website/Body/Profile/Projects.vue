<template>
  <b-col class="p-0">
    <b-row>
      <b-col class="p-4 bg-white project">
        <h5 class="project__title">
          Projects <span class="project__title_number">3 of 12</span>
        </h5>
        <b-row class="p-0 project__wrapper">
          <b-col class="p-0 project__item" md="3" sm="10">
            <div>
              <b-img
                fluid
                :src="require('../../../../assets/linkedIn/profileProjects1.png')"
                alt="Image 1"
              ></b-img>
              <p class="p-0 project__item_name">Zara redesign concept</p>
              <p class="p-0 project__item_description">
                UX/UI design, 15.07.2019
              </p>
            </div>
          </b-col>
          <b-col class="p-0 project__item" md="3" sm="10">
            <div>
              <b-img
                fluid
                :src="require('../../../../assets/linkedIn/profileProjects2.png')"
                alt="Image 2"
              ></b-img>
              <p class="p-0 project__item_name">SCTHON event brand identity</p>
              <p class="p-0 project__item_description">
                Graphic design, 03.31.2019
              </p>
            </div>
          </b-col>
          <b-col class="p-0 project__item" md="3" sm="10">
            <div>
              <b-img
                fluid
                :src="require('../../../../assets/linkedIn/profileProjects3.png')"
                alt="Image 3"
              ></b-img>
              <p class="p-0 project__item_name">Drozd. Brand identity. 2016</p>
              <p class="p-0 project__item_description">
                Graphic design, 03.04.2016
              </p>
            </div>
          </b-col>
        </b-row>
        <a class="link-block" >Show all (12)</a>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: "Projects",
};
</script>

<style lang="scss" scoped>
.project {
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

  
}
</style>