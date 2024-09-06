interface ILogin {
    user: string;
    password: string;
    region: string;
}


export function login(user: ILogin): boolean {
    
    if (user.user === 'admin' && user.password === 'admin') {
        
        const datosUsuario = JSON.stringify(user);
        localStorage.setItem('user', datosUsuario);

        return true;
    } else {
        return false;
    }
}