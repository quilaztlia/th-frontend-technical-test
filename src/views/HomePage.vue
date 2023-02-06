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

  setup() {  },

  mounted() { },

  data() {
    return {
      showEditPersonForm: false,
      showAddNewPersonForm: false,         
    }
  },

  methods: {  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>