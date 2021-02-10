<template>
  <b-col class="post-form p-4">
    <h2 class="post-form__title">NEW POST</h2>
    <hr />
    <b-form @submit="onSubmit">
      <b-row>
        <b-col xl="8" lg="7" md="7" sm="12" xs="12">
          <b-form-textarea
            class="post-form__textarea"
            placeholder="What’s on your mind?"
            v-model="postBody.acf.text"
          ></b-form-textarea>
        </b-col>
        <b-col xl="4" lg="5" md="5" sm="12" xs="12" class="post-form__buttons">
          <b-button variant="white"
            ><input
              type="file"
              @change="fileHandler"
              multiple
              id="file-input"
              style="display: none"
            />
            <label for="file-input">
              <b-icon icon="paperclip" scale="1" variant="secondary" />
            </label>
            {{
              postBody.acf.attachment.length
                ? postBody.acf.attachment.length
                : null
            }}</b-button
          >
          <b-button variant="white"
            ><input
              type="file"
              multiple
              accept=".jpg, .jpeg, .png, .webp"
              @change="imageHandler"
              id="image-input"
              style="display: none"
            />
            <label for="image-input">
              <b-icon icon="image" scale="1" variant="secondary" />
            </label>
            {{
              postBody.acf.image.length ? postBody.acf.image.length : null
            }}</b-button
          >
          <b-button variant="white"
            ><input
              type="file"
              multiple
              accept=".mp4, .avi"
              @change="movieHandler"
              id="movie-input"
              style="display: none"
            />
            <label for="movie-input">
              <b-icon icon="film" scale="1" variant="secondary" />
            </label>
            {{
              postBody.acf.movie.length ? postBody.acf.movie.length : null
            }}</b-button
          >
          <b-button
            variant="primary"
            type="submit"
            style="background: var(--blue-background)"
            ><img src="@/assets/linkedIn/network/send.png" alt=""
          /></b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-col>
</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      postBody: {
        title: "custom_acf",
        content: "custom_acf",
        status: "publish",
        acf: {
          title: "none",
          attachment: [],
          author: "Dmitry Kargaev",
          avatar:
            "https://headlesswordpress2021.000webhostapp.com/wp-content/uploads/2021/02/userBig.png",
          comments: 0,
          image: [],
          movie: [],
          likes: 0,
          position: "UX/UI designer",
          text: "",
          status: "publish",
        },
      },
    };
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$attrs.createPostRequest(this.postBody);
    },
    imageHandler(event) {
      this.postBody.image = [null];
      for (var i = 0; i < event.target.files.length; i++) {
        this.postBody.image[i] = event.target.files[i];
      }
    },
    fileHandler(event) {
      this.postBody.attachment = [null];
      for (var i = 0; i < event.target.files.length; i++) {
        this.postBody.attachment[i] = event.target.files[i];
      }
    },
    movieHandler(event) {
      this.postBody.movie = [null];
      for (var i = 0; i < event.target.files.length; i++) {
        this.postBody.movie[i] = event.target.files[i];
      }
    },
  },
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
    align-items: flex-end;
  }
}
</style>