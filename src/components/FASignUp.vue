<template>
  <div>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <!-- <h1>Hi! {{ msg }}</h1> -->
        <v-card class="card-style">
              <h3 class="headline mb-0">Sign up for FA Planner</h3>
              <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                  label="First Name"
                  v-model="firstName"
                  :rules="firstNameRules"
                  required
                ></v-text-field>
                <v-text-field
                  label="Last Name"
                  v-model="lastName"
                  :rules="lastNameRules"
                  required
                ></v-text-field>
                <v-text-field
                  label="E-mail"
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
                <v-select
                   label="Item"
                   v-model="select"
                   :items="items"
                   :rules="[v => !!v || 'Item is required']"
                   required
                 ></v-select>
                <v-checkbox
                  label="Do you agree?"
                  v-model="checkbox"
                  :rules="[v => !!v || 'You must agree to continue!']"
                  required
                ></v-checkbox>

                <!-- <v-btn round color="primary"
                  href="http://www.google.com"
                  @click="submit"
                  :disabled="!valid"
                >
                  submit
                </v-btn> -->
                <v-btn round color="primary"
                  href="http://www.google.com"
                >
                  submit
                </v-btn>
              </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

import VForm from 'vuetify/es5/components/VForm'

  export default {
    data: () => ({
      valid: true,
      name: '',
      firstNameRules: [
        (v) => !!v || 'First name is required',
      ],
      LastNameRules: [
        (v) => !!v || 'Last name is required',
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'Independent Financial Advisor',
        'Company Financial Advisor',
        'Accountant',
        'Dog Walker'
      ],
      checkbox: false
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            firstName: this.firstName,
            LastName: this.lastName,
            email: this.email,
            select: this.select,
            checkbox: this.checkbox
          })
        }
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-style {
  padding: 40px;
  margin-bottom: 100px;
}
</style>
