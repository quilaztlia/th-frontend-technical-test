<template>
  <div class="hello">
    <!-- <div v-for="p in people" :key="p.id">
    <h2>{{ p.id }} - {{ p.firstname }}
      - {{ p.lastname }}
      - {{ p.email }}
      - {{ p.address.city }}
      - {{ p.address.country }}
    </h2>
  </div> -->
  </div>

  <div>
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
          <td><a href="#" class="btn btn-danger" @click="deletePerson(person)">Delete</a></td>
        </tr>
      </tbody>
    </table>
  </div>

<div v-if="showEditPersonForm">
  <h2>Edit Person</h2>
  <form v-on:submit.prevent="update(person)">
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
      <label for="addresse.city">: </label>
      <input type="text" name="addresse.city" placeholder="Address.City" v-model="form.address.city">
    </div>
    <div class="form-group">
      <label for="addresse.country">: </label>
      <input type="text" name="addresse.country" placeholder="Address.City" v-model="form.address.city">
    </div>
  <button type="submit" class="btn btn-primary">Update</button>
</form>
</div>

</template>

<script>
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
      this.headers = ['Id', 'FirstName', 'LastName', 'Email', 'Address-City', 'Address-Country']
    },
    editPerson(selectedPerson) {
      this.showEditPersonForm = true
      this.form.id = selectedPerson.id
      this.form.firstname = selectedPerson.firstname
      this.form.lastname = selectedPerson.lastname
      this.form.email = selectedPerson.email
      this.form.address.city = selectedPerson.city

      console.log(selectedPerson)
    },
    deletePerson() {

    },
    updatePerson(personToUpdate){
      console.log(personToUpdate)
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
