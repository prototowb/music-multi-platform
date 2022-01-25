<template>
  <teleport to="body">
    <div v-if="show" @click.prevent="tryClose" class="backdrop"></div>
    <transition name="dialog">
    <dialog open v-if="show">
      <header>
        <slot name="header">
        <!--Title-->
        <div class="modal__titlebar">
          <h2>{{ title }}</h2>
          <!-- Modal Close Button -->
          <div class="modal__close" @click.prevent="tryClose">
            <i class="fas fa-times fa-4x"></i>
          </div>
        </div>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
    </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['close'],
  methods: {
    tryClose() {
      if (this.fixed) {
        return;
      }
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
dialog {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 600;
}


.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

header {
  background-image: linear-gradient(240deg,#660066 0%,#28023E 60%);
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

.modal__titlebar {
  display: flex;
  justify-content: space-between;
}

.modal__close {
  cursor: pointer;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.75);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}


.dialog-leave-active {
  transition: all 0.15s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>