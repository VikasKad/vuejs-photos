<template>
  <img v-for="photo in photos" :key="photo.id" :src="photo.thumbnailUrl" />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "PhotoView",
  setup() {
    const store = useStore();

    const photos = computed(() => {
      return store.state.photos.photos;
    });
    return {
      photos,
    };
  },
};
</script>

<style>
</style>