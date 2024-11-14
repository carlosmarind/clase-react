import { ReactNode } from "react"
import { Accordion, Button, Col, Container, Row, Stack } from "react-bootstrap"
import Form from "react-bootstrap/Form"


export const BootstrapLayout = ({ _children }: { children: ReactNode }) => {
    return (
        <>
            <style>
                {`
                .con-borde {
                    border: 1px solid black;
                
                }
                .btn-estiloso {
                    background-color: #f0f0f0;
                    color: #000;
                    border: 1px solid #000;
                    border-radius: 50px;
                }
                .btn-estiloso:hover{
                    background-color: green;
                    color: blue;
                    }
                `}

            </style>

            <Button variant="estiloso">Mi Boton</Button>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Container row y Cols #1</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col sm lg={6} className="con-borde"> columna 1</Col>
                            <Col sm lg={6} className="con-borde"> columna 2</Col>
                        </Row>
                        <Row>
                            <Col className="con-borde"> columna 1</Col>
                            <Col md="auto" className="con-borde"> columna 2 texto de prueba para hacer mas ancha la columna</Col>
                            <Col className="con-borde"> columna 3</Col>
                        </Row>
                        <h6>Columnas apiladas cuando la resolucion es menor a md</h6>
                        <Row>
                            <Col md className="con-borde"> columna 1</Col>
                            <Col md className="con-borde"> columna 2</Col>
                            <Col md className="con-borde"> columna 3</Col>
                        </Row>
                        <h6>Distrucion  para apilado en caso de mobile y al lado en caso de desktop</h6>
                        <Row>
                            <Col xs={12} md={8} className="con-borde">xs=12 md=8</Col>
                            <Col xs={6} md={4} className="con-borde">xs=6 md=4</Col>
                        </Row>
                        <h6>Columnas parten al 50% en mobile y se distribuyen luego de resoluciones superiores a md</h6>
                        <Row>
                            <Col xs={6} md={4} className="con-borde">xs=6 md=4</Col>
                            <Col xs={6} md={4} className="con-borde">xs=6 md=4</Col>
                            <Col xs={6} md={4} className="con-borde">xs=6 md=4</Col>
                        </Row>
                        <h6>offset y span</h6>
                        <Row>
                            <Col md={4} className="con-borde">md=4</Col>
                            <Col md={{ span: 4, offset: 5 }} className="con-borde"> span: 4, offset: 4</Col>
                        </Row>
                        <Row>
                            <Col sm={{ span: 3 }} md={{ span: 3, offset: 3 }} className="con-borde">{`md={{ span: 3, offset: 3 }}`}</Col>
                            <Col sm={{ span: 3, offset: 3 }} md={{ span: 3, offset: 3 }} className="con-borde">{`md={{ span: 3, offset: 3 }}`}</Col>
                        </Row>
                        <h6>Definicion en la fila y no en la columna</h6>
                        <Row xs={1} md={3} lg={6}>
                            <Col className="con-borde"> columna 1</Col>
                            <Col className="con-borde"> columna 2</Col>
                            <Col className="con-borde"> columna 3</Col>
                            <Col className="con-borde"> columna 4</Col>
                            <Col className="con-borde"> columna 5</Col>
                            <Col className="con-borde"> columna 6</Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Stacks</Accordion.Header>
                    <Accordion.Body>
                        <h6>Stacks</h6>
                        <h6> espacio entre elementos apilados en vertical</h6>
                        <Stack gap={1}>
                            <div className="con-borde">Primer elemento</div>
                            <div className="con-borde">Primer elemento</div>
                            <div className="con-borde">Primer elemento</div>
                        </Stack>
                        <h6> elementos apilados en horizontal</h6>
                        <Stack direction="horizontal" gap={1}>
                            <div className="con-borde">Primer elemento</div>
                            <div className="con-borde">Primer elemento</div>
                            <div className="con-borde">Primer elemento</div>
                        </Stack>
                        <h6> Botones que en resolucion mayor a sm ocupan 3 espacios y se centran</h6>
                        <Stack gap={2} className="col-sm-3 mx-auto">
                            <Button variant="secondary">Save changes</Button>
                            <Button variant="outline-secondary">Cancel</Button>
                        </Stack>
                        <h6> Formulario en linea</h6>
                        <Stack direction="horizontal" className="col-md-6 mx-auto" gap={3}>
                            <Form.Control placeholder="First name" className="me-auto" />
                            <Button type="submit">Enviar</Button>
                            <div className="vr" />
                            <Button variant="outline-danger">Reset</Button>
                        </Stack>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
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