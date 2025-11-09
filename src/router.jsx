import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import AboutTeam from "./pages/AboutTeam";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import ServiceArtCuration from "./pages/services/ServiceArtCuration";
import ServiceBranding from "./pages/services/ServiceBranding";
import ServiceFilmProduction from "./pages/services/ServiceFilmProduction";
import Contact from "./pages/Contact";
import App from "./App";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <AboutUs />
      },
      {
        path: "about/team",
        element: <AboutTeam />
      },
      {
        path: "portfolio",
        element: <Portfolio />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "services/art-curation",
        element: <ServiceArtCuration />
      },
      {
        path: "services/branding",
        element: <ServiceBranding />
      },
      {
        path: "services/film-production",
        element: <ServiceFilmProduction />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      
    }
  }
);

export default router;