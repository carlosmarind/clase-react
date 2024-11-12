import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";

interface BoostrapLayoutProps {
    children: React.ReactNode;
}

export const BoostrapLayout = (_props: BoostrapLayoutProps) => {
    return (
        <Container fluid>
            <Row>
                <Col xs={6} sm={3} md={9} lg={6} style={{ border: "1px solid black" }}>1 of 2</Col>
                <Col xs={6} sm={9} md={3} lg={6} style={{ border: "1px solid black" }}>2 of 2</Col>
            </Row>
            <Row>
                <Col style={{ border: "1px solid black" }}>1 of 3</Col>
                <Col style={{ border: "1px solid black" }}>2 of 3</Col>
                <Col style={{ border: "1px solid black" }}>3 of 3</Col>
            </Row>
            <Row>
                <Col style={{ border: "1px solid black" }}>1 of 3</Col>
                <Col md="auto" style={{ border: "1px solid black" }}>Esta caja variara su tamaño dependiendo del contenido</Col>
                <Col xs lg={3} style={{ border: "1px solid black" }}>2 of 3</Col>
            </Row>
            <Row>
                <Col md style={{ border: "1px solid black" }}>1 of 3</Col>
                <Col md style={{ border: "1px solid black" }}>2 of 3</Col>
                <Col md style={{ border: "1px solid black" }}>3 of 3</Col>
            </Row>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col xs={12} md={8} style={{ border: "1px solid black" }}>
                    xs=12 md=8
                </Col>
                <Col xs={6} md={4} style={{ border: "1px solid black" }}>
                    xs=6 md=4
                </Col>
            </Row>
            <h6>Columnas que parten al 50% de ancho en mobile y suben al 33% de ancho en escritorio</h6>
            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <Row>
                <Col xs={6} md={4}>
                    xs=6 md=4
                </Col>
                <Col xs={6} md={4}>
                    xs=6 md=4
                </Col>
                <Col xs={6} md={4}>
                    xs=6 md=4
                </Col>
            </Row>
            <h6>columnas siempre al 50% de ancho en mobile y desktop</h6>
            {/* Columns are always 50% wide, on mobile and desktop */}
            <Row>
                <Col xs={6}>xs=6</Col>
                <Col xs={6}>xs=6</Col>
            </Row>
            <h6>Columns con offset</h6>
            <Row>
                <Col md={4}>md=4</Col>
                <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
            </Row>
            <Row>
                <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
                <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
            </Row>
            <h6>ancho segun la fila y no la columna</h6>
            <Row xs={1} md={2} lg={3} >
                <Col style={{ border: "1px solid black" }}>1 of 2</Col>
                <Col style={{ border: "1px solid black" }}>2 of 2</Col>
                <Col style={{ border: "1px solid black" }}>2 of 2</Col>
            </Row>
            {
                //<Row xs={1} md={2}>
                //    <Col style={{ border: "1px solid black" }}>1 of 3</Col>
                //    <Col style={{ border: "1px solid black" }}>2 of 3</Col>
                //    <Col style={{ border: "1px solid black" }}>3 of 3</Col>
                //</Row>
                //<Row xs="auto">
                //    <Col style={{ border: "1px solid black" }}> 1 of 3</Col>
                //    <Col style={{ border: "1px solid black" }}>2 of 3</Col>
                //    <Col style={{ border: "1px solid black" }}>3 of 3</Col>
                //</Row>
            }
            <h6>Probando stacks</h6>
            <Stack gap={3}>
                <div className="p-2">First item</div>
                <div className="p-2">Second item</div>
                <div className="p-2">Third item</div>
            </Stack>
            <h6>En direccion horizontal</h6>
            <Stack direction="horizontal" gap={3}>
                <div className="p-2">First item</div>
                <div className="p-2 ms-auto">Second item</div>
                <div className="vr" />
                <div className="p-2">Third item</div>
            </Stack>
            <h6>Con botones</h6>
            <Stack gap={2} className="col-sm-3 mx-auto">
                <Button variant="secondary">Save changes</Button>
                <Button variant="outline-secondary">Cancel</Button>
            </Stack>
            <h6>Ejemplo de formulario inline con stack</h6>
            <Stack direction="horizontal" className="col-md-6 mx-auto" gap={3}>
                <Form.Control className="me-auto" placeholder="Add your item here..." />
                <Button variant="secondary">Submit</Button>
                <div className="vr" />
                <Button variant="outline-danger">Reset</Button>
            </Stack>
        </Container>
    )
}