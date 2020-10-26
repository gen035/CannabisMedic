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
      <div class="appointment__form">
        <b-form @submit.prevent="submit">
          <b-form-group
            id="input-group-name"
            :label="$t('appointment.fields.name')"
            label-for="name"
          >
            <b-form-input
              id="name"
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
              v-model="form.branch"
              :options="branches"
              required
            />
          </b-form-group>
          <b-form-group
            id="input-group-email"
            :label="$t('appointment.fields.message')"
            label-for="message"
          >
            <b-form-textarea
              id="message"
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
          <button class="button" type="submit">{{ $t('appointment.fields.send') }}</button>
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
  import Button from '~/components/Button';
  export default {
    data() {
      return {
        opened: false,
        branches: this.$store.state.contacts,
        form: {
          honey: "",
          name: "",
          email: "",
          branch: "",
          message: ""
        }
      }
    },
    methods: {
      close() {
        this.opened = false;
      },
      submit() {
        const { name, email, honey, message } = this.form;

        console.log(this.form.branch)
        if(honey === "") {
          this.$axios.$post(`https://formsubmit.co/ajax/gen.migneron@gmail.com`, {
            name,
            email,
            message
          }).then(response => {
            console.log(response)
          }).catch(error => {
            console.log(error)
          })
        }
      },
      toggle() {
        this.opened = !this.opened;
      }
    },
    components: {
      Button
    }
  }
</script>

axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });