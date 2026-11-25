import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrefsProvider from "./i18n/PrefsProvider";
import Layout from "./Components/Layout";
import ScrollToTop from "./Components/ScrollToTop";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Solutions from "./Pages/Solutions";
import Process from "./Pages/Process";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <PrefsProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </PrefsProvider>
  );
}
