import { useEffect, useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import { getJwtToken } from "../services/login/loginService";

export const AuthPage = () => {

    const jwtToken = getJwtToken();
    const [mensaje, setMensaje] = useState<string>('');

    useEffect(() => {

        fetch('http://localhost:3001/secure-jwt/get_endpoint', {
            headers: {
                'Authorization': `Bearer ${jwtToken}`,
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