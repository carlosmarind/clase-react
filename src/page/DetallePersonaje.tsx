import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { PokemonDetail } from "../services/pokemon/IResponseDetail";

export const DetallePersonaje = () => {

    const { id } = useParams();
    const [detallePersonaje, setDetallePersonaje] = useState<PokemonDetail>();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).
            then(response => response.json()).
            then(data => setDetallePersonaje(data))
    }
        , [id]);

    return (
        <div>
            <h3>Detalle de Personaje</h3>
            <p>Esta es la pagina de detalle de personaje</p>
            <p>Revisando detalle de pokemon con id {id}</p>
            <div>
                <p>Nombre: {detallePersonaje?.name}</p>
                <img src={detallePersonaje?.sprites.front_default} alt={detallePersonaje?.name} />
            </div>
        </div>
    )
}