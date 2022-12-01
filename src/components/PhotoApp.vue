<template>
  <LayoutContainer>
    <template v-slot:header> header </template>
    <template v-slot:sidebar>
      <album v-for="album in albums" :key="album.id" :album="album">
        {{ album.title }}
      </album>
    </template>
    <template v-slot:content> 
      <router-view />
      
    </template>
  </LayoutContainer>
</template>

<script>
import { computed, onMounted } from "vue";
import LayoutContainer from "./LayoutContainer.vue";
import { useStore } from "vuex";
import Album from "./Album.vue";
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
    const photos = computed(() => {
      return store.state.photos.photos;
    });
    return {
      albums,
      photos
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
