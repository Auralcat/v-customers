<template>
<div class="customers container">
  <!-- v-bind relays the contents of the alert variable from this component -->
  <Alert v-if="alert" v-bind:message="alert"></Alert>
  <!-- <Alert message="I can pile these as much as I want"></Alert> -->
  <h1 class="page-header">Manage Customers</h1>
  <input class="form-control" name="" type="text" value="" placeholder="Enter Last Name" v-model="filterInput"/>
  <br/>
  <div class="results" v-if="ok">
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
          <!-- Adding view button in the end of table body -->
          <td><router-link class="btn btn-default" v-bind:to="'/customer/' + customer.id">View</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
  <atom-spinner v-else
    :animation-duration="1000"
    :size="60"
    :color="'ff1d5e'" />
</div>
</template>

<script>
/* Yo dawg, I heard you like components, so I'm importing a component
  inside your component
  */
import Alert from './Alert';
import AtomSpinner from '../../node_modules/epic-spinners/src/components/lib/AtomSpinner';

export default {
    name: 'customers',
    data() {
        return {
          customers: [],
          alert: '',
          ok: '',
          filterInput: '',
        }
    },
    methods: {
        // Use vue-resource to interact with the API
        fetchCustomers() {
            this.$http.get('http://slimapp/api/customers')
                .then(function(response) {
                    this.customers = response.body;
                    this.ok = response.ok;
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
      Alert,
      AtomSpinner
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
