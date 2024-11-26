import { BootstrapLayout } from "../layout/BootstrapLayout";
interface AboutPageProps {
    title: string;
}
export const AboutPage = (props: AboutPageProps) => {

    document.title = props.title;

    return (
        <BootstrapLayout>
            <h3>About</h3>
            <p>This is the about page</p>
        </BootstrapLayout>
    )
}
