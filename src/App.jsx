import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsappWidget from "./components/WhatsappWidget";
import OurBusiness from "./components/OurBusiness";
import Team from "./components/Team"; // <-- import new page
import 'react-whatsapp-widget/dist/index.css';

function App() {
  return (
    <Router>
      <NavBar />
      <WhatsappWidget />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <OurBusiness />
              <Features />
              <Story />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
