<template>
  <div class="employee-view">职员：{{employee.name}}</div>
</template>

<script>//

import {appRunData} from "../store";

let empty = {
  name: '- 空 -',
};

export function findEmployeeById(id) {
  return appRunData.employees.find(x => x.id === id) || empty;

}

export default {
  name    : "employee-view",
  props   : ['id'],
  computed: {
    employee() {
      return findEmployeeById(this.id);
    },
  },
};
</script>

<style scoped lang="stylus">
.employee-view{
  display: flex
  justify-content: center
  align-items: center
  padding: 0 8px
  background: orange
}
</style>