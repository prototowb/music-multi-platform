<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: "/"
    }
  }
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75em 2.5em;
  font: inherit;
  font-weight: 300;
  border: 1px solid #28023E;
  color: #28023E;
  cursor: pointer;
  border-radius: 6px;
  margin-right: 0.5rem;
  display: inline-block;
}

button {
  margin-top: 15px;
  margin-right: 0;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #28023E;
  border-color: #28023E;
  color: #fff;
}

.flat {
  background-color: transparent;
  color: #28023E;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #660066;
  color: #660066;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>
