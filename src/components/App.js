import { Container } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SafePage from "./SafePage";
import "./App.css"

function App() {
  return (
    <Container fluid className="p-0 App">
      <SafePage />
      <ToastContainer autoClose={3000} hideProgressBar />
    </Container>
  );
}

export default App;
