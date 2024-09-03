import { Personaje, Transformations } from "./DragonBallz";

interface PersonajePros {
    personaje: Personaje
}
export const PersonajeDB = (props: PersonajePros) => {
    return (
        <div className="contenedor-personaje">
            <div>
                <p>{props.personaje.name}</p>
                <p>{props.personaje.race}</p>
            </div>
            <img src={props.personaje.image} alt={props.personaje.name} />
        </div>
    )
};