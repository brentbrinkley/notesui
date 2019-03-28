<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <Note classIn="badge orange"></Note>
    <Note classIn="badge red"></Note>-->
    <NoteContainer></NoteContainer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Note from "./components/Note.vue";
import NoteContainer from "./components/NoteContainer.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Note,
    NoteContainer
  }
};
</script>

<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
