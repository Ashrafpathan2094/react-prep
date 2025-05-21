// AdminLayout.js
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside
        style={{
          width: "200px",
          background: "#333",
          color: "#fff",
          padding: "1rem",
        }}
      >
        <h3>Admin Sidebar</h3>
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Settings</li>
        </ul>
      </aside>
      <main style={{ flex: 1, padding: "1rem" }}>
        <header
          style={{ borderBottom: "1px solid #ccc", marginBottom: "1rem" }}
        >
          <h2>Admin Header</h2>
        </header>
        <div>{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
