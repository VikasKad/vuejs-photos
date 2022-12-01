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
import { computed, onMounted } from "vue";
import LayoutContainer from "./components/LayoutContainer.vue";
import { useStore } from "vuex";
export default {
  name: "App",
  components: {
    LayoutContainer,
  },
  setup() {
    const store = useStore(); 
    onMounted(() => {
      store.dispatch('albums/fetch')
    });
    const albums = computed(( )=>{
      return store.state.albums.all;
    })

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
