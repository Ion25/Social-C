import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import {Link} from "react-router-dom";
const NavBar = () => {
    return( 
        <Navbar bg="dark" className="mb-4" style={{height:"3.75rem"}}>
            <Container>
                <h2>
                    <Link to="/" className="name-titulo">Social-C</Link>
                </h2>
                <span className="mensaje-conectado">En linea </span>
                <nav>
                    <Stack direction="horizontal" gap="3">
                        <Link to="/login" className="login">Login</Link>
                        <Link to="/registro" className="login">Registro</Link>
                    </Stack>
                </nav>
            </Container>
        </Navbar>
     );
};
 
export default NavBar;