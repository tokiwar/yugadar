<template>
  <div>
    <div class="fixed w-full h-full bg-black-rgba top-0 z-40 left-0 flex items-center justify-center"
         :class="{'hidden' : closed, 'fixed': !closed}"
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
        <div v-if="result" class="w-full text-center  text-black"
             :class="{'text-xl' : $device.isDesktopOrTablet, 'text-lg' : $device.isMobile}" v-html="result"/>
        <form v-else class="w-full flex flex-col mt-2 " @submit.prevent="formSubmit" ref="form">
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
            <label for="email" class="block mb-2 text-gray-900 dark:text-gray-300">Ваш e-mail</label>
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
            <label for="message" class="block mb-2 text-gray-900 dark:text-gray-400">Заказ*</label>
            <textarea
              :class="{'border-red-500' : validation.hasError('message'), 'h-48' : $device.isDesktopOrTablet, 'h-24': $device.isMobile}"
              id="message" rows="4"
              v-model="message"
              class="resize-none block p-2.5 w-full text-gray-900 focus:outline-none bg-gray-50 border border-gray-300 focus:border-black"
              placeholder="Ваша заявка"></textarea>
            <span class="text-xs text-red-500" v-if="validation.hasError('message')">{{
                validation.firstError('message')
              }}</span>
          </div>
          <button type="submit"
                  class="text-black border-2 bg-white border-black hover:bg-black hover:text-white focus:outline-none px-4 py-2 text-center ease-in-out duration-300"
                  :class="{'text-xl' : $device.isDesktopOrTablet, 'text-sm': $device.isMobile}">
            Отправить
          </button>
        </form>
      </div>
    </div>
    <button @click.prevent="close"
            v-show="closed"
            title="Оставить заявку"
            :class="{
              'right-20 bottom-20 bg-yellow-500 hover:bg-yellow-300 p-6 rounded-full shadow-lg hover:shadow-2xl' : $device.isDesktopOrTablet,
              'right-8 bottom-8 bg-yellow-500 rounded-full shadow-lg p-4' : $device.isMobile}"
            class="fixed">
      <svg-icon :class="{'h-20 w-20' : $device.isDesktopOrTablet, 'h-10 w-10' : $device.isMobile}" name="order"/>
    </button>
  </div>
</template>
<script>
import {Validator} from 'simple-vue-validator'
import {mapActions} from "vuex";

export default {
  name: 'RequestForm',
  data: () => ({
    name: '',
    email: '',
    phone: '',
    message: '',
    terms: '',
    result: '',
    closed: true,
  }),
  async mounted() {
    try {
      await this.$recaptcha.init();
    } catch (e) {
      console.error(e);
    }
  },
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
          if (value.length < 3) {
            return 'Не менее 3 символов';
          } else if (value.length > 600) {
            return 'Не более 600 символов';
          }
        } else {
          return 'Это поле необходимо заполнить';
        }
      });
    }
  },
  methods: {
    ...mapActions([
      "toggleOverflow"
    ]),
    reset() {
      this.name = '';
      this.email = '';
      this.message = '';
      this.result = '';
      this.phone = '';
      this.validation.reset();
    },
    close() {
      this.reset();
      this.closed = !this.closed;
      this.toggleOverflow();
    },
    formSubmit() {
      this.$validate().then(async (success) => {
        if (success) {
          const body = {
            name: this.name,
            message: this.message,
            email: this.email,
            phone: this.phone,
          };
          const token = await this.$recaptcha.execute('login');
          if (token) {
            body['token'] = token;
            const res = await this.$axios.$post(
              '/api/request/',
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
