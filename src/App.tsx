import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/home-page";
import { Desktop } from "./pages/desktop";
import Slide7, { Slide3, Slide4, Slide5, Slide6, Slide8, Slide9 } from "./pages/slides";
import N7Navbar from "./components/n7-navbar";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-1":
        title = "";
        metaDescription = "";
        break;
      case "/slide-3":
        title = "";
        metaDescription = "";
        break;
      case "/slide-4":
        title = "";
        metaDescription = "";
        break;
      case "/slide-5":
        title = "";
        metaDescription = "";
        break;
      case "/slide-6":
        title = "";
        metaDescription = "";
        break;
      case "/slide-7":
        title = "";
        metaDescription = "";
        break;
      case "/slide-8":
        title = "";
        metaDescription = "";
        break;
      case "/slide-9":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <>
      <N7Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/desktop-1" element={<Desktop />} />
        <Route path="/slide-3" element={<Slide3 />} />
        <Route path="/slide-4" element={<Slide4 />} />
        <Route path="/slide-5" element={<Slide5 />} />
        <Route path="/slide-6" element={<Slide6 />} />
        <Route path="/slide-7" element={<Slide7 />} />
        <Route path="/slide-8" element={<Slide8 />} />
        <Route path="/slide-9" element={<Slide9 />} />
      </Routes>
    </>
  );
}
export default App;
