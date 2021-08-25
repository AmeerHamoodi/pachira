import "./App.css";

import Container from "./components/Container";

import Partners from "./sections/Partners";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Partners />
        <CTA />
        <Footer />
      </Container>
    </>
  );
}

export default App;
