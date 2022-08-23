import { Navbar } from "../menubar/menu"
import { ListEmploye } from "./ListaEmpleados"
import { NavLink } from "react-router-dom";

export const AdminScreen = () => {
    const updateData = () => {};
    const deleteData = () => {};
    return (
        <>
        <h1> AdminScreen</h1>
        <Navbar/>
            <div>
                <NavLink
                      className="btn btn-primary"
                      to="/signup_employe"
                    >
                    Empleado nuevo
                </NavLink>
            </div>
            <ListEmploye/>
        </>
    )
}
