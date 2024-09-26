import { useEffect } from "react"
import { MainLayout } from "../layout/MainLayout"

export const HomePage = () => {

    useEffect(() => {

        const fectchData = async () => {
            //primero
            console.log('iniciando solicitud web')
            const fetchOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({
                    name: 'jose',
                    age: 25
                })
            }
            try {
                const response = await fetch('http://localhost:4000/posts', fetchOptions)
                const data = await response.json();
                console.log(data)
            } catch (error:any) {
                console.log('error en la solicitud', error.message)
            }
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