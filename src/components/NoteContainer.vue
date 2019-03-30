<template>
  <div class="container">
    <!-- Placehodlers -->
    <div :key="num" v-for="num in nums" class="span">
      <Note classIn="hex silver"></Note>
    </div>
    <div :key="num" v-for="num in nums" class="span">
      <Note classIn="hex pink"></Note>
    </div>
    <div :key="num" v-for="num in nums" class="span">
      <Note classIn="hex purple"></Note>
    </div>
    <div :key="num" v-for="num in nums" class="span">
      <Note classIn="hex blue-dark"></Note>
    </div>
    <div :key="num" v-for="num in nums" class="span">
      <Note classIn="hex blue"></Note>
    </div>
    <div :key="num" v-for="num in nums" class="span">
      <Note classIn="hex teal"></Note>
    </div>
    <div :key="num" v-for="num in nums" class="span">
      <Note classIn="hex yellow"></Note>
    </div>
    <div :key="num" v-for="num in nums" class="span">
      <Note classIn="hex orange"></Note>
    </div>
    <div :key="num" v-for="num in nums" class="span">
      <Note classIn="hex red"></Note>
    </div>
    <div :key="num" v-for="num in nums" class="span">
      <Note classIn="hex black"></Note>
    </div>
  </div>
</template>

<script>
import Note from "./Note.vue";
export default {
  components: {
    Note
  },
  data() {
    return {
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };
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
