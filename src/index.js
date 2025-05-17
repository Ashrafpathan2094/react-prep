import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Fixed import
import App from "./App";
import Blog from "./components/blog";
import Admin from "./components/hooks/Admin";
import CustomHookDemo from "./components/hooks/customHookDemo";
import PrepUseEffect from "./components/hooks/prepUseEffect";
import Login from "./components/login";
import Notification from "./components/notification";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ProtectedRoutes from "./utils/protectedRoutes";

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
          <Route path="/Notification" element={<Notification />} />
        </Routes>
      </Suspense>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
