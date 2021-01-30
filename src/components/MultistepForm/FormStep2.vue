<template>
  <form ref="reference">
    <div class="mb-3">
      <div class="inputblock">
        <span>
          <input
            @blur="validator.password.$touch()"
            type="password"
            class="form-control balloon"
            ref="passwordField"
            :class="passwordStatus(validator)"
            id="password"
            v-model="$attrs.value.password"
          />
          <label for="password" class="form-label">Password</label>
          <!-- rules tips start -->
          <div
            v-if="!validator.password.required"
            class="invalid-profileback"
            v-text="tips.password.required"
          />
          <div
            v-if="!validator.password.minLength"
            class="invalid-profileback"
            v-text="tips.password.length"
          />
          <!-- rules tips end -->
        </span>
      </div>
    </div>

    <div class="mb-3">
      <div class="inputblock">
        <span>
          <input
            @blur="validator.confirmPassword.$touch()"
            type="password"
            class="form-control balloon"
            :class="confirmStatus(validator)"
            id="password-confirm"
            v-model="$attrs.value.confirmPassword"
          />
          <label for="password-confirm" class="form-label">Confirm</label>
          <!-- rules tips start -->
          <div
            v-if="!validator.confirmPassword.required"
            class="invalid-profileback"
            v-text="tips.confirmPassword.required"
          />
          <div
            v-if="
              !validator.confirmPassword.sameAs &&
              validator.confirmPassword.required
            "
            class="invalid-profileback"
            v-text="tips.confirmPassword.sameAs"
          />
          <!-- rules tips end -->
        </span>
      </div>
    </div>

    <div class="d-flex justify-content-around">
      <button @click.prevent="backStepfn" class="btn btn-primary">Back</button>
      <button @click.prevent="togglePasword" class="btn btn-primary">
        Show password
      </button>
      <button
        @click.prevent="nextStepfn"
        :disabled="validator.$invalid"
        class="btn btn-primary"
      >
        Next
      </button>
    </div>
  </form>
</template>

<script>
const tips = {
  password: {
    required: "You must enter password.",
    length: "At least 6 symbols in password.",
  },
  confirmPassword: {
    required: "You must confirm password.",
    sameAs: "Confirn password should be the same as password .",
  },
};
export default {
  name: "FormStep2",
  props: ["nextStepfn", "backStepfn", "validator"],
  data() {
    return {
      tips: tips,
    };
  },
  methods: {
    passwordStatus(validator) {
      return [
        validator.password.$error || !validator.password.minLength
          ? "is-invalid  red-invalid"
          : "",
        validator.password.required && validator.password.minLength
          ? "is-valid  green-valid"
          : "",
      ];
    },
    confirmStatus(validator) {
      return [
        (validator.confirmPassword.$error &&
          !validator.confirmPassword.required) ||
        (validator.confirmPassword.$error && !validator.confirmPassword.sameAs)
          ? "is-invalid  red-invalid"
          : "",
        !validator.confirmPassword.$error &&
        validator.confirmPassword.required &&
        validator.confirmPassword.sameAs
          ? "is-valid  green-valid"
          : "",
      ];
    },
    togglePasword() {
      if (this.$refs.passwordField.type === "password") {
        this.$refs.passwordField.type = "text";
      } else {
        this.$refs.passwordField.type = "password";
      }
    },
  },
};
</script>

<style>
</style>