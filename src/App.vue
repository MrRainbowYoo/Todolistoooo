<template>
  <div id="app">
    <TheHeader />
    <Todolist />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import Todolist from './components/Todolist'

export default {
  name: 'App',
  components: {
    TheHeader,
    Todolist
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  
  /* color: #335eea; */
  height: 100vh;
  overflow: auto;
  background-color: #ecf0f1;
}
</style>
