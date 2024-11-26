export const configuracion = {
    urlEndpointPokemon: {
        baseUrl: 'https://pokeapi.co/api/v2'
    },
    urlJsonServerPost: import.meta.env.VITE_URL_ENDPOINT_BACKEND
} as const;
