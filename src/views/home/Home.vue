<!--<template>-->
<!--  <div class="home">-->
<!--    home-->
<!--  </div>-->
<!--</template>-->

<script lang="jsx">
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  render(createElement, context) {
    return <div>
      <router-view />
    </div>
  }
}
</script>
