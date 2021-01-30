<template>
  <b-col class="chat-form p-4">
    <div class="overlay"></div>
    <b-row class="chat-form__title">
      <b-col class="chat-form__title_name" lg="4" md="4" sm="6" xs="12"
        >Chat with
        <span class="text-info">{{ $attrs.chat.chatWith }}</span></b-col
      >
      <b-col class="chat-form__title_last-online" lg="4" md="4" sm="6" xs="12"
        >Last online <span>{{ $attrs.chat.lastOnline }}</span></b-col
      >
      <b-col class="chat-form__title_media" lg="4" md="4" sm="12" xs="12">
        <b-icon
          icon="paperclip"
          scale="1.5"
          variant="info"
          class="mx-2"
        />Shared media ({{ $attrs.chat.media.length }})
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col class="chat-form__body">
        <b-row
          class="d-flex my-2"
          v-for="item in $attrs.chat.messages"
          :key="item.id"
        >
          <OutcomingMessageVue v-if="item.type === 'outcoming'" :data="item" />
          <IncomingMessageVue
            v-if="item.type === 'incoming'"
            :data="item"
            :avatar="$attrs.chat.avatar"
          />
        </b-row>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col xl="10" lg="10" md="10" sm="10" xs="10">
        <b-form-textarea
          class="chat-form__textarea"
          placeholder="Write your message"
        ></b-form-textarea>
      </b-col>
      <b-col xl="2" lg="2" md="2" sm="2" xs="12" class="chat-form__buttons">
        <b-button variant="white" type="file"
          ><input type="file" id="file-input" style="display: none" />
          <label for="file-input">
            <b-icon
              icon="paperclip"
              scale="1.5"
              variant="secondary"
              class="mx-3"
            /> </label
        ></b-button>
        <b-button variant="primary"
          ><img src="@/assets/linkedIn/network/send.png" alt=""
        /></b-button>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import IncomingMessageVue from "./IncomingMessage.vue";
import OutcomingMessageVue from "./OutcomingMessage.vue";
export default {
  name: "ChatForm",
  components: {
    IncomingMessageVue,
    OutcomingMessageVue,
  },
};
</script>

<style lang="scss" scoped>
.chat-form {
  background: #fff;
  border-radius: 5px;
  position: relative;
  &__title {
    text-align: left;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    &_name {
    }
    &_last-online {
      font-weight: 300;
      color: rgb(230, 230, 230);
    }
    &_media {
      text-align: right;
      cursor: pointer;
    }
  }
  &__body {
    height: 60vh;
    overflow: auto;
    @media (max-width: 1525px) {
      padding: 0 2rem;
    }
    @media (max-width: 1083px) {
      padding: 1rem 3rem;
    }
    @media (max-width: 630px) {
      padding: 1rem 3.5rem;
    }
    @media (max-width: 400px) {
      padding: 1rem 3.5rem;
      padding-left: 1rem;
      font-size: 12px;
    }
    @media (max-width: 340px) {
      padding-right: 2rem;
    }
    @media (max-width: 309px) {
      padding-right: 1.3rem;
    }
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
.overlay {
  position: absolute;
  top: 60px;
  left: 0;
  width: 98%;
  height: 100px;
  z-index: 15;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.897),
    rgba(255, 255, 255, 0.781),
    rgba(255, 255, 255, 0.137)
  );
}
</style>