import { Outlet } from "react-router-dom";
import { AdminNavbarComponent } from "../components/navbar/admin-navbar";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbarComponent />
      <Outlet />
    </>
  );
};

export default AdminLayout;
