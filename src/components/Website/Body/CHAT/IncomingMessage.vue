<template>
  <b-col class="message ml-auto col-11">
    <b-row class="message__wrapper">
      <b-col class="message__body">
        <div
          class="message__body_item"
          v-for="(item, index) in $attrs.data.messages"
          :key="index"
        >
          <div class="message__body_text">{{ item }}</div>
        </div>
        <div class="message__params">
          <b-icon
            icon="check2-all"
            scale="1.3"
            variant="info"
            v-if="$attrs.data.params.statusRead"
          />
          <b-icon
            icon="check2-all"
            scale="1.3"
            variant="muted"
            v-if="!$attrs.data.params.statusRead"
          />
          {{ $attrs.data.params.time }}
        </div>
      </b-col>
      <b-col class="message__body_avatar col-1">
        <b-img :src="require('@/assets/linkedIn/' + $attrs.avatar)" />
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: "IncomingMessage",
};
</script>

<style lang="scss" scoped>
.message {
  &__wrapper {
    min-height: 70px;
    height: auto;
    width: auto;
    min-width: 100px;
  }
  &__body {
    &_item {
      text-align: right;
      min-height: 45px;
      min-width: 150px;
      margin-top: 15px;
      display: flex;
      justify-content: flex-end;
    }
    &_text {
      padding: 15px 20px;
      background: #e9f0f8;
      border-radius: 5px;
    }
    &_avatar {
      margin-top: 15px;
      @media (max-width: 335px) {
        transform: scale(0.5);
		margin-right: 10px;
      }
    }
    @media (max-width: 340px) {
      padding: 0;
    }
  }
  &__params {
    color: #999;
    text-align: right;
  }
}
</style>