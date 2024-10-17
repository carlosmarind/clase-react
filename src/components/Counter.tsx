import { useEffect, useState } from "react";
import { Button } from "./Button";

export const Counter = () => {

    const [contador, setContador] = useState(0);
    const [esPar, setEspar] = useState(true);

    useEffect(() => {
        console.log("Este useEffect se ejecuto en un renderizado");
    }); // se va a ejecutar en cada renderizado

    useEffect(() => {

        setTimeout(funcionDiferida, 5000);

        console.log("este useEffect se ejecuto solo al montar el componente")
        return () => {
            console.log("este useEffect se ejecuto solo al desmontar el componente")
            // se va a ejecutar cuando el componente se desmonte
        }
    }, []); // se va a ejecutar solo una vez al montar el componente

    useEffect(() => {
        console.log("este useEffect se ejecuto al modificar el contador")
        setEspar(contador % 2 === 0);
    }, [contador]); // se va a ejecutar solo cuando el contador cambie


    const funcionDiferida = () => {
        console.log("Este tiempo desde que el componente se inicializa")
    }

    return (
        <>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button >
            {
                esPar ?
                    <p>es par</p>
                    :
                    <>
                        <p>es impar</p>
                        <Button></Button>
                    </>

            }
        </>
    )
}
