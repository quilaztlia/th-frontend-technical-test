<template>  
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    Go to:
    <router-link :to="{ name: 'HomePage' }">People Table |</router-link>
    <router-link :to="{ name: 'AddPerson' }">Add Person |</router-link>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },

  setup() {
    return { }
  },

  mounted() {
    this.getPeople()
  },

  data() {
    return {
      //people: []
    }
  },

  methods: {
    getPeople() {            
      fetch('https://fakerapi.it/api/v1/persons?_locale=fr')
        .then(response => response.json())
        .then(data => {           
          this.$store.state.people = data.data
        })
        .catch(error => {
          console.error('Panic at Backedn', error)
        })        
    }
  }
}

</script> 

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>