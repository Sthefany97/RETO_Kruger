import { useState } from "react"
import { UserContext } from "./components/admin/UserContext"
import {
    AppRouters
} from "./routers/AppRouters"


export const Vaccinate = () => {
    const [user, setUser] = useState({});
    const [editData, setEditData] = useState(null)
    return ( 
        <UserContext.Provider value={{
            user,
            setUser,
            editData,
            setEditData
        }}>
            <AppRouters / >
        </UserContext.Provider>
    )
}