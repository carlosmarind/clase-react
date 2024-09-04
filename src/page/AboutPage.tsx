import { MainLayout } from "../layout/MainLayout"
interface AboutPageProps {
    title: string;
}
export const AboutPage = (props:AboutPageProps) => {

    document.title = props.title;
    
    return (
        <MainLayout>
            <h3>About</h3>
            <p>This is the about page</p>
        </MainLayout>
    )
}
