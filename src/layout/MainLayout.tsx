import { Link } from "react-router-dom";
import { UserInfo } from "../components/UserInfo";

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
    return (
        <div >
            <header >
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/personajes">Personajes</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <UserInfo />
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <h1>Footer</h1>
            </footer>
        </div>
    )
};