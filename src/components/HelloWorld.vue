<template>
  <div class="hello">
    <table id="tableComponent">
      <thead>
        <tr>
          <!-- loop through each value of the fields to get the table header -->
          <th v-for="field in headers" :key='field'>
            {{ field }} <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
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

<div v-if="showEditPersonForm || showAddNewPersonForm">
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
      <button v-if="showAddNewPersonForm" type="submit" class="btn btn-primary" @click="addPerson()">Add</button>  
    </div>
    <div>
      <button v-if="showEditPersonForm" type="submit" class="btn btn-primary">Update</button>
    </div>
  
</form>
</div>

</template>

<script>
// import { ref } from 'vue'

// const newPerson = ref({
//         firstname: '',
//         lastname: '', 
//         email: '' ,
//         address:{
//           city: '',
//           country: ''
//         }
//       })

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    this.getPeople()
    this.setTableHeaders()
  },
  data() {
    return {
      showEditPersonForm: false,
      showAddNewPersonForm: true,
      people: [],
      headers: [],
      form:{
        firstname: '',
        lastname: '', 
        email: '' ,
        address:{
          city: '',
          country: ''
        }
      },
      newPerson:{
        firstname: '',
        lastname: '', 
        email: '' ,
        address:{
          city: '',
          country: ''
        }
      }            
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

    addPerson() {
      // this.showEditPersonForm = true
      console.log('New person')
      
      // this.newPerson.id = this.form.id 
      this.newPerson.firstname = this.form.firstname
      this.newPerson.lastname = this.form.lastname
      this.newPerson.email = this.form.email
      this.newPerson.address.city = this.form.address.city
      this.newPerson.address.country = this.form.address.country
      
      this.people.concat(this.newPerson)
      // console.log(selectedPerson)
    },

    updatePerson(){           
      // () => {
        let personId =  this.form.id
        let editedPersonId = this.people.indexOf(p => p.id == personId)
      
      this.people[editedPersonId].firstname = this.form.firstname
      this.people[editedPersonId].lastname = this.form.lastname
      this.people[editedPersonId].email = this.form.email
      this.people[editedPersonId].address.city = this.form.address.city
      this.people[editedPersonId].address.country = this.form.address.country            
    },

    editPerson(selectedPerson) {
      this.showEditPersonForm = true
      this.addPerson = false
      console.log(selectedPerson.id)
      let editedPerson = this.people.filter(p => p.id == selectedPerson.id)[0]
      console.log(editedPerson)

      this.form.id = editedPerson.id
      this.form.firstname = editedPerson.firstname
      this.form.lastname = editedPerson.lastname
      this.form.email = editedPerson.email
      this.form.address.city = editedPerson.address.city
      this.form.address.country = editedPerson.address.country
      this.updatePerson()

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
