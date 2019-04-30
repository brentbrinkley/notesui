<template>
  <!-- To debug uncomment -->
  <!-- <div>
    <div
      :key="note.midi"
      v-for="note in reverseNoteOrder"
    >{{note.midi}} {{note.color}} {{ note.shape}}</div>
  </div>-->

  <div class="container-grid">
    <div :key="note.midi" v-for="note in notes" class="span">
      <Note
        :color="note.color"
        :shape="note.shape"
        :midi_val="note.midi_val"
        :common_notation="note.common_notation"
        :svg="note.svg"
      ></Note>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Note from "./Note.vue";
import INote from "./interfaces/note";

@Component({
  components: { Note }
})
export default class NoteContainerVue extends Vue {
  @Prop() notes!: INote[];

  filterColor(inputColor: string): INote[] {
    return this.notes.filter(note => note.color === inputColor);
  }
}
</script>

<style lang="scss">
.container-grid {
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(13, 1fr);
  width: 48%;
  margin: 0 auto;
}

.span {
  grid-column-end: span 2;
  // justify-self: center;
}

.span:nth-child(12n + 9) {
  grid-column-start: 2;
}
.span:first-child {
  grid-column-start: 2;
}

.span:nth-child(2) {
  grid-column-end: span 10;
  justify-self: start;
}
</style>
