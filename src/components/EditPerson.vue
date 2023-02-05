<template>
 <div>
   Test only propose
    <p>IdPersom FROM ROuter {{ $route.params.idPerson }}</p>
    <p>IdPersom FROM PROPS {{ idPerson }}</p>
  <p>{{ idPerson }}  {{ firstname }}</p>
    
  {{ $store.state.people[idPerson-1] }}
  
</div> 
  <div v-if="showEditPersonForm">
    <h2>Edit Person</h2>
    <!-- <form > -->
      <div class="form-group">
        <label for="Id">Id: </label>
        <input type="text" name="id" placeholder="Id" v-model="form.id">
      </div>
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
        <button v-if="showEditPersonForm" type="submit" @click="updatePerson()">Update</button>
        <button v-if="showEditPersonForm" type="submit" @click="cancelUpdatePerson()">Cancel</button>
      </div>
    <!-- </form> -->
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'EditPerson',
  props: [ 'idPerson'],
  computed: {
    firstname(){return this.$route.query.firstname}
  },

  setup() {
    const form = ref({
      id: '',
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

  mounted() { },

  data() {
    return {
      showEditPersonForm: true
    }
  },

  methods: {
    updatePerson() {
      let personId = this.idPerson  //this.form.id
      let editedPersonId = this.people.indexOf(p => p.id == personId)
      let editedPerson = this.people.filter(p => p.id == personId)[0]

      editedPerson.firstname = this.form.firstname
      editedPerson.lastname = this.form.lastname
      editedPerson.email = this.form.email
      editedPerson.address.city = this.form.address.city
      editedPerson.address.country = this.form.address.country

      this.people[editedPersonId] = editedPerson
      this.showEditPersonForm = false
    },

    cancelUpdatePerson() {
      this.showEditPersonForm = false
    },

    editPerson(selectedPerson) {
      this.showEditPersonForm = true
      this.showAddNewPersonForm = false

      let editedPerson = this.people.filter(p => p.id == selectedPerson.id)[0]

      this.form.id = editedPerson.id
      this.form.firstname = editedPerson.firstname
      this.form.lastname = editedPerson.lastname
      this.form.email = editedPerson.email
      this.form.address.city = editedPerson.address.city
      this.form.address.country = editedPerson.address.country
    }
  }
}
</script>