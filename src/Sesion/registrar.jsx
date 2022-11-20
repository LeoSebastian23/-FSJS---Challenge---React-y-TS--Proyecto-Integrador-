
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import IniciarSesion from "./iniciarSesion";


function FormularioRegistro() {

  return (
    <div className="contenedor">
      <div className="contenedorRegistro">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Direccion</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Direccion laboral</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Provincia</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>Buenos Aires</option>
                <option>CABA</option>
                <option>Cordoba</option>
                <option>Mendoza</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Acepto" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Registrarse
          </Button>{'    '}{'    '}
        </Form>
      </div>
    </div>
  );
}

export default FormularioRegistro;
