import "./App.css";
import "./Components/ui.scss";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Sections/MainSection/pages/HomePage/Home";
import { Route, Routes } from "react-router";
import About from "./Sections/MainSection/pages/AboutPage/About";
import Career from "./Sections/MainSection/pages/CareerPage/Career";
import Footer from "./Components/Footer/Footer";
import Cooperation from "./Sections/MainSection/pages/CooperationPage/Cooperation";
import Contact from "./Sections/MainSection/pages/ContactPage/Contact";
import Purchases from "./Sections/MainSection/pages/PurchasesPage/Purchases";
import Engineering from "./Sections/ServiceSection/pages/EngineeringPage/Engineering";
import Household from "./Sections/ServiceSection/pages/HouseholdPage/Household";
import Catering from "./Sections/ServiceSection/pages/Catering/Catering";
import Transportation from "./Sections/ServiceSection/pages/Transportation/Transportation";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/cooperation" element={<Cooperation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/household" element={<Household />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/transportation" element={<Transportation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
