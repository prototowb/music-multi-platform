<template>
  <div
    style="color: white; padding-left: 10px"
    v-if="login_show_alert"
    :class="login_alert_variant"
  >
    {{ login_alert_msg }}
  </div>
  <!-- Login Form -->
  <vee-form
    id="Login"
    class="login__form"
    :validation-schema="loginSchema"
    @submit="login"
  >
    <!-- Email -->
    <div class="login__email">
      <label class="login__email-label">Email</label>
      <vee-field
        type="email"
        name="email"
        class="login__email-input"
        placeholder="Enter Email"
      />
      <ErrorMessage style="color: red" name="email" />
    </div>
    <!-- Password -->
    <div class="login__password">
      <label class="login__password-label">Password</label>
      <vee-field
        type="password"
        name="password"
        class="login__password-input"
        placeholder="Password"
      />
      <ErrorMessage style="color: red" name="password" />
    </div>
    <base-button
      :disabled="login_in_submission"
      form="Login"
      type="submit"
      class="login__button--submit"
      >Login</base-button
    >
  </vee-form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      loginSchema: {
        email: "required|email",
        password: "required",
      },
      login_in_submission: false,
      login_show_alert: false,
      login_alert_variant: "bg-blue",
      login_alert_msg: "logging in. . .",
    };
  },
  methods: {
    login(values) {
      this.loginm_in_submission = true;
      this.login_show_alert = true;
      this.login_alert_variant = "bg-blue";
      this.login_alert_msg = "logging in. . .";

      this.login_alert_variant = "bg-green";
      this.login_alert_msg = "You're now logged in.";
      console.log(values);
    },
  },
};
</script>
