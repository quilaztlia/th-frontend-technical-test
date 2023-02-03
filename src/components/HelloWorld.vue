<template>

  <div>
    <button type="submit" @click="showNewPersonForm()">Add Person</button>
  </div>

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
        <tr v-for="person in people" :key='person.id'>
          <td> {{ person.id }} </td>
          <td> {{ person.firstname }}</td>
          <td> {{ person.lastname }} </td>
          <td> {{ person.email }} </td>
          <td> {{ person.address.city }}</td>
          <td> {{ person.address.country }} </td>
          <td><a href="#" @click="editPerson(person)">Edit</a> </td>
          <td><a href="#" class="btn btn-danger" @click="deletePerson(person.id)">Delete</a></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div v-if="showEditPersonForm">
    <h2>Edit Person</h2>
    <form v-on:submit.prevent="updatePerson(person)">
      <div class="form-group">
        <label for="firstname">First Name: </label>
        <input type="text" name="firstname" placeholder="Enter First Name" v-model="form.firstname">
      </div>
      <div class="form-group">
        <label for="lastname">Last Name: </label>
        <input type="text" name="lastname" placeholder="Enter Last Name" v-model="form.lastname">
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
    </form>
  </div>

  <div v-if="showAddNewPersonForm">
    <h2>Add New Person</h2>
    <form v-on:submit.prevent="">
      <div class="form-group">
        <label for="firstname">First Name: </label>
        <input type="text" name="firstname" placeholder="Enter First Name" v-model="form.firstname">
      </div>
      <div class="form-group">
        <label for="lastname">Last Name: </label>
        <input type="text" name="lastname" placeholder="Enter Last Name" v-model="form.lastname">
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
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  setup() {
    // let newPerson = ref({
    //   id: '',
    //   firstname: '',
    //   lastname: '',
    //   email: '',
    //   address: {
    //     city: '',
    //     country: ''
    //   }
    // });
    const form = ref({
      firstname: '',
      lastname: '',
      email: '',
      address: {
        city: '',
        country: ''
      }
    });
    return {
      // newPerson, 
      form }
  },

  mounted() {
    this.getPeople()
    this.setTableHeaders()
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
      fetch('https://fakerapi.it/api/v1/persons?_locale=fr')
        .then(response => response.json())
        .then(data => { this.people = data.data })
        .catch(error => {
          console.error('Panic at Backedn', error)
        })
    },

    setTableHeaders() {
      this.headers = ['Id', 'FirstName', 'LastName', 'Email', 'Address.City', 'Address.Country']
    },

    showNewPersonForm(){
      this.showEditPersonForm = false
      this.showAddNewPersonForm = true

      this.form.firstname= '',
      this.form.lastname= '',
      this.form.email= '',
      this.form.address.city =''
      this.form.address.country= ''
    },
    addPerson() {
      console.log('addPerson: form')
      console.log(this.form)
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
      //newPerson = this.newPerson
      newPerson.id = this.people.length + 1 
      newPerson.firstname = this.form.firstname
      // newPersona.value.lastname = this.form.lastname
      // newPersona.value.email = this.form.email
      // newPersona.value.address.city = this.form.address.city
      // newPersona.value.address.country = this.form.address.country

      this.people = this.people.concat(newPerson)
      console.log(this.people)
    },    
    cancelAddPerson() {
      this.showAddNewPersonForm = false
    },

    updatePerson() {
      console.log('updatePerson')

      let personId = this.form.id
      let editedPersonId = this.people.indexOf(p => p.id == personId)
      let editedPerson = this.people.filter(p => p.id == personId)[0]

      editedPerson.firstname = this.form.firstname
      editedPerson.lastname = this.form.lastname
      editedPerson.email = this.form.email
      console.log(editedPerson)
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

      //this.addPerson = false
      console.log(selectedPerson.id)
      let editedPerson = this.people.filter(p => p.id == selectedPerson.id)[0]
      console.log(editedPerson)

      this.form.id = editedPerson.id
      this.form.firstname = editedPerson.firstname
      this.form.lastname = editedPerson.lastname
      this.form.email = editedPerson.email
      this.form.address.city = editedPerson.address.city
      this.form.address.country = editedPerson.address.country

      console.log(selectedPerson)
    },

    deletePerson(personToDeleteId) {
      this.people = this.people.filter(p => p.id != personToDeleteId)
      console.log(this.people)
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
