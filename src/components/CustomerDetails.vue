<template>
  <div class="details container">
    <router-link to="/">Back</router-link>
    <h1 class="page-header">{{customer.first_name}} {{customer.last_name}}
      <span class="pull-right">
        <router-link class="btn btn-primary" v-bind:to="'/edit/'">Edit</router-link>
        <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">Delete</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-phone" aria-hidden="true">{{customer.phone}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true">{{customer.email}}</span></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item">{{customer.address}}</li>
      <li class="list-group-item">{{customer.city}}</li>
      <li class="list-group-item">{{customer.state}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'customerdetails',
    data() {
      return {
        customer: ''
      }
    },
    /* Replace the API endpoints later with the SlimApp endpoints! */
    methods: {
      fetchCustomer(id) {
        this.$http.get('http://slimapp/api/customer/' + id)
            .then(function(response) {
              console.log("Response: " + JSON.stringify(response.body));
              /* The API is sending an array of customers */
              this.customer = response.body.pop();
              console.log("This customer's name is " + JSON.stringify(this.customer.first_name));
            })
      },
      deleteCustomer(id) {
        console.log("Deleting customer " + id);
        this.$http.delete('http://slimapp/api/customer/delete/' + id)
            .then(function(response) {
              this.$router.push({path: '/', query: {alert: 'Customer Deleted.'}})
            })
      }
    },
    created: function() {
      this.fetchCustomer(this.$route.params.id);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
