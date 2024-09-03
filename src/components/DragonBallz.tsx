import { useEffect, useState } from "react"
import { PersonajeDB } from "./PersonajeDB"

export interface Personaje {
    id: number
    name: string
    genre: string
    race: string
    image: string
    planet: string
    description: string
    biography: string
    transformations: Transformations[]
}

export interface Transformations {
    id: number
    title: string
    image: string
    description: string
}
export const DragonBallz = () => {

    const [personajes, setPersonajes] = useState<Personaje[]>([]);

    useEffect(() => {
        fetch('/dragonballz', {
            method: 'GET',
        }).then(response => response.json())
            .then(data => {
                setPersonajes(data);
            })
    }, []);

    return (
        <>
        <img src="https://placehold.co/600x400?font=roboto" alt="" />
            <div className="contenedor-personajes">
                {personajes.map((personaje) => (
                    <PersonajeDB key={personaje.id} personaje={personaje} />
                ))}
            </div>
        </>
    )
}
