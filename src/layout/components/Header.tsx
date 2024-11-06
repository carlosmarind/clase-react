import { Link } from "react-router-dom"
import { LoginButton } from "../../components/LoginButton"
import styles from "./Header.module.css"
import { useSelector } from "react-redux"
import { RootType } from "../../states/store"

export const Header = () => {
    const userState = useSelector((state: RootType) => state.loggedUser)
    return (
        <header className={styles.header}>
            <ul className={styles.links}>
                <li><Link className={styles.link} to="/">Home</Link></li>
                <li><Link className={styles.link} to="/personajes">Personajes</Link></li>
                <li><Link className={styles.link} to="/users">Usuarios</Link></li>
                <li><Link className={styles.link} to="/dashboard">Dashboard</Link></li>
                <li><Link className={styles.link} to="/posts">Posts</Link></li>
                <li><Link className={styles.link} to="/admin">Admin</Link></li>
                <li><Link className={styles.link} to="/user-lab">Users Lab</Link></li>
                <li><Link className={styles.link} to="/auth">AuthPage</Link></li>
                <li><Link className={styles.link} to="/about">About</Link></li>
            </ul>
            <span className={styles.counter}>{userState.email}</span>
            <LoginButton />
        </header>
    )
}