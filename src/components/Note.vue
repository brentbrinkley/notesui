<template>
  <div>
    <div :class="classIn">
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="35" stroke="none" fill="white"></circle>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ["classIn"]
};
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
  position: inherit;
  z-index: 100;
  // width: 30%;
}

.hex {
  position: relative;
  margin: 1.5em 3em;
  width: 4em;
  height: 6.2em;
  border-radius: 10px;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  top: 0;
  transition: all 0.2s ease;
  transform: rotate(90deg);

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
}

.black {
  background: linear-gradient(to bottom right, #7c7c7c 0%, #000 100%);
  color: #4a4a4a;
}

.brown {
  background: linear-gradient(
    to bottom right,
    rgb(151, 126, 126) 0%,
    #654635 100%
  );
  color: #a49085;
}

.orange {
  background: linear-gradient(to bottom right, #ffc107 0%, #f57c00 100%);
  color: #f68401;
}

.pink {
  background: linear-gradient(to bottom right, #f48fb1 0%, #d81b60 100%);
  color: #dc306f;
}

.yellow {
  background: linear-gradient(to bottom right, #ffeb3b 0%, #fbc02d 100%);
  color: #ffb300;
}

.red {
  background: linear-gradient(to bottom right, #f4511e 0%, #b71c1c 100%);
  color: #c62828;
}

.purple {
  background: linear-gradient(to bottom right, #ab47bc 0%, #4527a0 100%);
  color: #7127a8;
}

.teal {
  background: linear-gradient(to bottom right, #4db6ac 0%, #00796b 100%);
  color: #34a297;
}

.blue {
  background: linear-gradient(to bottom right, #4fc3f7 0%, #2196f3 100%);
  color: #259af3;
}

.blue-dark {
  background: linear-gradient(to bottom right, #1976d2 0%, #283593 100%);
  color: #1c68c5;
}

.green {
  background: linear-gradient(to bottom right, #cddc39 0%, #8bc34a 100%);
  color: #7cb342;
}

.green-dark {
  background: linear-gradient(to bottom right, #4caf50 0%, #1b5e20 100%);
  color: #00944a;
}

.silver {
  background: linear-gradient(to bottom right, #e0e0e0 0%, #bdbdbd 100%);
  color: #9e9e9e;
}

.gold {
  background: linear-gradient(to bottom right, #e6ce6a 0%, #b7892b 100%);
  color: #b7892b;
}
</style>
