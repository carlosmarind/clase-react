import { ReactNode } from "react";
import { MainLayout } from "../layout/MainLayout";
import { isAuth, userHasRole } from "../services/login/loginService";

interface PrivateRouteProps {
    children: ReactNode;
    roles: string[];
}

export const PrivateRoute = (props: PrivateRouteProps) => {
    const auth = isAuth();
    const hasRole = userHasRole(props.roles)
    return (
        <>
            {auth && hasRole ? props.children : <MainLayout>Acceso denegado</MainLayout>}
        </>
    );
}
