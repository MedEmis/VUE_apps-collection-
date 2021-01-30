<template>
  <b-row class="job-block bg-white mb-2 p-2">
    <b-col>
      <b-row class="job-block px-2">
        <b-col
          class="job-block__image p-2"
          xl="1"
          lg="1"
          md="12"
          sm="12"
          xs="12"
        >
          <b-img :src="require('@/assets/linkedIn/' + $attrs.data.avatar)" />
        </b-col>
        <b-col
          xl="9"
          lg="9"
          md="12"
          sm="12"
          xs="12"
          class="job-block__info px-4"
        >
          <b-row class="job-block__position">{{ $attrs.data.name }}</b-row>
          <b-row class="job-block__employment">
            <span class="job-block__employment_empoloyer">{{
              $attrs.data.employer
            }}</span>
            <span class="job-block__employment_location">{{
              $attrs.data.location
            }}</span>
          </b-row>
          <b-row class="job-block__description">{{
            $attrs.data.description
          }}</b-row>
          <b-row>
            <span
              v-if="$attrs.data.description.length > 152"
              class="text-overlay"
          /></b-row>
        </b-col>
        <b-col xl="2" lg="2" md="12" sm="12" xs="12" class="job-block__button"
          ><b-button variant="primary">More</b-button></b-col
        >
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "JobSearchItem",
};
</script>

<style lang="scss" scoped>
.text-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: linear-gradient(to bottom, #ffffff42, #ffffff25, #ffffff);
}
.job-block {
  position: relative;
  border-radius: 5px;
  min-height: 115px;
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
  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      padding: 5px 25px;
      background: var(--blue-background);
    }
  }
}
</style>