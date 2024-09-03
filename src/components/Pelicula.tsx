import { useState } from "react";

interface PeliculaProps {
    titulo: string;
    resumen: string;
    imagen: string;
    enlace: string
}


export const Pelicula = (props: PeliculaProps) => {

    const [visto, setVisto] = useState(false);

    let textoBoton = visto ? "Visto" : "No visto";

    let classNameVisto = visto ? "visto" : "no-visto";

    const cambiarEstadoVisto = () => {
        setVisto(!visto);
    }

    return (
        <section className="pelicula-detalle">
            <aside>
                <a href={props.enlace} target="_blank">
                    <img src={props.imagen} alt="imagen-pelicula" />
                </a>
            </aside>
            <section>
                <div>
                    <h1><a href={props.enlace} target="_blank">{props.titulo}</a></h1>
                </div>
                <div>
                    <div>{props.resumen}</div>
                </div>
            </section>
            <section>
                <button className={classNameVisto} onClick={cambiarEstadoVisto}>{textoBoton}</button>
            </section>
        </section>
    )
}
