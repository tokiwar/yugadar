<template>
  <div class="fixed w-full h-full bg-black-rgba top-0 z-40 left-0 flex items-center justify-center"
       @click.self="close">
    <div
      class="h-auto opacity-100 relative top-0 left-0 z-50 glassmorphism pt-4 px-10 flex flex-col"
      :class="{'w-136 pb-12' : $device.isDesktopOrTablet, 'w-88 pb-8' : $device.isMobile}">
      <span class="flex justify-end">
        <svg fill="#4b5563" stroke="#f3f4f6" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer"
             @click.prevent="close" :width="$device.isDesktopOrTablet ? 40 : 30"
             :height="$device.isDesktopOrTablet ? 40 : 30" version="1"
             viewBox="0 0 24 24"><path
          d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path></svg>
      </span>
      <div v-if="result" class="w-full text-center font-bold text-black"
           :class="{'text-xl' : $device.isDesktopOrTablet, 'text-lg' : $device.isMobile}" v-html="result"/>
      <form v-else class="w-full flex flex-col mt-2 font-bold" @submit.prevent="formSubmit" ref="form">
        <div :class="{'mb-6 text-base' : $device.isDesktopOrTablet, 'mb-2 text-sm': $device.isMobile}">
          <label for="name" class="block mb-2 text-gray-900 dark:text-gray-300">Ваше имя*</label>
          <input :class="{'border-red-500' : validation.hasError('name')}"
                 type="text" id="name"
                 v-model="name"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-black block w-full p-2.5"
                 placeholder="Иванов Иван Иванович">
          <span class="text-xs text-red-500" v-if="validation.hasError('name')">{{
              validation.firstError('name')
            }}</span>
        </div>
        <div :class="{'mb-6 text-base' : $device.isDesktopOrTablet, 'mb-2 text-sm': $device.isMobile}">
          <label for="message" class="block mb-2 text-gray-900 dark:text-gray-400">Ваш отзыв*</label>
          <textarea
            :class="{'border-red-500' : validation.hasError('message'), 'h-48' : $device.isDesktopOrTablet, 'h-32': $device.isMobile}"
                    id="message" rows="4"
                    v-model="message"
                    class="resize-none block p-2.5 w-full text-gray-900 focus:outline-none bg-gray-50 border border-gray-300 focus:border-black"
                    placeholder="Оставьте отзыв ..."></textarea>
          <span class="text-xs text-red-500" v-if="validation.hasError('message')">{{
              validation.firstError('message')
            }}</span>
        </div>
        <button type="submit"
                class="text-black border-2 bg-white border-black hover:bg-black hover:text-white focus:outline-none font-bold px-4 py-2 text-center ease-in-out duration-300"
                :class="{'text-xl' : $device.isDesktopOrTablet, 'text-sm': $device.isMobile}">
          Отправить отзыв
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import {Validator} from 'simple-vue-validator'

export default {
  name: 'ReviewsForm',
  data: () => ({
    name: '',
    message: '',
    result: '',
  }),
  validators: {
    'name': (value) => {
      return Validator.custom(() => {
        if (!Validator.isEmpty(value)) {
          const valFio = new RegExp(/^[А-ЯЧЁа-ячё\s]*$/u);
          if (!valFio.test(value)) {
            return 'Только кириллица';
          } else if (value.length < 3) {
            return 'Не менее 3 символов';
          } else if (value.length > 300) {
            return 'Не более 300 символов';
          }
        } else {
          return 'Это поле необходимо заполнить';
        }
      });
    },
    'message': (value) => {
      return Validator.custom(() => {
        if (!Validator.isEmpty(value)) {
          if (value.length < 10) {
            return 'Не менее 10 символов';
          } else if (value.length > 600) {
            return 'Не более 600 символов';
          }
        } else {
          return 'Это поле необходимо заполнить';
        }
      });
    },
  },
  async mounted() {
    try {
      await this.$recaptcha.init();
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    reset() {
      this.name = '';
      this.message = '';
      this.result = '';
      this.validation.reset();
    },
    close() {
      if (!this.result) {
        this.$refs.form.reset();
      }
      this.reset();
      this.$emit('close');
    },
    formSubmit() {
      this.$validate().then(async (success) => {
        if (success) {
          const body = {
            name: this.name,
            message: this.message,
          };
          const token = await this.$recaptcha.execute('login');
          if (token) {
            body['token'] = token;
            const res = await this.$axios.$post(
              '/api/review/',
              body
            );
            if (res.result && res.message) {
              this.result = res.message;
            } else {
              this.$refs.form.reset();
              this.reset();
            }
          }
        }
      });
    }
  }
}
</script>
