
import { jwtDecode } from "jwt-decode";
interface ILogin {
    user: string;
    password: string;
    region: string;
    email: string;
    roles?: string[];
}


export async function login(user: ILogin): Promise<boolean> {

    const request = { username: user.user, password: user.password }

    const response = await fetch("http://localhost:3001/auth", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request)
    });

    if (response.ok) {
        const jsonResponse = await response.json();

        const decodedToken = jwtDecode(jsonResponse.token);

        const userResponse = {
            ...decodedToken,
            token: jsonResponse.token
        }
        const datosUsuario = JSON.stringify(userResponse);
        localStorage.setItem('user', datosUsuario);
        return true;
    } else {
        localStorage.removeItem('user');
        return false;
    }

}

export const logout = () => localStorage.removeItem('user');
export const isAuth = () => localStorage.getItem('user') ? true : false;

export const getBasicToken = () => {
    const user = localStorage.getItem('user');
    if (user) {
        const userResponse = JSON.parse(user);
        return userResponse.basicAuth;
    }
    return '';
}

export const getJwtToken = () => {
    const user = localStorage.getItem('user');
    if (user) {
        const userResponse = JSON.parse(user);
        return userResponse.token;
    }
    return '';
}

export const userHasRole = (roles: string[]) => {
    const user = localStorage.getItem('user');
    if (user) {
        const userResponse: ILogin = JSON.parse(user);
        return roles.some(role => userResponse.roles?.includes(role));
    }
    return false;
}