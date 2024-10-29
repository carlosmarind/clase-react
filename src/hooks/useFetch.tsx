import { useState, useEffect } from "react";
import { getJwtToken } from "../services/login/loginService";

export function useFetch<T>(url: string): { data: T | null; loading: boolean; error: string | null } {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const jwtToken = getJwtToken();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                }
                );
                if (!response.ok) throw new Error("La respuesta no fue OK");
                const json = await response.json();
                setData(json);
            } catch (error) {
                setError(error as string);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url, jwtToken]);

    return { data, loading, error };
}
