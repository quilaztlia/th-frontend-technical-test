<template>
  <div>
    <p> <router-link to="/">Table</router-link> </p>
    <p><router-link to="edit-person">Edit Person</router-link></p>
    <router-link to="add-person">Add Person</router-link>
  </div>

  <router-view></router-view>
</template>

<script>
 //import PeopleTable from './views/PeopleTable.vue'

 export default {
   name: 'App',
  //  components: {
  //    PeopleTable
  // }
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
