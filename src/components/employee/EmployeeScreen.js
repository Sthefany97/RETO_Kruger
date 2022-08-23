import { useContext } from "react"
import { helpHttp } from "../../helpers/helpHttp"
import { useForm } from "../../hooks/useForm"
import { UserContext } from "../admin/UserContext"

import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

export const EmployeeScreen = () => {
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();
    let initialState = user;
    const api = helpHttp();
    let url = "http://localhost:5000/usuario";
    const validateForm = () =>{};
    const [ formValues, handleInputChange, 
            setValues, handleInputBlur, error, setError ] = useForm(initialState,validateForm);
    let styles = {
        color:"red",
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
        updateData(formValues);
    };
    const getSelectValue1 = ({target}) => {
        formValues.vacuna = target.value
    }
    const getSelectValue2 = ({target}) => {
        formValues.tipo_vacuna = target.value
    }
    const logOut = () => {
        setUser({})
        navigate('/',{
            replace:true
        })
    }

    const updateData = (data) => {
        let endpoint = `${url}/${data.id}`
        let options = {
            body:data,
            headers: {'Content-Type':'application/json'}
        }
        api.put(endpoint, options).then(res => {
            if (!res.err){
                console.log('Usuario creado')
                // setError({'message': 'Se ha creado correctamente','type':'success'})
                Swal.fire('Success', 'Actualizado','success');
            }else{
                // setError({'message': 'No se ha podido crear','type':'error'})
                Swal.fire('Error', res.status+': '+res.statusText,'error');
                console.log('No se ha permitido crear')
            }
        })
    }

    return (
        <>
        {/* <h1> Datos personales</h1> */}
        <section id="multiple-column-form">
            <div className="row match-height">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Datos personales</h4>
                        </div>
                        <div className="card-content">
                            <div className="card-body">
                                <form className="form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label>Cédula</label>
                                                <input 
                                                    type="text" id="cedula" className="form-control"
                                                    placeholder="Ej. 1234567890" name="cedula" 
                                                    value={formValues.cedula} onChange={handleInputChange}
                                                    />
                                                {error.cedula && <p style={styles}>* {error.cedula}</p>}
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label >Nombres</label>
                                                <input type="text" id="nombres" className="form-control"
                                                    placeholder="Ej. Maria Laura" 
                                                    name="nombres" value={formValues.nombres} 
                                                    onChange={handleInputChange}
                                                    />
                                                    {error.nombres && <p style={styles}>* {error.nombres}</p>}
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label >Apellidos</label>
                                                <input type="text" id="apellidos" className="form-control"
                                                    placeholder="Ej. Caiza Ibarra" name="apellidos" 
                                                    value={formValues.apellidos} onChange={handleInputChange}
                                                    />
                                                    {error.apellidos && <p style={styles}>* {error.apellidos}</p>}
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label >Correo Electrónico</label>
                                                <input type="email" id="correo" className="form-control"
                                                    name="correo" value={formValues.correo} 
                                                    placeholder="Ej. m_caiza2@kruger.com" onChange={handleInputChange}
                                                    />
                                                    {error.correo && <p style={styles}>* {error.correo}</p>}
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label >Fecha de nacimiento</label>
                                                <input type="date" id="fecha_nacimiento" className="form-control"
                                                    name="fecha_nacimiento" value={formValues.fecha_nacimiento} 
                                                    onChange={handleInputChange}    
                                                    />
                                                    {error.fecha_nacimiento && <p style={styles}>* {error.fecha_nacimiento}</p>}
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label >Dirección de domicilio</label>
                                                <input type="text" id="direccion" className="form-control"
                                                    name="direccion" value={formValues.direccion} 
                                                    placeholder="Ej. Oe6-92 y Calle 4" onChange={handleInputChange}
                                                    />
                                                    {error.direccion && <p style={styles}>* {error.direccion}</p>}
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label >Teléfono móvil</label>
                                                <input type="text" id="movil" className="form-control"
                                                    name="movil" value={formValues.movil} 
                                                    placeholder="Ej. jm_caiza@kruger.com" onChange={handleInputChange}
                                                    />
                                                    {error.movil && <p style={styles}>* {error.movil}</p>}
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label >Estado de Vacunación</label>
                                                    <select className="form-select" id="vacuna" 
                                                            defaultValue={formValues.vacuna} onChange={getSelectValue1} >
                                                        <option value="si">Si</option>
                                                        <option value="no">No</option>
                                                    </select>
                                                    {error.vacuna && <p style={styles}>* {error.vacuna}</p>}
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label >Tipo de Vacuna</label>
                                                    <select className="form-select" id="tipo_vacuna" 
                                                            defaultValue={formValues.tipo_vacuna}
                                                            onChange={getSelectValue2} >
                                                        <option value="Ninguna">Ninguna</option>
                                                        <option value="Sputnik">Sputnik</option>
                                                        <option value="Pfizer">Pfizer</option>
                                                        <option value="AstraZeneca">AstraZeneca</option>
                                                        <option value="Jhonson&Jhonson">Jhonson&Jhonson</option>
                                                    </select>
                                                    {error.tipo_vacuna && <p style={styles}>* {error.tipo_vacuna}</p>}
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label >Fecha de Vacunación</label>
                                                <input type="date" id="fecha_vacuna" className="form-control"
                                                    name="fecha_vacuna" value={formValues.fecha_vacuna}
                                                    onChange={handleInputChange}
                                                    />
                                                    {error.fecha_vacuna && <p style={styles}>* {error.fecha_vacuna}</p>}
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label >Número de Dosis</label>
                                                <input type="number" id="dosis" className="form-control"
                                                    name="dosis" value={formValues.dosis} 
                                                    placeholder="Ej. 2" onChange={handleInputChange}
                                                    />
                                                    {error.dosis && <p style={styles}>* {error.dosis}</p>}
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex justify-content-end">
                                            <button type="submit"
                                                className="btn btn-primary me-1 mb-1">Actualizar</button>
                                            <button type="button"
                                                className="btn btn-danger" onClick={logOut}>Salir</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}