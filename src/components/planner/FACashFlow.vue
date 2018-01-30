<template>
  <div>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="card-style">
              <h3 class="headline mb-0">Enter Cashflow Information</h3>
              <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                  label="Cashflow"
                  v-model="cashFlow"
                  :rules="cashFlowRules"
                  required
                ></v-text-field>
                <v-select
                   label="Cash Type"
                   v-model="select"
                   :items="items"
                   :rules="[v => !!v || 'Item is required']"
                   required
                 ></v-select>
                 <v-text-field
                   label="Cashflow Description"
                   v-model="cashFlowDescription"
                   :rules="cashFlowDescriptionRules"
                   textarea
                 ></v-text-field>

                <!-- <v-btn round color="primary"
                  @click="submit"
                  :disabled="!valid"
                >
                  add
                </v-btn> -->
                <v-btn round color="primary"
                  href="http://www.google.com"
                >
                  add
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
      cashFlowRules: [
        (v) => !!v || 'First name is required',
      ],
      cashFlowDescriptionRules: [
        (v) => !!v || 'First name is required',
      ],
      select: null,
      items: [
        'Independent Financial Advisor',
        'Company Financial Advisor',
        'Accountant',
        'Dog Walker'
      ]
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            cashFlow: this.cashFlow,
            cashFlowDescription: this.cashFlowDescription,
            select: this.select,
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
