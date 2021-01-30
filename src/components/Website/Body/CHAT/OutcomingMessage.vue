<template>
  <b-col class="message col-11">
    <b-row class="message__wrapper">
      <div class="message__body">
        <div
          class="message__body_item"
          v-for="(item, index) in $attrs.data.messages"
          :key="index"
        >
          <div class="poligon" />
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
      </div>
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
    margin-left: 30px;
    @media (max-width: 630px) {
      margin-left: 10px;
    }

    &_item {
      margin-left: 10px;
      position: relative;
      color: #fff;
      text-align: left;
      min-height: 45px;
      min-width: 150px;
      margin-top: 15px;
      display: flex;
      justify-content: flex-start;
      .poligon {
        position: absolute;
        bottom: 0px;
        left: -19px;
        width: 0;
        height: 0;
        border-bottom: 20px solid #0275b1;
        border-left: 20px solid transparent;
      }
    }
    &_text {
      padding: 15px 20px;
      border-radius: 5px 5px 5px 0;
      background: #0275b1;
    }
  }
  &__params {
    color: #999;
    text-align: left;
  }
}
</style>
