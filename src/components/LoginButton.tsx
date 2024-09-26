import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAuth, logout } from "../services/login/loginService";

export const LoginButton = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/home");
    }
    useEffect(() => {
        setIsLoggedIn(isAuth())
    }, []);

    return (
        <div>
            {
                isLoggedIn ?
                    <button type="button" onClick={handleLogout}>Logout</button>
                    :
                    <button type="button" onClick={() => navigate("/login")}>Login</button>
            }
        </div>
    )
}