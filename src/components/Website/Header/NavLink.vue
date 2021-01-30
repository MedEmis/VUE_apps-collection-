<template>
  <router-link
    :to="$attrs.to"
    class="nav-link-item"
    :class="{ active: $attrs.text === $route.name }"
  >
    <b-icon :icon="$attrs.icon" scale="1.5" />
    <div>{{ $attrs.text }}</div>
    <span v-if="$attrs.newMessage" class="nav-link-item__counter">{{
      $attrs.newMessage.length
    }}</span>
  </router-link>
</template>

<script>
export default {
  name: "NavLink",
};
</script>

<style lang="scss" >
.nav-link-item {
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 100%;
  min-width: 20px;
  padding: 5px;
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-weight: 700;
  font-size: calc((2vh + 1vw) / 2);
  text-transform: uppercase;
  position: relative;
  &__counter {
    position: absolute;
    font-size: 10px;
    color: #fff;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    top: 3%;
    right: 33%;
    background: linear-gradient(215.49deg, #ffb75e 5.4%, #ed8f03 93.45%);
  }
  &:hover {
    color: rgb(31, 135, 177);
    border-bottom: 2px solid rgb(31, 135, 177);
  }
  &.active {
    color: rgb(31, 135, 177);
    border-bottom: 2px solid rgb(31, 135, 177);
  }
}
</style>