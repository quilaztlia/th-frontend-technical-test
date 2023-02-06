<template>
  <h2>Edit Person</h2>
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
    <button type="submit" @click="updatePerson()">Update</button>
    <button type="submit" @click="cancelUpdatePerson()">Cancel</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'EditPerson',
  props: ['editedPersonId'],

  setup() {
    const form = ref({
      id: '',
      firstname: '',
      lastname: '',
      email: '',
      address: {
        city: '',
        country: ''
      },
    });

    return { form }
  },

  mounted() {
    this.setIdPerson(this.editedPersonId)

    let editedPerson = this.$store.getters.getPerson[0]

    this.form.firstname = editedPerson?.firstname
    this.form.lastname = editedPerson?.lastname
    this.form.email = editedPerson?.email
    this.form.address.city = editedPerson?.address.city
    this.form.address.country = editedPerson?.address.country
  },

  data() {
    return {}
  },

  methods: {
    setIdPerson(editedPersonId) {
      this.$store.commit('setIdPerson', editedPersonId)
    },

    updateStorePerson(editedPersonId, updatedPerson) {
      this.$store.commit('updatePerson', editedPersonId, updatedPerson)
    },

    updatePerson() {      
      this.setIdPerson(this.editedPersonId)
      this.updateStorePerson(this.form)
    },

    cancelUpdatePerson() {
      this.$router.push('/')
    },

    editPerson(selectedPerson) {
      let editedPerson = this.$store.statepeople.filter(p => p.id == selectedPerson.id)[0]

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