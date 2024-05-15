<template>
  <div>
    <div class="appointment__tab" v-on:click="toggle">
      {{ $t('appointment.tab') }}
    </div>
    <div class="appointment" :class="{'is-opened' : opened}">
      <div class="appointment__close" v-on:click="close">
        <i class="fas fa-times-circle"></i>
      </div>
      <div class="appointment__title">
        {{ $t('appointment.title') }}
      </div>
      <div v-if="!error && !success" class="appointment__form">
        <b-form @submit.prevent="submit">
          <b-form-group
            id="input-group-name"
            :label="$t('appointment.fields.name')"
            label-for="name"
          >
            <b-form-input
              id="name"
              name="name"
              v-model="form.name"
              type="text"
              required
              :placeholder="$t('appointment.fields.name')"
            />
          </b-form-group>
          <b-form-group
            id="input-group-email"
            :label="$t('appointment.fields.email')"
            label-for="email"
          >
            <b-form-input
              id="email"
              name="email"
              v-model="form.email"
              type="email"
              required
              :placeholder="$t('appointment.fields.email')"
            />
          </b-form-group>
           <b-form-group	
            id="input-group-branch"	
            :label="$t('appointment.fields.branches')"	
            label-for="input-branch"
          >	
            <b-form-select	
              id="input-branch"	
              name="branch"
              v-model="form.branch"
              :options="getContacts"
              required	
            />
          </b-form-group>
          <b-form-group
            id="input-group-message"
            :label="$t('appointment.fields.message')"
            label-for="message"
          >
            <b-form-textarea
              id="message"
              name="message"
              v-model="form.message"
              :placeholder="$t('appointment.fields.message')"
              rows="3"
            />
          </b-form-group>
          <b-form-input
            id="input-honey"
            type="text"
            v-model="form.honey"
            style="display: none;"
          />
          <button class="button" type="submit" :class="{'is-disabled' : submitting}">{{ $t('appointment.fields.send') }}</button>
        </b-form>
      </div>
      <div class="appointment__message" v-if="error">
        {{$t('appointment.error')}}
        <i class="fas fa-exclamation-triangle"></i>
        <div class="appointment__message--btn" v-on:click="error = false">{{ $t('appointment.tryagain') }}</div>
      </div>
      <div class="appointment__message" v-if="success">
        {{$t('appointment.success')}}
        <i class="fas fa-check-circle"></i>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from "vuex";
  import axios from 'axios';
  import Button from '~/components/Button';
  import emailjs from 'emailjs-com';

  export default {
    data() {
      return {
        error: false,
        success: false,
        opened: false,
        submitting: false,
        form: {
          honey: "",
          name: "",
          email: "",
          message: "",
          branch: ""
        }
      }
    },
    methods: {
      close() {
        this.opened = false;
      },
      submit(e) {
        const { honey } = this.form;
        const serviceId = this.$store.state.settings.emailjs_service_id;
        const templateId = this.$store.state.settings.emailjs_template_id;
        const userId = this.$store.state.settings.emailjs_user_id;

        if(honey === "") {
          this.submitting = true;
          emailjs.sendForm(serviceId, templateId, e.target, userId)
            .then((result) => {
              this.error = false;
              this.submitting = false;
              this.showSuccess();
            }, (error) => {
              console.log('FAILED:', error);
              this.success = false;
              this.submitting = false;
              this.error = true;
            });
        }
      },
      reset() {
        this.form = {
          honey: "",
          name: "",
          email: "",
          message: "",
          branch: ""
        };
        this.success = false;
      },
      showSuccess() {
        this.success = true;
        setTimeout(() => {
          this.close();
          this.reset();
        }, 1500);
      },
      toggle() {
        this.opened = !this.opened;
      }
    },
    components: {
      Button
    },
    computed: {
    ...mapGetters([
      'getContacts'
    ])
  },
  }
</script>
