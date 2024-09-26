import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import styles from "./MainLayout.module.css";
interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
    return (
        <div className={styles.mainLayout}>
            <Header />
            <main className={styles.main}>
                {props.children}
            </main>
            <Footer />
        </div>
    )
};