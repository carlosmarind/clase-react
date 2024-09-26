import { useEffect, useState } from "react"
import { MainLayout } from "../layout/MainLayout"
import { IResponse } from "../services/pokemon/IResponse"
import { Link } from "react-router-dom";
import { configuracion } from "../config/appConfiguration";

export const PersonajesPage = () => {

    const [pokemones, setPokemones] = useState<IResponse>();

    useEffect(() => {
        fetch(`${configuracion.urlEndpointPokemon}/pokemon?limit=10`)
            .then(response => response.json())
            .then(data => setPokemones(data))
    }, []);

    return (
        <MainLayout>
            <h3>Personajes</h3>
            <p>Esta es la pagina de personajes</p>

            <ul>
                {pokemones?.results.map((pokemon, index) => {
                    const tokensUrl = pokemon.url.split("/");
                    tokensUrl.pop()
                    return (
                        <li key={index}>
                            <Link to={`/detalle-personaje/${tokensUrl.pop()}`}>{pokemon.name}</Link>
                        </li >
                    )
                })
                }
            </ul>
        </MainLayout >
    )
}