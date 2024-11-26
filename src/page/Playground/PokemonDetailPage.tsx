import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { PokemonDetail } from "../../services/pokemon/IResponseDetail";
import { MainLayout } from "../../layout/MainLayout";

export const PokemonDetailPage = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    const [detallePersonaje, setDetallePersonaje] = useState<PokemonDetail>();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).
            then(response => response.json()).
            then(data => setDetallePersonaje(data))
    }
        , [id]);

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <MainLayout>
            <h3>Detalle de Personaje</h3>
            <p>Esta es la pagina de detalle de personaje</p>
            <p>Revisando detalle de pokemon con id {id}</p>
            <div>
                <p>Nombre: {detallePersonaje?.name}</p>
                <img src={detallePersonaje?.sprites.front_default} alt={detallePersonaje?.name} />
                <button onClick={handleClick} >Volver</button>
            </div>
        </MainLayout>
    )
}