import { ReactNode } from "react";
import { MainLayout } from "../layout/MainLayout";

interface PrivateRouteProps {
    children: ReactNode;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
    const auth = isAuth();
    return (
        <>
            {auth ? props.children : <MainLayout>Acceso denegado</MainLayout>}
        </>
    );
}

const isAuth = () => {
    if (localStorage.getItem('user')) {
        return true;
    } else {
        return false;
    }
}