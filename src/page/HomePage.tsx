import { useEffect } from "react"
import { MainLayout } from "../layout/MainLayout"


function calcular(a: number, b: number, callback: any, callback2?: any) {
    //operacion 1
    //operacion 2

    return callback(a, b, callback2)
}

function suma(a: number, b: number) {
    return a + b
}

function resta(a: number, b: number) {
    return a - b
}

export const HomePage = () => {

    useEffect(() => {
        console.log(calcular(5, 3, suma));
        console.log(calcular(5, 3, resta));



        //async await


        const fectchData = async () => {
            //primero
            console.log('iniciando solicitud web')
            const fetchOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: 'mi titulo',
                    body: 'mi cuerpo',
                    userId: 1
                })
            }

            const response = await fetch('http://localhost:4000/posts', fetchOptions)
            const data = await response.json();
            console.log(data)
            //quinto
            console.log('terminando solicitud web')
        }
        fectchData()

    }, []);

    return (
        <MainLayout>
            <div>esta sera mi nuevo contenido</div>
        </MainLayout >
    )
}