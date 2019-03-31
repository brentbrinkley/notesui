<template>
  <div class="container">
    <div :key="note.midi" v-for="note in notes" class="span">
      {{notes}}
      <!-- <Note
        color="note.color"
        shape="note.shape"
        midiVal="note.midi"
        standardVal="note.oldVal"
        svgString="note.svg"
      ></Note>-->
    </div>
    <!-- Placehodlers -->
    <!-- <div :key="num" v-for="num in nums" class="span">
      <Note color="silver"></Note>
    </div>
    <div :key="num" v-for="num in nums" class="span">
      <Note color="pink"></Note>
    </div>
    <div :key="num" v-for="num in nums" class="span">
      <Note color="purple"></Note>
    </div>
    <div :key="num" v-for="num in nums" class="span">
      <Note color="blue-dark"></Note>
    </div>
    <div :key="num" v-for="num in nums" class="span">
      <Note color="blue"></Note>
    </div>
    <div :key="num" v-for="num in nums" class="span">
      <Note color="teal"></Note>
    </div>
    <div :key="num" v-for="num in nums" class="span">
      <Note color="yellow"></Note>
    </div>
    <div :key="num" v-for="num in nums" class="span">
      <Note color="orange"></Note>
    </div>
    <div :key="num" v-for="num in nums" class="span">
      <Note color="red"></Note>
    </div>
    <div :key="num" v-for="num in nums" class="span">
      <Note color="black"></Note>
    </div>-->
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
    // return {
    //   nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    // };
  }
};
</script>

<style lang="scss">
.container {
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(13, 50px);
  width: 50%;
  margin: 0 auto;
}

.span {
  grid-column-end: span 2;
}

.span:nth-child(12n + 7) {
  grid-column-start: 2;
}
</style>
