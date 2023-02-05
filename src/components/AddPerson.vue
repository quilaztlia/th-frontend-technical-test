<template>
  <h2>Add New Person</h2>
  <form v-on:submit.prevent="">
    <div class="form-group">
      <label for="firstname">First Name*: </label>
      <input type="text" name="firstname" placeholder="First Name" v-model="form.firstname">
    </div>
    <div class="form-group">
      <label for="lastname">Last Name*: </label>
      <input type="text" name="lastname" placeholder="Last Name" v-model="form.lastname">
    </div>
    <div class="form-group">
      <label for="email">Email*: </label>
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
      <!-- v-if="" -->
      <button  type="submit" @click="addPerson(person)">Add</button>
      <button type="submit" @click="cancelAddPerson()">Cancel</button>
    </div>
  </form>
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
      showAddNewPersonForm: true,
      validPerson: false
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
      this.peopleCounter = this.$store.state.peopleCounter

      newPerson.id = this.$store.state.peopleCounter + 1
      newPerson.firstname = this.form.firstname
      newPerson.lastname = this.form.lastname
      newPerson.email = this.form.email
      newPerson.address.city = this.form.address.city
      newPerson.address.country = this.form.address.country
      
      this.validPerson = newPerson.firstname.length > 0 &&
        newPerson.lastname.length > 0 &&
        newPerson.email.length > 0

      if (this.validPerson) {
        this.$store.state.peopleCounter += 1
        this.$store.state.people = this.$store.state.people.concat(newPerson)
      }

      //console.log(this.$store.state.people)
    },

    cancelAddPerson() {
      console.log('cancelAddPerson')
      this.form.firstname = ''
      this.form.lastname = ''
      this.form.email = ''
      this.form.address.city = ''
      this.form.address.country = ''
      // router.to(HomePage) 

      //this.$store.showAddNewPersonForm = false
      //Navigate to table ?
      //this.$store.peopleTotal++
    }
  }
}
</script> 