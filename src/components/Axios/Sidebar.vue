<template>
  <div>
    <b-button class="post-options" v-b-toggle.sidebar-backdrop rounded
      >Options</b-button
    >
    <b-sidebar
      id="sidebar-backdrop"
      title="Sidebar with backdrop"
      :backdrop-variant="variant"
      backdrop
      shadow
      bg-variant="dark"
    >
      <div class="px-3 py-2">
        <b-button block size="lg" to="/axios/lazyload"
          >Posts Infinite Scroll</b-button
        >
      </div>
      <div class="px-3 py-2">
        <b-button block size="lg" to="/axios/pagination"
          >Posts pagination</b-button
        >
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      variant: "dark",
    };
  },
};
</script>
<style scoped>
.post-options {
  position: fixed;
  bottom: 100px;
  left: 0;
  z-index: 15;
  font-size: 20px;
  color: #fff;
}
</style>