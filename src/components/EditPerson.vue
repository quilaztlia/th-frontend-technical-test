<template>
  <h2>Edit Person</h2>
  <!-- {{ $store.getters.getPerson }} -->
  <!-- <form> -->
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
  <!-- </form> -->
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
    //const editedPerson = ref({ });
    return { 
      form, 
      //editedPerson 
    }
  },

  mounted() {    
    this.setIdPerson()
    //console.log('mounted(): editedPersonId', this.editedPersonId)
    // console.log('PersonId', this.$store.getters.getPersonId)
    // console.log(this.$store.getters.getPerson)
    
    let editedPerson = this.$store.getters.getPerson[0]

    this.form.firstname = editedPerson?.firstname
    this.form.lastname = editedPerson?.lastname
    this.form.email = editedPerson?.email
    this.form.address.city = editedPerson.address.city
    this.form.address.country = editedPerson.address.country    
  },

  data() {
    return { }
  },

  methods: {
    setIdPerson(){
      this.$store.commit('setIdPerson', this.editedPersonId)       
    },

    updateStore(){
      //this.$store.commit('updatePerson', 10)
    },

    updatePerson() {
      console.log(this.$store.state.people)
      console.log('SelectPersonToUpdate(): editedPersonId', this.editedPersonId)
      //let personId = this.idPerson  
      
      let personId = this.$store.state.people.indexOf(p => p.id == this.editedPersonId)
      
      //let editedPerson = this.$store.state.people.filter(p => p.id == this.editedPersonId)
    
      //let editedPerson = this.$store.state.people.filter(p => p.id == this.editedPersonId)[0]
      
      this.$store.state[personId] = this.form
      console.log(this.form) 
      // this.people[editedPersonId] = editedPerson    
      // this.showEditPersonForm = false
    },

    cancelUpdatePerson() {
      //this.showEditPersonForm = false
    },

    editPerson(selectedPerson) {
      // this.showEditPersonForm = true
      // this.showAddNewPersonForm = false

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