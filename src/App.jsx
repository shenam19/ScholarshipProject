import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScholarshipTypes from "./components/ScholarshipTypes";
import CTAScholarships from "./components/CTAScholorships";
import ScholarshipBenifits from "./components/ScholarshipBenifits";
import Blogs from "./components/Blogs";
import AdmissionGuidence from "./components/AdmissionGuidence";
import Footer from "./components/Footer";

import "./App.css";
import DalaiLamaTrustScholarship from "./components/DalaiLamaTrustScholarship";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScholarshipBenifits />
      <ScholarshipTypes />
      <CTAScholarships />
      <Blogs />
      <AdmissionGuidence />
      <Footer />
    </>
  );
}

export default App;
