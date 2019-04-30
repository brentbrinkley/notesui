<template>
  <div>
    <div
      :class="'hex ' + color"
      :shape="shape"
      :midi_val="midi_val"
      :common_notation="common_notation"
      v-html="svg"
    ></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Note extends Vue {
  @Prop(String) color!: string;
  @Prop(String) shape!: string;
  @Prop(Number) midi_val!: number;
  @Prop(String) common_notation!: string;
  @Prop(String) svg!: string;
  @Prop(Boolean) filtered!: boolean;
}
</script>

<style scoped lang="scss">
@mixin margin-auto {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

svg {
  z-index: 100;
  width: 50%;
}

#moon {
  width: 30%;
}

#key {
  width: 23%;
}

.hex {
  position: relative;
  margin: 0 0 1.5em 0;
  width: 6.2em;
  height: 4em;
  border-radius: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  top: 0;
  transition: all 0.1s ease-in;

  &:before,
  &:after {
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background: inherit;
    content: "";
    @include margin-auto;
  }

  &:before {
    transform: rotate(60deg);
  }

  &:after {
    transform: rotate(-60deg);
  }
  &:hover {
    // animation: bounce 1s 0.5s;
    // transform: scale(0.9);
  }
}

.black {
  background: linear-gradient(to top left, #7c7c7c 0%, #000 100%);
  color: #4a4a4a;
}

.orange {
  background: linear-gradient(to top left, #ffc107 0%, #f57c00 100%);
  color: #f68401;
}

.pink {
  background: linear-gradient(to top left, #f48fb1 0%, #d81b60 100%);
  color: #dc306f;
}

.yellow {
  background: linear-gradient(to top left, #ffeb3b 0%, #fbc02d 100%);
  color: #ffb300;
}

.red {
  background: linear-gradient(to top left, #f4511e 0%, #b71c1c 100%);
  color: #c62828;
}

.purple {
  background: linear-gradient(to top left, #ab47bc 0%, #4527a0 100%);
  color: #7127a8;
}

.green {
  background: linear-gradient(to top left, #4db6ac 0%, #00796b 100%);
  color: #34a297;
}

.cyan {
  background: linear-gradient(to top left, #4fc3f7 0%, #2196f3 100%);
  color: #259af3;
}

.blue {
  background: linear-gradient(to top left, #1976d2 0%, #283593 100%);
  color: #1c68c5;
}

.green-light {
  background: linear-gradient(to top left, #cddc39 0%, #8bc34a 100%);
  color: #7cb342;
}

.green-dark {
  background: linear-gradient(to top left, #4caf50 0%, #1b5e20 100%);
  color: #00944a;
}

.grey {
  background: linear-gradient(to top left, #e0e0e0 0%, #bdbdbd 100%);
  color: #9e9e9e;
}

.gold {
  background: linear-gradient(to top left, #e6ce6a 0%, #b7892b 100%);
  color: #b7892b;
}
</style>
