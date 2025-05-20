import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contacts",
    element: <Contact />,
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>,
);
