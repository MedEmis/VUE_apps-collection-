<template>
  <header class="header">
    <b-navbar type="light" variant="light" class="col-12 p-0 m-0">
      <b-row class="col-12 m-0 p-0">
        <b-col class="col-1 nav-element linked-logo">
          <a href="#">
            <img src="@/assets/linkedIn/Logo.png" height="46" alt="logo" />
          </a>
        </b-col>
        <b-col
          class="col-xl-4 col-lg-4 col-md-6 col-sm-10 col-12 p-0 nav-element"
        >
          <b-navbar-nav class="nav-block">
            <NavLinkVue to="/website/feed" text="feed" icon="rss" />
            <NavLinkVue to="/website/network" text="network" icon="people" />
            <NavLinkVue to="/website/jobs" text="jobs" icon="bag" />
            <NavLinkVue
              to="/website/chat"
              text="chat"
              icon="chat-left"
              :newMessage="newMessage"
            />
            <NavLinkVue to="/website/notices" text="notices" icon="bell" />
          </b-navbar-nav>
        </b-col>
        <b-col class="col-xl-3 col-lg-3 col-md-5 col-sm-5 col-12 nav-element">
          <SearchBlockVue />
        </b-col>
        <b-col class="col-xl-3 col-lg-3 col-md-11 col-sm-5 col-9 nav-element">
          <UserCardSmallVue
        /></b-col>
        <b-col
          class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-3 other-button nav-element"
        >
          <b-button
            v-b-toggle.collapse-1
            variant="white"
            class="position-relative other-button"
          >
            <b-icon icon="three-dots" aria-hidden="true" />OTHER</b-button
          >
        </b-col>
        <OtherMenuVue />
      </b-row>
    </b-navbar>
  </header>
</template>

<script>
import NavLinkVue from "./NavLink.vue";
import OtherMenuVue from "./OtherMenu.vue";
import SearchBlockVue from "./SearchBlock.vue";
import UserCardSmallVue from "./UserCardSmall.vue";
export default {
  name: "WebsiteHeader",
  components: {
    UserCardSmallVue,
    NavLinkVue,
    SearchBlockVue,
    OtherMenuVue,
  },
  data() {
    return {
      newMessage: [{}, {}],
    };
  },
};
</script>
 
<style lang="scss" scoped>
.nav-element {
  border-left: 1px solid rgb(235, 235, 235);
  border-right: 1px solid rgb(226, 226, 226);
  padding: 1em;
}
.nav-block {
  height: 100%;
  min-width: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.linked-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  min-width: 50px;
}
.other-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>