import{Alert, Button, Form, Row, Col,Stack } from "react-bootstrap";

const registro = () => {
    return (
        <>
        <form>
            <Row className="Formulario">
                <Col xs={5}>
                    <Stack gap={3}>
                        <h2>Registro</h2>
                        <Form.Control type="text" placeholder="Nombre"/>
                        <Form.Control type="text" placeholder="Email"/>
                        <Form.Control type="text" placeholder="Contraseña"/>
                        <Button variant="primary" type="submit">Registrar</Button>
                        <Alert variant="danger"><p>Error</p></Alert>
                    </Stack>
                </Col>
            </Row>
        </form></>
    );
}
 
export default registro;