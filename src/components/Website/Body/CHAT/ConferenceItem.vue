<template>
  <b-row class="conference-card ml-1">
    <b-col class="col-4 conference-card__image">
      <div
        v-for="item in $attrs.data.names"
        :key="item"
        class="conference-card__image_wraper"
      >
        <b-img
          class="conference-card__image_img"
          :src="require('@/assets/linkedIn/' + item)"
        />
      </div>
    </b-col>
    <b-col v-if="$attrs.data.name" class="col-8 conference-card__info">
      <b-row class="conference-card__info_name">
        {{ $attrs.data.name }}
      </b-row>
      <b-row v-if="$attrs.data.position" class="conference-card__info_position">
        {{ $attrs.data.position }}
      </b-row>
      <b-row v-if="$attrs.data.connections" class="conference-card__info_views">
        {{ $attrs.data.connections }} connections
      </b-row>
      <b-row v-if="$attrs.data.lastMessage" class="conference-card__info_views">
        <b-img
          v-if="$attrs.data.avatarfrom"
          :src="require('@/assets/linkedIn/' + $attrs.data.avatarfrom)"
        />
        {{ $attrs.data.lastMessage }}
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "ConferenceItem",
};
</script>

<style lang="scss" scoped>
.conference-card {
  margin-bottom: 10px;
  &__image {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 60px;
    max-width: 60px;
    height: 60px;
    flex-wrap: wrap;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    &_wraper {
      flex: 1 1 49%;
      overflow: hidden;
    }
    &_img {
      transform: scale(1.3);
      position: relative;
      width: 30px;
      height: 30px;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 20px;
    padding-left: 20px;
    &_name {
      font-weight: 700;
      font-size: 12px;
      text-transform: uppercase;
    }

    &_position {
      font-size: 10px;
      color: rgb(83, 74, 74);
    }
    &_views {
      font-size: 10px;
      font-weight: 500;
      color: rgb(168, 170, 177);
      img {
        margin-right: 10px;
        width: 15px;
        height: 15px;
      }
    }
  }
}
</style>