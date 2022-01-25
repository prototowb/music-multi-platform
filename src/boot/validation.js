import { boot, configure } from 'quasar/wrappers';

import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure as config } from 'vee-validate';
import { required, min, max, alpha_spaces as alphaSpaces, email, min_value as minVal, max_value as maxVal, confirmed, not_one_of as excluded } from '@vee-validate/rules';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.component('VeeForm', VeeForm);
  app.component('VeeField', VeeField);
  app.component('ErrorMessage', ErrorMessage);

  defineRule('required', required);
  defineRule('tos', required);
  defineRule('min', min);
  defineRule('max', max);
  defineRule('alpha_spaces', alphaSpaces);
  defineRule('email', email);
  defineRule('min_value', minVal);
  defineRule('max_value', maxVal);
  defineRule('passwords_mismatch', confirmed);
  defineRule('excluded', excluded);
  defineRule('country_excluded', excluded);

  config({
    generateMessage: (ctx) => {
      const messages = {
        required: `the field ${ctx.field} is required.`,
        min:  `the field ${ctx.field} is too short.`,
        max:  `the field ${ctx.field} is too long.`,
        alpha_spaces:  `the field ${ctx.field} may only contain alphabetical characters, and spaces.`,
        email:  `the field ${ctx.field} must be a valid email.`,
        min_value:  `the field ${ctx.field} is too low.`,
        max_value:  `the field ${ctx.field} is too high.`,
        excluded:  `You are not allowed to use this value for the ${ctx.field} field.`,
        country_excluded: `Due to restrictions, we do not accept users from this location.`,
        passwords_mismatch: `The passwords don't match.`,
        tos: `You must accept the Terms of Service.`,
      };

      const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `The field ${context.field} is invalid.`;

      return message;
    },
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: false,
    validateOnModelUpdate: true,
  });
})
