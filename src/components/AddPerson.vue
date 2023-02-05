<template>
  <!-- <div v-if="showAddNewPersonForm"> -->
    <h2>Add New Person</h2>
    <form v-on:submit.prevent="">
      <div class="form-group">
        <label for="firstname">First Name: </label>
        <input type="text" name="firstname" placeholder="First Name" v-model="form.firstname">
      </div>
      <div class="form-group">
        <label for="lastname">Last Name: </label>
        <input type="text" name="lastname" placeholder="Last Name" v-model="form.lastname">
      </div>
      <div class="form-group">
        <label for="email">Email: </label>
        <input type="text" name="email" placeholder="Email" v-model="form.email">
      </div>
      <div class="form-group">
        <label for="addresse.city">Address.City: </label>
        <input type="text" name="address.city" placeholder="Address.City" v-model="form.address.city">
      </div>
      <div class="form-group">
        <label for="addresse.country">Address.Country: </label>
        <input type="text" name="address.country" placeholder="Address.Country" v-model="form.address.country">
      </div>
      <div>
        <button v-if="showAddNewPersonForm" type="submit" @click="addPerson(person)">Add</button>
        <button v-if="showAddNewPersonForm" type="submit" @click="cancelAddPerson()">Cancel</button>
      </div>
    </form>
  <!-- </div> -->
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AddPerson',

  setup() {
    const form = ref({
      firstname: '',
      lastname: '',
      email: '',
      address: {
        city: '',
        country: ''
      }
    });
    return { form }
  },

  //mounted() { },

  data() {
    return {
      showAddNewPersonForm: true
    }
  },

  methods: {
    addPerson() {
      let newPerson = {
        id: '',
        firstname: '',
        lastname: '',
        email: '',
        address: {
          city: '',
          country: ''
        }
      };
      this.peopleCounter = this.peopleCounter + 1
      newPerson.id = this.peopleCounter
      newPerson.firstname = this.form.firstname
      newPerson.lastname = this.form.lastname
      newPerson.email = this.form.email
      newPerson.address.city = this.form.address.city
      newPerson.address.country = this.form.address.country

      this.people = this.people.concat(newPerson)
    },

    cancelAddPerson() {
      //this.showAddNewPersonForm = false
      //TODO clean
      this.form.firstname = ''
      this.form.lastname = ''
      this.form.email = ''
      this.form.address.city = ''
      this.form.address.country = ''
    }
  }
}
</script> 