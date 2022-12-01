export const photos = {
    namespaced: true,
    state() {
        return {
            photos: [],
            cache: {}
        }
    },
    mutations: {
        setV(state, payload) {
            state.photos = payload.photos.splice(0, 100);
            state.cache[payload.albumId] = payload.photos
        },
    },
    actions: {
        async getByAlbum(ctx, {
            albumId
        }) {
            
            if (ctx.state.cache[albumId]) {
                ctx.commit('setV', {
                    photos: ctx.state.cache[albumId],
                    albumId
                })
                return
            }
            const res = await window.fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            const json = await res.json();
            ctx.commit('setV', {

                albumId,
                photos: json
            });
        }

    }
}