import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  let user = true;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
    