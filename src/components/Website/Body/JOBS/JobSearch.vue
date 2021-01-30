<template>
  <b-col class="jobs-form py-4 px-4">
    <h2 class="jobs-form__title">Your dream job is here</h2>
    <hr />
    <b-row>
      <b-col xl="10" lg="10" md="10" sm="12" xs="12">
        <b-form-textarea
          class="jobs-form__textarea"
          placeholder="Search jobs"
        ></b-form-textarea>
      </b-col>
      <b-col xl="2" lg="2" md="2" sm="12" xs="12" class="jobs-form__buttons">
        <b-button variant="white"
          ><input type="file" id="movie-input" style="display: none" />
          <label for="movie-input">
            <b-icon
              icon="sliders"
              scale="1"
              rotate="90"
              variant="secondary"
            /> </label
        ></b-button>
        <b-button variant="primary" class="search-button"
          ><b-icon icon="search" scale="1" variant="white"
        /></b-button>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: "JobSearch",
};
</script>

<style lang="scss" scoped>
.search-button {
  background: var(--blue-background);
}
.jobs-form {
  background: #fff;
  border-radius: 5px;
  &__title {
    font-size: 16px;
    font-weight: 700;
  }

  &__textarea {
    line-height: 20px;
    font-size: 18px;
    border: none;
  }

  &__buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>