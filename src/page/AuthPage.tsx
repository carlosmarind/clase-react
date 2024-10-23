import { useEffect, useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import { getBasicToken } from "../services/login/loginService";

export const AuthPage = () => {


    const basicAuth = getBasicToken();
    const [mensaje, setMensaje] = useState<string>('');

    useEffect(() => {

        fetch('http://localhost:3001/secure-basic/get_endpoint', {
            headers: {
                'Authorization': basicAuth,
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setMensaje(data.message);
        });

    });

    return (
        <MainLayout>
            <div>
                <h1>Auth Page</h1>
                <h3>{mensaje}</h3>
            </div>
        </MainLayout>
    );
}