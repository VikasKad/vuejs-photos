<template>
  <LayoutContainer>
    <template v-slot:header> header </template>
    <template v-slot:sidebar> sidebar </template>
    <template v-slot:content> content</template>
  </LayoutContainer>
</template>

<script>
import LayoutContainer from "./components/LayoutContainer.vue";
export default {
  name: "App",
  components: {
    LayoutContainer,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
</style>
