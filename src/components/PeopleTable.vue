<template>
  <div class="table">
    <table id="tableComponent">
      <thead>
        <tr>
          <th v-for="field in headers" :key='field'>
            {{ field }} <i aria-label='Sort Icon'></i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in this.$store.state.people" :key='person.id'>
          <td> {{ person.id }} </td>
          <td> {{ person.firstname }}</td>
          <td> {{ person.lastname }} </td>
          <td> {{ person.email }} </td>
          <td> {{ person.address.city }}</td>
          <td> {{ person.address.country }} </td>          
          <td> <router-link :to="{
               name: 'EditPerson', 
               params: { editedPersonId: person.id},
               query: { firstname: person.firstname, lastname: person.lastname } 
           }">Edit |</router-link> 
          </td>
          <td><a href="#" class="btn btn-danger" @click="deletePerson(person.id)">Delete  |</a></td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: 'PeopleTable',
  components: { },

  setup() {  },

  mounted() { },

  data() {
    return {
      people: [],
      headers: [],
    }
  },

  methods: {
    
    getPeople() {
      this.people = this.$store.state.people
    },

    setTableHeaders() {
      this.headers = ['Id', 'FirstName', 'LastName', 'Email', 'Address.City', 'Address.Country']
    },

    cancelUpdatePerson() {
      // this.showEditPersonForm = false
    },

    editPerson(selectedPerson) {
      // this.showEditPersonForm = true
      // this.showAddNewPersonForm = false
      let editedPerson = this.people.filter(p => p.id == selectedPerson.id)[0]
      this.form.id = editedPerson.id
      this.form.firstname = editedPerson.firstname
      this.form.lastname = editedPerson.lastname
      this.form.email = editedPerson.email
      this.form.address.city = editedPerson.address.city
      this.form.address.country = editedPerson.address.country
    },

    deletePerson(personToDeleteId) {
      this.$store.state.editedPersonId = personToDeleteId
      this.$store.state.people = this.people.filter(p => p.id != personToDeleteId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>