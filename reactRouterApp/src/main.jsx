import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Github from "./components/Github/Github";
import User from "./components/User/User";

// can create route many ways there are two ways to create roots
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children:[
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'About',
//         element: <About />
//       },
//       {
//         path: 'Contact',
//         element: <Contact />
//       },
//       {
//         path: 'Github',
//         element: <Github />
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="" element={<Home />} />
    <Route path="About" element={<About />} />
    <Route path="Contact" element={<Contact />} />
    <Route loader={githubInfoLoader} path="Github" element={<Github />} />
    <Route path="User/:userId" element={<User />} />
  </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
