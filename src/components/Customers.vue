<template>
<div class="customers container">
  <h1 class="page-header">Manage Customers</h1>
</div>
</template>

<script>
export default {
  name: 'customers',
  data () {
    return {
        customers: []
    }
  },
    methods: {
        // Use vue-resource to interact with the API
        fetchCustomers() {
            this.$http.get('https://swapi.co/api/people/')
                .then(function(response) {
                    console.log(response.body)
                });
        }
    },
    created: function() {
        this.fetchCustomers();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
