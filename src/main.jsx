import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import Club from "./components/Club/Club.jsx";
import Teams from "./components/Teams/Teams.jsx";
import Fixture from "./components/Fixture/Fixture.jsx";
import Standing from "./components/Standings/Standings.jsx";
import Media from "./components/Media/Media.jsx";
import Academy from "./components/Academy/Academy.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/clubs" element={<Club />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/fixture" element={<Fixture />} />
      <Route path="/standings" element={<Standing />} />
      <Route path="/media" element={<Media />} />
      <Route path="/academy" element={<Academy />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
