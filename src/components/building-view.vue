<template>
  <div class="building-view">
    <div class="header">
      <div>{{building.name}}</div>
    </div>
    <formula-view :id="building.formulaId"/>
    <employee-view :id="building.managerId"/>
    <div style="padding: 0 8px;display: flex;
    background: lightblue;
    justify-content: center;align-items: center;">
      <div>劳动力：</div>
      <div style="display: flex;flex-direction: column;">
        <div>未受教育:{{building.workers[0]}} 基础教育:{{building.workers[1]}}</div>
        <div>专业培训:{{building.workers[2]}} 高等教育:{{building.workers[3]}}</div>
      </div>
    </div>
  </div>
</template>

<script>//
import {appRunData} from "../store";
import EmployeeView from "./employee-view";
import FormulaView  from "./formula-view";

export default {
  name      : "building-view",
  components: {FormulaView, EmployeeView},
  props     : ['id'],
  computed  : {
    building() {
      return appRunData.buildings.find(x => x.id === this.id) || {};
    },
  },
};
</script>

<style lang="stylus" scoped>
  .building-view {
    display: flex
    justify-content: flex-start
    align-items: stretch

    & > .header {
      background: lightpink
      padding: 8px
    }
  }
</style>