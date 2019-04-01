<template>
  <!-- To debug uncomment -->
  <!-- <div>
    <div
      :key="note.midi"
      v-for="note in reverseNoteOrder"
    >{{note.midi}} {{note.color}} {{ note.shape}}</div>
  </div>-->

  <div class="container">
    <div :key="note.midi" v-for="note in notes" class="span">
      <Note
        :color="note.color"
        :shape="note.shape"
        :midiVal="note.midi"
        :standardVal="note.oldVal"
        :svgString="note.svg"
      ></Note>
    </div>
  </div>
</template>

<script>
import Note from "./Note.vue";
export default {
  props: ["notes"],

  components: {
    Note
  },

  data() {
    return {
      MAJOR: [2, 2, 1, 2, 2, 2, 1]
    };
  },

  computed: {
    // getVal(note) {
    //   const major = [2, 2, 1, 2, 2, 2, 1];
    //   for (let num in major) {
    //     return note + num;
    //   }
    // },
    // alterNotes() {
    //   return this.notes.map(note => this.MAJOR.map(num => note.midi + num));
    // }
  },

  methods: {
    filterColor(inputColor) {
      return this.notes.filter(note => note.color === inputColor);
    }
  }
};
</script>

<style lang="scss">
.container {
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(13, 1fr);
  width: 48%;
  margin: 0 auto;
}

.span {
  grid-column-end: span 2;
  justify-self: center;
}

// .span:nth-child(12n + 7) {
//   grid-column-start: 2;
// }

.span:nth-child(12n + 9) {
  grid-column-start: 2;
}
.span:first-child {
  grid-column-start: 10;
}

// .span:nth-child(13n + 8) {
//   grid-column-start: 10;
// }

// .grey-key:nth-child(1) {
//   grid-column-start: 10;
// }
</style>
