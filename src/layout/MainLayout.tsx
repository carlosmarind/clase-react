interface MainLayoutProps {
    children: React.ReactNode;
    elemento: string
}

export const MainLayout = (props: MainLayoutProps) => {
    return (
        <div>
            <header>
                <h1>Header</h1>
            </header>
            <main data-type={props.elemento}>
                {props.children}
            </main>
            <footer>
                <h1>Footer</h1>
            </footer>
        </div>
    )
};