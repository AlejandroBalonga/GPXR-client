import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import LogIn from "./ModalLogIn";

// type Props = {};

function NavBar(/* {}: Props */) {
  return (
    <Navbar sticky="top" expand={"xl"} className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">GPXR</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
        <Navbar.Offcanvas placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>GPXR</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavDropdown title="Proyectos">
                <NavDropdown.Item href="#">Nuevos</NavDropdown.Item>
                <NavDropdown.Item href="#">En desarrollo</NavDropdown.Item>
                <NavDropdown.Item href="#">Finalizados</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Electronica">
                <NavDropdown.Item href="#">Proyectos</NavDropdown.Item>
                <NavDropdown.Item href="#">Modulos</NavDropdown.Item>
                <NavDropdown.Item href="#">Proveedores</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Optica">
                <NavDropdown.Item href="#">Proyectos</NavDropdown.Item>
                <NavDropdown.Item href="#">Diseños</NavDropdown.Item>
                <NavDropdown.Item href="#">Fabricación</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Virtual">
                <NavDropdown.Item href="#">Proyectos</NavDropdown.Item>
                <NavDropdown.Item href="#">Documentación</NavDropdown.Item>
                <NavDropdown.Item href="#">Descargas</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Fabricación">
                <NavDropdown.Item href="#">Maquinas</NavDropdown.Item>
                <NavDropdown.Item href="#">Programas</NavDropdown.Item>
                <NavDropdown.Item href="#">Proveedores</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Futuro">
                <NavDropdown.Item href="#">Objetivos</NavDropdown.Item>
                <NavDropdown.Item href="#">Ideas</NavDropdown.Item>
                <NavDropdown.Item href="#">Ciencia Ficcíon</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Patrocinadores">
                <NavDropdown.Item href="#">Patreons</NavDropdown.Item>
                <NavDropdown.Item href="#">Beneficios</NavDropdown.Item>
                <NavDropdown.Item href="#">Recomendados</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Makers">
                <NavDropdown.Item href="#">Top makers</NavDropdown.Item>
                <NavDropdown.Item href="#">Aportes</NavDropdown.Item>
                <NavDropdown.Item href="#">Beneficios</NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#">Log in</Nav.Link> */}
              <LogIn />
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
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
