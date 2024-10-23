

interface ILogin {
    user: string;
    password: string;
    region: string;
    email: string;
    roles?: string[];
}


export async function login(user: ILogin): Promise<boolean> {

    const request = { username: user.user, password: user.password }

    const response = await fetch("http://localhost:3001/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request)
    });

    if (response.ok) {
        const jsonResponse = await response.json();

        const basicAuth = btoa(`${user.user}:${user.password}`);

        const userResponse = {
            isAuthenticated: jsonResponse.metadata.isAuthenticated,
            username: jsonResponse.metadata.username,
            email: jsonResponse.metadata.email,
            roles: jsonResponse.metadata.role,
            basicAuth: `Basic ${basicAuth}`
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

export const userHasRole = (roles: string[]) => {
    const user = localStorage.getItem('user');
    if (user) {
        const userResponse: ILogin = JSON.parse(user);
        return roles.some(role => userResponse.roles?.includes(role));
    }
    return false;
}