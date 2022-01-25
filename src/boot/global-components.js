import { boot } from 'quasar/wrappers'

import BaseButton from '../components/ui/BaseButton.vue';
import AuthModal from '../components/ui/AuthModal.vue';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.component('BaseButton', BaseButton);
  app.component('AuthModal', AuthModal);
})
