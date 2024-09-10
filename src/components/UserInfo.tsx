import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isAuth, logout } from "../services/login/loginService";

export const UserInfo = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();
    const loginPath = location.pathname === "/login" ? true : false;

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
                    loginPath ?
                        <></> :
                        <button type="button" onClick={() => navigate("/login")}>Login</button>
            }
        </div>
    )

}