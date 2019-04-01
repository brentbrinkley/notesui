<template>
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

  computed: {
    changeOrd() {
      return this.notes.reverse();
    }
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

.span:nth-child(12n + 7) {
  grid-column-start: 2;
}
</style>
