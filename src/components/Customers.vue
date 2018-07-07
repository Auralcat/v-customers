<template>
<div class="customers container">
  <!-- v-bind relays the contents of the alert variable from this component -->
  <Alert v-if="alert" v-bind:message="alert"></Alert>
  <!-- <Alert message="I can pile these as much as I want"></Alert> -->
  <h1 class="page-header">Manage Customers</h1>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>Birth Year</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="customer in customers">
        <td>{{customer.name}}</td>
        <td>{{customer.gender}}</td>
        <td>{{customer.birth_year}}</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
/* Yo dawg, I heard you like components, so I'm importing a component
  inside your component
  */
import Alert from './Alert';
export default {
    name: 'customers',
    data() {
        return {
          customers: [],
          alert: ''
        }
    },
    methods: {
        // Use vue-resource to interact with the API
        fetchCustomers() {
            this.$http.get('https://swapi.co/api/people/')
                .then(function(response) {
                    console.log(response.body.results);
                    // I removed JSON.parse() because of this error, without that fn it works.
                    // "unexpected character at line 1 column 2 of the JSON data"
                    this.customers = response.body.results;
                });
        }
    },
    // These are called hooks
    // CREATED hook
    created: function() {
      if (this.$route.query.alert) {
        this.alert = this.$route.query.alert;
      }
        this.fetchCustomers();
    },
    // UPDATED hook
    updated: function() {
        this.fetchCustomers();
    },
    /* Declare your components */
    components: {
      Alert
    }
}</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
