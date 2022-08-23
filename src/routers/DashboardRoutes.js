import { Navbar } from "../components/menubar/menu"
import { Routes, Route, Link } from "react-router-dom";
import { AdminScreen } from "../components/admin/PantallaAdmin";
import { EmployeeScreen } from "../components/employee/EmployeeScreen";
import { RegisterForm } from "../components/admin/FormularioRegistro";

export const DashboardRoutes = () => {
  return (
    <>
        {/* <Navbar/> */}
        <div id="main">
          <Routes>
              <Route path="admin" element={<AdminScreen />} />
              <Route path="employee" element={<EmployeeScreen />} />
              <Route path="signup_employe" element={<RegisterForm />} />
          </Routes>
        </div>
        
    </>
  )
}
