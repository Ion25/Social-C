import{Routes, Route, Navigate} from "react-router-dom";
import Chat from "./paginas/chat";
import Login from "./paginas/login";
import Registro from "./paginas/registro";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./componentes/NavBar";
function App() {

  return (
    <>
    <NavBar />
    <Container >
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      </Container>  
    </>
  );
}

export default App
