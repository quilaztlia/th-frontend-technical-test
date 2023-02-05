<template>
  <div>
    <h2>Home Page</h2>
  </div>

  <div id="table">
    <PeopleTable />
  </div>

  <div id="editPersonPanel" v-if="showEditPersonForm">
    <EditPerson />
  </div>

  <div id="addPersonPanel" v-if="showAddNewPersonForm">
    <AddPerson />
  </div>

  <router-view />  
</template>

<script>
export default {
  name: 'HomePage',
  components: { },

  setup() {
    // let peopleCounter = 10;
    // const form = ref({
    //   firstname: '',
    //   lastname: '',
    //   email: '',
    //   address: {
    //     city: '',
    //     country: ''
    //   }
    // });
    // return { form }
  },

  mounted() { },

  data() {
    return {
      showEditPersonForm: false,
      showAddNewPersonForm: false,         
    }
  },

  methods: {
    // getPeople() {
    //   this.people = this.$store.state.people
    // },

    // showNewPersonForm() {
    //   this.showEditPersonForm = false
    //   this.showAddNewPersonForm = true

    //   this.form.firstname = '',
    //     this.form.lastname = '',
    //     this.form.email = '',
    //     this.form.address.city = ''
    //   this.form.address.country = ''
    // },    
    // addPerson() {
    //   let newPerson = {
    //     id: '',
    //     firstname: '',
    //     lastname: '',
    //     email: '',
    //     address: {
    //       city: '',
    //       country: ''
    //     }
    //   };
    //   this.peopleCounter = this.peopleCounter + 1
    //   newPerson.id = this.peopleCounter
    //   newPerson.firstname = this.form.firstname
    //   newPerson.lastname = this.form.lastname
    //   newPerson.email = this.form.email
    //   newPerson.address.city = this.form.address.city
    //   newPerson.address.country = this.form.address.country

    //   //this.people = this.people.concat(newPerson)
    //  this.$store.state.people.concat(newPerson)
    // },
    // cancelAddPerson() {
    //   this.showAddNewPersonForm = false
    // },


    // updatePerson() {
    //   let personId = this.form.id
    //   let editedPersonId = this.people.indexOf(p => p.id == personId)
    //   let editedPerson = this.people.filter(p => p.id == personId)[0]

    //   editedPerson.firstname = this.form.firstname
    //   editedPerson.lastname = this.form.lastname
    //   editedPerson.email = this.form.email
    //   editedPerson.address.city = this.form.address.city
    //   editedPerson.address.country = this.form.address.country

    //   this.people[editedPersonId] = editedPerson
    //   this.showEditPersonForm = false
    // },
    // cancelUpdatePerson() {
    //   this.showEditPersonForm = false
    // },

    // editPerson(selectedPerson) {
    //   this.showEditPersonForm = true
    //   this.showAddNewPersonForm = false

    //   let editedPerson = this.people.filter(p => p.id == selectedPerson.id)[0]

    //   this.form.id = editedPerson.id
    //   this.form.firstname = editedPerson.firstname
    //   this.form.lastname = editedPerson.lastname
    //   this.form.email = editedPerson.email
    //   this.form.address.city = editedPerson.address.city
    //   this.form.address.country = editedPerson.address.country
    // },


    // deletePerson(personToDeleteId) {
    //   this.showEditPersonForm = false
    //   this.showAddNewPersonForm = false

    //   this.people = this.people.filter(p => p.id != personToDeleteId)
    // }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>