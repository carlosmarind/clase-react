import { useEffect, useState } from "react";
import { getJwtToken } from "../services/login/loginService";

export function useFetch<T>(url: string): { data: T | null, loading: boolean, error: string } {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const token = getJwtToken();

    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await fetch(url, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (response.ok) {
                    const json = await response.json();
                    setData(json);

                } else {
                    setError(response.statusText);
                }

            } catch (error) {
                setError(error instanceof Error ? error.message : 'error desconocido');

            } finally {
                setLoading(false);
            }
        }

        fetchData();

    }, [url,token]);

    return { data, loading, error };
}
