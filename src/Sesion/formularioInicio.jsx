import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormularioInicioSesion() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su contraseña" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Iniciar Sesión
      </Button>
    </Form>
  );
}

export default FormularioInicioSesion;