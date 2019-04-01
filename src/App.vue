<template>
  <div id="app">
    <HelloWorld/>
    <NoteContainer :notes="notes"></NoteContainer>
  </div>
</template>

<script>
import axios from "axios";
import HelloWorld from "./components/HelloWorld.vue";
import Note from "./components/Note.vue";
import NoteContainer from "./components/NoteContainer.vue";

export default {
  name: "app",

  components: {
    HelloWorld,
    Note,
    NoteContainer
  },

  data() {
    return {
      notes: null,
      errors: []
    };
  },

  created() {
    axios
      .get("/notes.json")
      .then(response => (this.notes = response.data.reverse()))
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}

svg {
  z-index: 100;
  width: 45%;
}

#moon {
  width: 33%;
}

#plus {
  width: 40%;
}

#key {
  width: 23%;
}

#leaf {
  width: 37%;
}

#square {
  width: 37%;
}

#cube {
  width: 40%;
}

#minus {
  width: 43%;
}
</style>
