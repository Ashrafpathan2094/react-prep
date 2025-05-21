import React from "react";
import AdminLayout from "./adminLayout";

const withAdminLayout = (Component) => {
  return (props) => (
    <AdminLayout>
      <Component {...props} />
    </AdminLayout>
  );
};

export default withAdminLayout;
