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
          <!-- <td><a href="#" @click="editPerson(person)">Edit  |</a> </td> -->
          <td> <router-link :to="{
               name: 'EditPerson', 
               params: {  idPerson: person.id},
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
  components: {
  //  AddPerson
  },

  setup() {
    //let peopleCounter = 10;
    // const form = ref({
    //   firstname: '',
    //   lastname: '',
    //   email: '',
    //   address: {
    //     city: '',
    //     country: ''
    //   }
    // });
    // return { form, peopleCounter }
  },

  mounted() {
    // this.getPeople()
     // this.setTableHeaders()
  },

  data() {
    return {
      showEditPersonForm: false,
      showAddNewPersonForm: false,
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

    showNewPersonForm() {
      this.showEditPersonForm = false
      this.showAddNewPersonForm = true

      this.form.firstname = '',
        this.form.lastname = '',
        this.form.email = '',
        this.form.address.city = ''
      this.form.address.country = ''
    },
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

      //this.people = this.people.concat(newPerson)
     this.$store.state.people.concat(newPerson)
    },
    cancelAddPerson() {
      this.showAddNewPersonForm = false
    },

    updatePerson() {
      let personId = this.form.id
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
    },

    deletePerson(personToDeleteId) {
      this.showEditPersonForm = false
      this.showAddNewPersonForm = false

      this.people = this.people.filter(p => p.id != personToDeleteId)
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
