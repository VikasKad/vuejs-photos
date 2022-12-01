export const albums = {
    namespaced: true,

    state() {
        return {
            all: []
        }
    },
    mutations: {
        setAlbums(state, albums) {
            state.all = albums;
        }
    },
    actions: {
        async fetch(ctx) {
            console.log(ctx);

            const res = await window.fetch(
                "https://jsonplaceholder.typicode.com/albums"
            );
            const json = await res.json();
            ctx.commit('setAlbums', json);
        }
    }
}