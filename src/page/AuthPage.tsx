import { MainLayout } from "../layout/MainLayout";
import { useFetch } from "../hooks/useFetch";

export const AuthPage = () => {

    const { data: mensaje, loading, error } = useFetch<{ message: string }>('http://localhost:3001/secure-jwt/get_endpoint');

    if (loading) return <MainLayout><div>Loading...</div></MainLayout>;
    if (error) return <MainLayout><div>Error: {error}</div></MainLayout>;

    return (
        <MainLayout>
            <div>
                <h1>Auth Page</h1>
                <h3>{mensaje?.message}</h3>
            </div>
        </MainLayout>
    );
}