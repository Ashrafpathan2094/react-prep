import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom"; // Fixed import
import Blog from "./components/blog";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./utils/protectedRoutes";
import Login from "./components/login";
import Admin from "./components/hooks/Admin";
import PrepUseEffect from "./components/hooks/prepUseEffect";
import CustomHookDemo from "./components/hooks/customHookDemo";

const root = ReactDOM.createRoot(document.getElementById("root"));

let user = true; // You may want to replace this with real authentication logic

const Home = React.lazy(() => import("./components/home"));
const ParentComp = React.lazy(() =>
  import("./components/hooks/contextHook/ParentComp")
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Routes for when user is NOT logged in */}
          {!user ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<App />} />
            </>
          ) : (
            <>
              {/* Routes for when the user is logged in */}
              <Route path="/" element={<Home />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/admin" element={<Admin />} />
                <Route path="/useEffect" element={<PrepUseEffect />} />
                <Route path="/useContext" element={<ParentComp />} />
                <Route path="/CustomHookDemo" element={<CustomHookDemo />} />
              </Route>
            </>
          )}
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Suspense>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();