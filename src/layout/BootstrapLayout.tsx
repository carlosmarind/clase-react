import { ReactNode } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

export const BootstrapLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>{children}</Col>
                    <Col md={2}></Col>
                </Row>
                <Row className="fixed-bottom justify-content-center">
                    <Footer />
                </Row>
            </Container>
        </>
    )
}

//breakpoints
//X-Small			None | xs	<576px
//Small			    sm	        ≥576px
//Medium			md	        ≥768px
//Large			    lg	        ≥992px
//Extra large		xl	        ≥1200px
//Extra extra large	xxl	        ≥1400px