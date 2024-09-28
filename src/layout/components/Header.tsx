import { Link } from "react-router-dom"
import { LoginButton } from "../../components/LoginButton"
import styles from "./Header.module.css"
import { useEffect, useState } from "react";
import { isAuth } from "../../services/login/loginService";

export const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        setIsLoggedIn(isAuth())
    }, []);

    return (
        <header className={styles.header}>
            <ul className={styles.links}>
                <li><Link className={styles.link} to="/">Home</Link></li>
                <li><Link className={styles.link} to="/personajes">Personajes</Link></li>
                { !isLoggedIn && <li><Link className={styles.link} to="/dashboard">Dashboard</Link></li> }
                <li><Link className={styles.link} to="/posts">Posts</Link></li>
                <li><Link className={styles.link} to="/admin">Admin</Link></li>
                <li><Link className={styles.link} to="/about">About</Link></li>
            </ul>
            <LoginButton />
        </header>
    )
}