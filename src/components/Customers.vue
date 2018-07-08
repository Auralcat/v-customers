<template>
<div class="customers container">
  <!-- v-bind relays the contents of the alert variable from this component -->
  <Alert v-if="alert" v-bind:message="alert"></Alert>
  <!-- <Alert message="I can pile these as much as I want"></Alert> -->
  <h1 class="page-header">Manage Customers</h1>
  <input class="form-control" name="" type="text" value="" placeholder="Enter Last Name" v-model="filterInput"/>
  <br/>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="customer in filterBy(customers, filterInput)">
        <td>{{customer.first_name}}</td>
        <td>{{customer.last_name}}</td>
        <td>{{customer.phone}}</td>
        <td>{{customer.email}}</td>
        <td>{{customer.address}}</td>
        <td>{{customer.city}}</td>
        <td>{{customer.state}}</td>
        <!-- Using indexOf because SWAPI doesn't have an id field -->
        <td><router-link class="btn btn-default" v-bind:to="'/customer/' + customer.id">View</router-link></td>
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
          alert: '',
          filterInput: '',
        }
    },
    methods: {
        // Use vue-resource to interact with the API
        fetchCustomers() {
            this.$http.get('http://slimapp/api/customers')
                .then(function(response) {
                    console.log(response.body.results);
                    // I removed JSON.parse() because of this error, without that fn it works.
                    // "unexpected character at line 1 column 2 of the JSON data"
                    this.customers = response.body.results;
                });
        },
      filterBy(list, value) {
        return list.filter(function(customer) {
          value = value.charAt(0).toUpperCase() + value.slice(1);
          return customer.last_name.indexOf(value) > -1;
        })
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
