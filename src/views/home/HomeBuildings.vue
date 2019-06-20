<template>
  <div>
    <div v-for="building in buildings" :key="building.id">
      <building-view :id="building.id"/>
    </div>
  </div>
</template>

<script lang="jsx">//
import BuildingView from "../../components/building-view";
//
import {appRunData} from "../../store";

export default {
  name      : "HomeBuildings",
  components: {BuildingView},
  data() {
    return {
      buildings: appRunData.buildings,
    };
  },
  render() {
    return <div>hello</div>;
  },
};
</script>

<style scoped>

</style>