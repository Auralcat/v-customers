<template>
  <div class="add container">
    <h1 class="page-header">Add Customer</h1>
    <!-- Customer add form -->
    <form action="" v-on:submit="addCustomer">
      <div class="well">
        <h4>Customer Info</h4>
        <div class="form-group">
          <label for="">First Name</label>
          <input class="form-control" name="" type="text" value="" placeholder="First Name" v-model="customer.first_name" />
        </div>
        <div class="form-group">
          <label for="">Last Name</label>
          <input class="form-control" name="" type="text" value="" placeholder="Last Name" v-model="customer.last_name" />
        </div>
      </div>

      <div class="well">
        <h4>Customer Contact</h4>
        <div class="form-group">
          <label for="">Email</label>
          <input class="form-control" name="" type="email" value="" placeholder="Email" v-model="customer.email" />
        </div>
        <div class="form-group">
          <label for="">Phone</label>
          <input class="form-control" name="" type="phone" value="" placeholder="Phone" v-model="customer.phone" />
        </div>
      </div>

      <div class="well">
        <h4>Customer Location</h4>
        <div class="form-group">
          <label for="">Address</label>
          <input class="form-control" name="" type="text" value="" placeholder="Address" v-model="customer.address" />
        </div>
        <div class="form-group">
          <label for="">City</label>
          <input class="form-control" name="" type="text" value="" placeholder="City" v-model="customer.city" />
        </div>
        <div class="form-group">
          <label for="">State</label>
          <input class="form-control" name="" type="text" value="" placeholder="State" v-model="customer.state" />
        </div>
      </div>
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'add',
    data() {
      return {
        {}
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
