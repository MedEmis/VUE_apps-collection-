<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <img
        alt="Vue"
        src="@/assets/logo.png"
        style="width: 50px; height: 50px"
      />
      <img
        alt="vueBootstrap"
        src="@/assets/vueBootstrap.png"
        style="width: 50px; height: 50px"
      />
      <div
        v-if="$route.name === 'lazyload' && getInfinitePosts.length"
        class="text-white"
      >
        Post: {{ getInfinitePosts.length }}
      </div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-button variant="outline-primary" to="/website" class="route-link"
            >Website</b-button
          >
          <b-button
            variant="outline-primary"
            to="/authorization"
            class="route-link"
            >Authorization_Form</b-button
          >
          <b-button variant="outline-primary" to="/axios" class="route-link"
            >Axios</b-button
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HeaderNavbar",
  computed: mapGetters(["getPaginatedPost", "getInfinitePosts"]),
};
</script>

<style>
.route-link {
  margin: 5px 10px;
}
</style>