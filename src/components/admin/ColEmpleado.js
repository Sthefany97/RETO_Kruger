import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { helpHttp } from '../../helpers/helpHttp';
import { UserContext } from './UserContext'

export const RowEmploye = ({el, deleteData}) => {
    const navigate = useNavigate();
    let api = helpHttp();
    let url = "http://localhost:5000/usuario";
    const {setEditData} = useContext(UserContext);

    
    const ActualizarDat1 = () => {
        // console.log('hola udpate', el)
        setEditData(el);
        navigate('/signup_employe')
    }
  return (
    <>
        <tr>
            <td className="text-bold-500">{el.cedula}</td>
            <td>{el.nombres}</td>
            <td className="text-bold-500">{el.apellidos}</td>
            <td className="text-bold-500">{el.vacuna}</td>
            <td className="text-bold-500">{el.tipo_vacuna}</td>
            <td className="text-bold-500">{el.usuario}</td>
            <td className="text-bold-500">{el.fecha_vacuna}</td>
            <td className="text-bold-500">
                <button className='btn btn-warning' name="edit_tony" onClick={ActualizarDat1}>
                    Editar
                </button>
                <button className='btn btn-danger' name='delete' onClick={()=>deleteData(el)}>
                    Eliminar
                </button>
            </td>
        </tr>
    </>
  )
}
