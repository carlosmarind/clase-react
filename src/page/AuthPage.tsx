import { MainLayout } from "../layout/MainLayout";
import { useFetch } from "../hooks/useFetch";

export const AuthPage = () => {

    const { data, loading, error } = useFetch<{ message: string }>("http://localhost:3001/secure-jwt/get_endpoint");

    if (loading) return <MainLayout><p>Cargando datos...</p></MainLayout>
    if (error) return <MainLayout><p>Error en la consulta de datos {error}</p></MainLayout>

    return (
        <MainLayout>
            <div>
                <h1>Auth Page</h1>
                <h3>{data?.message}</h3>
            </div>
        </MainLayout>
    );
}