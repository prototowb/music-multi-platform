<template>
  <!-- Registration Form -->
  <div
    style="color: white; padding-left: 10px"
    v-if="reg_show_alert"
    :class="reg_alert_variant"
  >
    {{ reg_alert_msg }}
  </div>
  <vee-form
    id="Register"
    class="registration__form"
    :validation-schema="schema"
    @submit="register"
    :initial-values="userData"
  >
    <!-- Name -->
    <div class="registration__name">
      <label class="registration__name-label">Name</label>
      <vee-field
        type="text"
        name="name"
        class="registration__name-input"
        placeholder="Enter Name"
      />
      <ErrorMessage style="color: red" name="name" />
    </div>
    <!-- Email -->
    <div class="registration__email">
      <label class="registration__email-label">Email</label>
      <vee-field
        type="email"
        name="email"
        class="registration__email-input"
        placeholder="Enter Email"
      />
      <ErrorMessage style="color: red" name="email" />
    </div>
    <!-- Age -->
    <div class="registration__age">
      <label class="registration__age-label">Age</label>
      <vee-field type="number" name="age" class="registration__age-input" />
      <ErrorMessage style="color: red" name="age" />
    </div>
    <!-- Password -->
    <div class="registration__password">
      <label class="registration__password-label">Password</label>
      <vee-field name="password" :bails="false" v-slot="{ field, errors }">
        <input
          class="registration__password-input"
          type="password"
          placeholder="Password"
          v-bind="field"
        />
        <div style="color: red" v-for="error in errors" :key="error">
          {{ error }}
        </div>
      </vee-field>
      <ErrorMessage style="color: red" name="password" />
    </div>
    <!-- Confirm Password -->
    <div class="registration__pwconfirm">
      <label class="registration__pwconfirm-label">Confirm Password</label>
      <vee-field
        type="password"
        name="confirm_password"
        class="registration__pwconfirm-input"
        placeholder="Confirm Password"
      />
      <ErrorMessage style="color: red" name="confirm_password" />
    </div>
    <!-- Country -->
    <div class="registration__country">
      <label class="registration__country-label">Country</label>
      <vee-field as="select" name="country" class="registration__country-input">
        <option value="USA">USA</option>
        <option value="Mexico">Mexico</option>
        <option value="Germany">Germany</option>
        <option value="bnet">BattleNet</option>
      </vee-field>
      <ErrorMessage style="color: red" name="country" />
    </div>
    <!-- TOS -->
    <div class="registration__tos">
      <vee-field
        type="checkbox"
        name="tos"
        value="1"
        class="registration__tos-input"
      />
      <label class="registration__tos-label">Accept terms of service</label>
      <ErrorMessage style="color: red" name="tos" />
    </div>
          <base-button
        form="Register"
        type="submit"
        class="registration__button--submit"
        :disabled="reg_in_submission"
      >
        Register
      </base-button>
  </vee-form>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      schema: {
        name: "required|min:3|max:100|alpha_spaces",
        email: "required|min:3|max:100|email",
        age: "required|min_value:18|max_value:120",
        password: "required|min:6|max:24",
        confirm_password: "passwords_mismatch:@password",
        country: "required|country_excluded:bnet",
        tos: "tos",
      },
      userData: {
        country: "USA",
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: "bg-blue",
      reg_alert_msg: "Please wait - Your account is being created.",
    };
  },
  methods: {
    register(values) {
      this.reg_show_alert = true;
      this.reg_in_submission = true;
      this.reg_alert_variant = "bg-blue";
      this.reg_alert_msg = "Please wait - your account is being created.";

      this.reg_alert_variant = "bg-green";
      this.reg_alert_msg = "Success! Your account has been created.";
      console.log(values);
    },
  },
};
</script>
