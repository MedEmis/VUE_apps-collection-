<template>
  <b-col class="post-form p-4">
    <h2 class="post-form__title">NEW POST</h2>
    <hr />
    <b-row>
      <b-col xl="8" lg="7" md="7" sm="12" xs="12">
        <b-form-textarea
          class="post-form__textarea"
          placeholder="What’s on your mind?"
        ></b-form-textarea>
      </b-col>
      <b-col xl="4" lg="5" md="5" sm="12" xs="12" class="post-form__buttons">
        <b-button variant="white" type="file"
          ><input type="file" id="file-input" style="display: none" />
          <label for="file-input">
            <b-icon icon="paperclip" scale="1" variant="secondary" /> </label
        ></b-button>
        <b-button variant="white"
          ><input type="file" id="image-input" style="display: none" />
          <label for="image-input">
            <b-icon icon="image" scale="1" variant="secondary" /> </label
        ></b-button>
        <b-button variant="white"
          ><input type="file" id="movie-input" style="display: none" />
          <label for="movie-input">
            <b-icon icon="film" scale="1" variant="secondary" /> </label
        ></b-button>
        <b-button variant="primary" style="background: var(--blue-background)"
          ><img src="@/assets/linkedIn/network/send.png" alt=""
        /></b-button>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: "PostForm",
};
</script>

<style lang="scss" scoped>
.post-form {
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
    justify-content: space-between;
    align-items: center;
  }
}
</style>