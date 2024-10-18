export const configuracion = {
    urlEndpointPokemon: {
        baseUrl: 'https://pokeapi.co/api/v2'
    },
    urlJsonServerPost: import.meta.env.VITE_URL_ENDPOINT_BACKEND
} as const;

//url desarrollo urlJsonServerPost : 'http://localhost:4000/posts'
//url produccion urlJsonServerPost : 'http://bootcamp-dcc.cl/posts'
