<template>
  <div class="details container">
    <h1 class="page-header">{{customer.name}}</h1>
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
    methods: {
      fetchCustomer(id) {
        this.$http.get('https://swapi.com/people/' + id + '/')
            .then(function(response) {
              this.customer = response.body;
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
