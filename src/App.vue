<template>
  <LayoutContainer>
    <template v-slot:header> header </template>
    <template v-slot:sidebar>
      <div v-for="album in albums" :key="album.id">
        {{ album.title }}
      </div>
    </template>
    <template v-slot:content> content</template>
  </LayoutContainer>
</template>

<script>
import { ref, onMounted } from "vue";
import LayoutContainer from "./components/LayoutContainer.vue";
export default {
  name: "App",
  components: {
    LayoutContainer,
  },
  setup() {
    const albums = ref([]);
    onMounted(async () => {
      const res = await window.fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const json = await res.json();
      albums.value = json;
    });

    return {
      albums,
    };
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
