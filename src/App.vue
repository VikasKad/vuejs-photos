<template>
  <LayoutContainer>
    <template v-slot:header> header </template>
    <template v-slot:sidebar>
      <album v-for="album in albums" :key="album.id" :album="album">
        {{ album.title }}
      </album>
    </template>
    <template v-slot:content> content</template>
  </LayoutContainer>
</template>

<script>
import { computed, onMounted } from "vue";
import LayoutContainer from "./components/LayoutContainer.vue";
import { useStore } from "vuex";
import Album from "./components/Album.vue";
export default {
  name: "App",
  components: {
    LayoutContainer,
    Album,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("albums/fetch");
    });

    const albums = computed(() => {
      return store.state.albums.all;
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
