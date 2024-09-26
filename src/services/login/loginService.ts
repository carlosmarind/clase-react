interface ILogin {
    user: string;
    password: string;
    region: string;
    roles?: string[];
}


export function login(user: ILogin): boolean {

    if (user.user === 'admin' && user.password === 'admin') {

        const userResponse: ILogin = {
            ...user,
            roles: ['admin', "user"]
        }

        const datosUsuario = JSON.stringify(userResponse);
        localStorage.setItem('user', datosUsuario);
        return true;
    } else {
        return false;
    }
}

export const logout = () => localStorage.removeItem('user');
export const isAuth = () => localStorage.getItem('user') ? true : false;

export const userHasRole = (roles: string[]) => {
    const user = localStorage.getItem('user');
    if (user) {
        const userResponse: ILogin = JSON.parse(user);
        return roles.some(role => userResponse.roles?.includes(role));
    }
    return false;
}