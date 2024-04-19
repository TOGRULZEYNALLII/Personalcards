import { BrowserRouter, useRoutes } from "react-router-dom";

import Layout from "./Layout";
import Contact from "./contact/Contact";
import { Suspense } from "react";
import Home from "./Home/Home";
import About from "./About/About";

function App() {
  const Routing = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ];

  const Elements = () => {
    return useRoutes(Routing);
  };
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Elements />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
