<template>
  <div class="formula-view">
    <div>公式：</div>
    <div v-if="formula">
      {{formula.name}}（
      <template v-for="item in formula.items">
        <span>{{item}}</span>
      </template>
      ）
    </div>
    <div v-else>
      - 空 -
    </div>
  </div>
</template>

<script>
  import {config} from "../store";

  export default {
    name    : "formula-view",
    props   : ['id'],
    computed: {
      formula() {
        return config.formulas.find(x => x.id === this.id);
      },
    },
  };
</script>

<style lang="stylus" scoped>
  .formula-view {
    display: flex
    background: palegreen
    justify-content: center
    align-items: center
    padding: 0 8px
  }
</style>