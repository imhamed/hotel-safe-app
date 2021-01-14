import { Container } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SafePage from "./SafePage";

function App() {
  return (
    <Container fluid className="p-0">
      <SafePage />
      <ToastContainer autoClose={3000} hideProgressBar />
    </Container>
  );
}

export default App;
