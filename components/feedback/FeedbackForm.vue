<template>
  <div class="fixed w-full h-full bg-black-rgba top-0 z-40 left-0 flex items-center justify-center"
       @click.self="close">
    <div
      class="h-auto opacity-100 relative top-0 left-0 z-50 glassmorphism pt-4 px-10 flex flex-col"
      :class="{'w-136 pb-12' : $device.isDesktopOrTablet, 'w-88 pb-8' : $device.isMobile}">
      <span class="flex justify-end">
        <svg fill="#4b5563" stroke="#f3f4f6" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer"
             @click.prevent="close" :width="$device.isDesktopOrTablet ? 40 : 30"
             :height="$device.isDesktopOrTablet ? 40 : 20" version="1"
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
          <label for="email" class="block mb-2 text-gray-900 dark:text-gray-300">Ваш e-mail*</label>
          <input :class="{'border-red-500' : validation.hasError('email')}"
                 type="text" id="email"
                 v-model="email"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-black block w-full p-2.5"
                 placeholder="name@email.ru">
          <span class="text-xs text-red-500" v-if="validation.hasError('email')">{{
              validation.firstError('email')
            }}</span>
        </div>
        <div :class="{'mb-6 text-base' : $device.isDesktopOrTablet, 'mb-2 text-sm': $device.isMobile}">
          <label for="email" class="block mb-2 text-gray-900 dark:text-gray-300">Ваш телефон*</label>
          <input :class="{'border-red-500' : validation.hasError('phone')}"
                 type="text" id="phone"
                 v-model="phone"
                 v-mask="'+7 (###) ###-##-##'"
                 class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-black block w-full p-2.5"
                 placeholder="+7 (***) ***-**-**">
          <span class="text-xs text-red-500" v-if="validation.hasError('phone')">{{
              validation.firstError('phone')
            }}</span>
        </div>
        <div :class="{'mb-6 text-base' : $device.isDesktopOrTablet, 'mb-2 text-sm': $device.isMobile}">
          <label for="message" class="block mb-2 text-gray-900 dark:text-gray-400">Ваш сообщение*</label>
          <textarea
            :class="{'border-red-500' : validation.hasError('message'), 'h-48' : $device.isDesktopOrTablet, 'h-24': $device.isMobile}"
            id="message" rows="4"
            v-model="message"
            class="resize-none block p-2.5 w-full text-gray-900 focus:outline-none bg-gray-50 border border-gray-300 focus:border-black"
            placeholder="Введите текст ..."></textarea>
          <span class="text-xs text-red-500" v-if="validation.hasError('message')">{{
              validation.firstError('message')
            }}</span>
        </div>
        <div class="flex flex-col items-start"
             :class="{'mb-6 text-base' : $device.isDesktopOrTablet, 'mb-2 text-sm': $device.isMobile}">
          <div class="flex flex-row">
            <div class="flex items-center h-5">
              <input id="terms" v-model="terms" type="checkbox" value="Y"
                     class="w-4 h-4 border border-yellow-300 rounded bg-gray-50 focus:ring-3 focus:ring-yellow-300">
            </div>
            <label for="terms" class="ml-2 font-medium text-gray-900"
                   :class="{'text-sm': $device.isDesktopOrTablet, 'text-xs': $device.isMobile}">Я ознакомлен и согласен
              с <a
                target="_blank" href="/privacy-policy/" class="font-bold hover:underline">«Политикой
                конфиденциальности»</a></label>
          </div>
          <span class="text-xs text-red-500" v-if="validation.hasError('terms')">{{
              validation.firstError('terms')
            }}</span>
        </div>
        <button type="submit"
                class="text-black border-2 bg-white border-black hover:bg-black hover:text-white focus:outline-none font-bold px-4 py-2 text-center ease-in-out duration-300"
                :class="{'text-xl' : $device.isDesktopOrTablet, 'text-sm': $device.isMobile}">
          Отправить
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import {Validator} from 'simple-vue-validator'

export default {
  name: 'FeedbackForm',
  data: () => ({
    name: '',
    email: '',
    phone: '',
    message: '',
    terms: '',
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
    'email': (value) => {
      return Validator.custom(() => {
        if (!Validator.isEmpty(value)) {
          const valEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
          if (!valEmail.test(value)) {
            return 'Пожалуйста, введите корректный адрес электронной почты';
          } else if (value.length > 300) {
            return 'Не более 300 символов';
          }
        } else {
          return 'Это поле необходимо заполнить';
        }
      });
    },
    'phone': (value) => {
      return Validator.custom(() => {
        if (!Validator.isEmpty(value)) {
          const digits = value.replace(/[^0-9]/g, "").substr(1);
          const digitsLength = digits.length;
          if (digitsLength < 10) {
            return 'Введите корректный номер телефона';
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
    'terms': (value) => {
      return Validator.custom(() => {
        if (!value) {
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
      this.email = '';
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
            email: this.email,
            phone: this.phone,
            terms: this.terms
          };
          const token = await this.$recaptcha.execute('login');
          if (token) {
            body['token'] = token;
            const res = await this.$axios.$post(
              '/api/feedback/',
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
