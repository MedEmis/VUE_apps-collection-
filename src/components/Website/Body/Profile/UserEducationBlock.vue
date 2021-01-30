<template>
  <b-row>
    <b-col>
      <b-row class="experience-block px-2">
        <b-col
          class="experience-block__image p-2"
          xl="1"
          lg="1"
          md="12"
          sm="12"
          xs="12"
        >
          <b-img
            :src="require('@/assets/linkedIn/' + $attrs.data.instituteIcon)"
          />
        </b-col>
        <b-col
          xl="10"
          lg="10"
          md="12"
          sm="12"
          xs="12"
          class="experience-block__info px-4"
        >
          <b-row class="experience-block__position">{{
            $attrs.data.institute
          }}</b-row>
          <b-row class="experience-block__employment">
            <span class="experience-block__employment_empoloyer">{{
              $attrs.data.degree
            }}</span>
          </b-row>
          <b-row class="experience-block__duration">
            <span class="experience-block__duration_date">{{
              $attrs.data.duration
            }}</span>
          </b-row>
          <b-row class="experience-block__description">{{
            $attrs.data.description
          }}</b-row>
        </b-col>
      </b-row>
      <hr v-if="$attrs.number < $attrs.count" />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "UserEducationBlockVue",
};
</script>

<style lang="scss" scoped>
.experience-block {
  &__image {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  &__info {
    @media (max-width: 765px) {
      padding: 0 rem;
    }
  }
  &__position {
    font-weight: 700;
    margin-bottom: 10px;
  }

  &__employment {
    margin-bottom: 5px;
    &_empoloyer {
      font-weight: 500;
      margin-right: 10px;
    }

    &_location {
      font-weight: 300;
      color: rgb(165, 165, 165);
    }
  }

  &__duration {
    margin-bottom: 5px;
    &_date {
      margin-right: 10px;
      color: rgb(156, 156, 156);
    }

    &_duration {
      color: #0275b1;
    }
  }

  &__description {
    word-wrap: wrap;
  }
}
</style>