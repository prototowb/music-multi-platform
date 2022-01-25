<template>
  <!-- Auth Modal -->
  <auth-modal :show="authModalShow" title="Account" @close="toggleAuthModal">
    <template #default>
      <div class="modal__content">
        <!-- Add margin if you want to see some of the overlay behind the modal-->

        <!-- Tabs -->
        <ul class="modal__tabs">
          <li class="modal__tabs-login">
            <a
              class="modal__tabs-button modal__tabs-button--active"
              href="#"
              @click.prevent="tab = 'login'"
            >
              Login
            </a>
          </li>
          <li class="modal__tabs-register">
            <a
              class="modal__tabs-button"
              href="#"
              @click.prevent="tab = 'register'"
              >Register</a
            >
          </li>
        </ul>
        <app-login-form v-if="tab === 'login'"/>
        <app-register-form v-else />

      </div>
    </template>
  </auth-modal>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import AppLoginForm from './LoginForm.vue';
import AppRegisterForm from './RegisterForm.vue';

export default {
  name: "Auth",
  components: {
    AppLoginForm,
    AppRegisterForm
  },
  data() {
    return {
      tab: 'login',
    };
  },
  computed: {
    ...mapState(["authModalShow"]),
  },
  methods: {
    ...mapMutations(["toggleAuthModal"]),
  },
};
</script>

<style>
.bg-green {
  background-color: lightseagreen;
}

.bg-blue {
  background-color: lightskyblue;
}
</style>
