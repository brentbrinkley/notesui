<template>
  <div id="app">
    <HelloWorld/>
    <NoteContainer :notes="organizedNotes()"></NoteContainer>
  </div>
</template>


<script>
import axios from "axios";
import order from "./helpers/sequenceHelper.js";
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

  // data : () -> { notes : [Note], error : [String]}
  data() {
    return {
      notes: null,
      errors: []
    };
  },

  // created : () -> () *SideEffect populates note data
  created() {
    axios
      // .get("/notes.json")
      .get("http://localhost:5000/")
      .then(response => (this.notes = response.data.notes))
      .catch(e => {
        this.errors.push(e);
      });
  },

  methods: {
    // organizedNotes : () -> [Note]
    organizedNotes() {
      return order.notesOrder.map(index => this.notes[index]).reverse();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
