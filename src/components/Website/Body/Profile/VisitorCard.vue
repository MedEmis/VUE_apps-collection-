<template>
  <b-row class="user-card ml-1" :class="{ unread: $attrs.data.unread }">
    <b-col class="col-2 user-card__image">
      <b-img
        class="user-card__image_img"
        :src="require('@/assets/linkedIn/' + $attrs.data.avatar)"
      />
      <span v-if="$attrs.data.status" class="user-card__image_online">
        <b-icon
          v-if="!$attrs.data.status.isOnline"
          icon="circle"
          scale="0.8"
          variant="success"
        ></b-icon>
        <b-icon
          v-if="$attrs.data.status.isOnline"
          icon="circle-fill"
          variant="success"
        ></b-icon>
      </span>
    </b-col>
    <b-col v-if="$attrs.data.name" class="col-10 user-card__info">
      <b-row class="user-card__info_name">
        {{ $attrs.data.name }}
      </b-row>
      <b-row v-if="$attrs.data.position" class="user-card__info_position">
        {{ $attrs.data.position }}
      </b-row>
      <b-row v-if="$attrs.data.connections" class="user-card__info_views">
        {{ $attrs.data.connections }} connections
      </b-row>
      <b-row v-if="$attrs.data.lastMessage" class="user-card__info_views">
        <b-img
          v-if="$attrs.data.avatarfrom"
          :src="require('@/assets/linkedIn/' + $attrs.data.avatarfrom)"
        />
        {{ $attrs.data.lastMessage }}
      </b-row>
      <b-icon
        v-if="$attrs.data.link"
        class="user-card__info_link"
        icon="chevron-right"
      />
      <b-button
        v-b-tooltip.hover
        v-if="$attrs.data.unread"
        class="user-card__info_unread"
        title="Unread Messge"
        variant="white"
      >
        <b-icon icon="exclamation-circle" scale="0.8" variant="info" />
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "VisitorCardSmall",
};
</script>

<style lang="scss" scoped>
.unread {
  font-weight: 700;
  color: rgb(63, 152, 235);
}
.user-card {
  margin-bottom: 10px;
  position: relative;
  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 60px;
    max-width: 60px;
    height: 60px;
    cursor: pointer;
    &_img {
      position: relative;
      width: 52px;
      height: 52px;
    }
    &_online {
      bottom: 5px;
      right: 5px;
      height: 16px;
      width: 16px;
      line-height: 3px;
      position: absolute;
      background: #fff;
      border-radius: 50%;
    }
  }

  &__info {
    position: relative;
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
    &_link {
      cursor: pointer;
      position: absolute;
      right: 0;
      top: 40%;
    }
    &_position {
      font-size: 10px;
      color: rgb(83, 74, 74);
    }
    &_unread {
      position: absolute;
      z-index: 150;
      right: 0;
      top: -20px;
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