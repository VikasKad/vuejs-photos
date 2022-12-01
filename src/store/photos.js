export const photos = {
    namespaced: true,
    state() {
        return {
            photos: []
        }
    },
    mutations: {
        setV(state, photos) {
            state.photos = photos.splice(0,100);
        },
    },
    actions: {
        async getByAlbum(ctx, {
            albumId
        }) {
            const res = await window.fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            const json = await res.json();
            ctx.commit('setV', json);
        }

    }
}