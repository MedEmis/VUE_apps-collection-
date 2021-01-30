
<template>
  <form ref="formOneRef">
    <div class="mb-3">
      <div class="inputblock">
        <span>
          <input
            @input="validator.firstname.$touch()"
            aria-describedby="basic-addon1"
            type="text"
            class="form-control balloon"
            :class="firstNameStatus(validator)"
            id="name"
            v-model="$attrs.value.firstname"
          />
          <label for="name" class="form-label">Name</label>
          <!-- rules tips start -->
          <div
            v-if="!validator.firstname.required"
            class="invalid-profileback"
            v-text="tips.firstName.requred"
          />
          <div
            v-if="!validator.firstname.maxLength"
            class="invalid-profileback"
            v-text="tips.firstName.length"
          />
          <div
            v-if="!validator.firstname.alpha"
            class="invalid-profileback"
            v-text="tips.firstName.symbols"
          />
          <!-- rules tips end -->
        </span>
      </div>
    </div>

    <div class="mb-3">
      <div class="inputblock">
        <span>
          <input
            @input="validator.lastname.$touch()"
            type="text"
            class="form-control balloon"
            :class="lastNameStatus(validator)"
            id="surname"
            v-model="$attrs.value.lastname"
          />
          <label for="surname" class="form-label">Lastname</label>
          <!-- rules tips start -->
          <div
            v-if="!validator.lastname.required"
            class="invalid-profileback"
            v-text="tips.lastName.required"
          />
          <div
            v-if="!validator.lastname.maxLength"
            class="invalid-profileback"
            v-text="tips.lastName.length"
          />
          <div
            v-if="!validator.lastname.alpha"
            class="invalid-profileback"
            v-text="tips.lastName.symbols"
          />
          <!-- rules tips end -->
        </span>
      </div>
    </div>

    <div class="mb-3">
      <div class="inputblock">
        <span>
          <input
            @blur="validator.email.$touch()"
            type="email"
            class="form-control balloon"
            :class="emailStatus(validator)"
            id="email"
            v-model="$attrs.value.email"
          />
          <label for="email" class="form-label">Email</label>
          <!-- rules tips start -->
          <div
            v-if="!validator.email.required"
            class="invalid-profileback"
            v-text="tips.email.required"
          />
          <div
            v-if="!validator.email.email"
            class="invalid-profileback"
            v-text="tips.email.valid"
          />
          <!-- rules tips end -->
        </span>
      </div>
    </div>
    <div class="d-flex justify-content-around">
      <button @click.prevent="$attrs.resetfn" class="btn btn-primary">
        Reset
      </button>
      <button
        @click.prevent="nextStepfn"
        :disabled="validator.$invalid"
        class="btn btn-primary float-right"
      >
        Next
      </button>
    </div>
  </form>
</template>

<script>
const tips = {
  firstName: {
    requred: "You must enter your name.",
    length: "Max symbols number is 40.",
    symbols: "This field cannot contain numeric symbols.",
  },
  lastName: {
    required: "You must enter your surname.",
    length: "Max symbols number is 40.",
    symbols: "This field cannot contain numeric symbols.",
  },
  email: {
    required: " E-mail is required.",
    valid: " E-mail is invalid.",
  },
};
export default {
  name: "FormStep1",
  props: ["nextStepfn", "validator"],
  data() {
    return {
      tips: tips,
    };
  },
  methods: {
    firstNameStatus(validator) {
      return [
        validator.firstname.$error ? "is-invalid red-invalid" : "",
        validator.firstname.required &&
        validator.$anyDirty &&
        validator.firstname.maxLength &&
        validator.firstname.alpha
          ? "is-valid green-valid"
          : "",
      ];
    },
    lastNameStatus(validator) {
      return [
        validator.lastname.$error ? "is-invalid red-invalid" : "",
        validator.lastname.required &&
        validator.lastname.maxLength &&
        validator.lastname.alpha
          ? "is-valid green-valid"
          : "",
      ];
    },
    emailStatus(validator) {
      return [
        validator.email.$error ? "is-invalid red-invalid" : "",
        validator.email.required &&
        validator.email.email &&
        validator.email.$dirty
          ? "is-valid green-valid"
          : "",
      ];
    },
  },
};
</script>

<style >
</style>