import { Link } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown, Form, Button, Image } from "react-bootstrap"

export const Header = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark" expand="md" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#"><Image src="/favicon.ico" thumbnail /><span style={{ marginLeft: "10px", textShadow: "1px 1px 10px #fff" }}>Bootcamp DCC React</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <NavDropdown title="PlayGround">
                            <NavDropdown.Item as={Link} to="/pokemon">Pokemon</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/image-form">Upload Imagenes</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Labs" >
                            <NavDropdown.Item as={Link} to="/labs/api-discovery">API Discovery</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}