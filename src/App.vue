<template>
  <div id="app">
    <h1>Notes</h1>
    <NoteContainer :notes="organizedNotes()"></NoteContainer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import axios from "axios";
import order from "./helpers/sequenceHelper";
import HelloWorld from "./components/HelloWorld.vue";
import Note from "./components/Note.vue";
import NoteContainer from "./components/NoteContainer.vue";
import INote from "./components/interfaces/note";

@Component({
  components: {
    Note,
    NoteContainer
  }
})
export default class App extends Vue {
  notes: INote[] = [];
  errors: string[] = [];

  created(): void {
    axios
      .get("https://tranquil-springs-14961.herokuapp.com/")
      .then(response => (this.notes = response.data))
      .catch(e => {
        this.errors.push(e);
      });
  }

  organizedNotes(): INote[] {
    return order.notesOrder.map(index => this.notes[index]).reverse();
  }
}
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