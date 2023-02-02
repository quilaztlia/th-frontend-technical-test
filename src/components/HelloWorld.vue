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
    <table id="tableComponent" class="table table-bordered table-striped">
  <thead>
    <tr>
      <!-- loop through each value of the fields to get the table header -->
      <th  v-for="field in headers" :key='field' > 
        {{field}} <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
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
    </tr>
  </tbody>
</table> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted () {
    this.getPeople()
    this.setTableHeaders()
  },
  data () {
    return {
      people: [],
      headers: []
  }
},
  methods: {
    getPeople () {
      fetch('https://fakerapi.it/api/v1/persons?_locale=fr')
        .then(response => response.json())
        .then(data => { this.people = data.data })
        .catch(error => {
          console.error('Panic at Backedn', error)
        })
    },
    setTableHeaders(){
      this.headers = ['Id', 'FirstName', 'LastName', 'Email', 'Address-City', 'Address-Country' ]
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
