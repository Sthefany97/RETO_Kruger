import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { helpHttp } from "../../helpers/helpHttp";
import { useForm } from "../../hooks/useForm";
import { UserContext } from "../admin/UserContext";


export const LoginScreen = () => {
    
    const {user, setUser} = useContext(UserContext)

    const navigate = useNavigate();
    let initialState = {
        usuario:'',
        contrasenia: ''
    }
    

    const validarFormulario = (formValues) => {
        let errors ={}
        if (!formValues.usuario.trim()){
            errors.usuario = 'INGRESE UN USUARIO VALIDO O REGISTRESE';
        }
        if (!formValues.contrasenia.trim()){
            errors.usuario = 'INGRESE UNA CONTRASEÑA VALIDA';
        }
        return errors
    };

    const api = helpHttp();
    let url = "http://localhost:5000/usuario?usuario=";

    const [ formValues, handleInputChange, 
            setValues, handleInputBlur, error, setError ] = useForm(initialState,validarFormulario);
    const handleLogin = async (e) => {
        e.preventDefault();
        const usuario = await api.get(url+formValues.usuario);

        if (usuario.length != 0){
            if (formValues.usuario == usuario[0].usuario && formValues.contrasenia == usuario[0].contrasenia){
                setUser(usuario[0]);
                if (usuario[0].tipo == 'admin'){
                    navigate('admin',{
                        replace:true
                    })
                }else{
                    navigate('employee',{
                        replace:true
                    })
                }
            }
        }


        
    }

    return (
        <>
        <center>

        <div className="container">
        <div className="row h-100">
            <div className="col-lg-11 col-12">
                <div id="auth-left">
                    <div className="auth-logo">
                    </div>
                    <h1 className="auth-title">VACUNACIÓN</h1>
                    <p className="auth-subtitle mb-5">INGRESE LAS CREDENCIALES DE ACCESO A LA APLICACIÓN</p>

                    <form onSubmit={handleLogin}>
                        <div className="form-group position-relative has-icon-left mb-4">
                            <input type="text" className="form-control form-control-xl" 
                                    placeholder="Nombre de Usuario"
                                    value={formValues.usuario}
                                    id="usuario"
                                    name="usuario"
                                    onChange={handleInputChange} />
                            <div className="form-control-icon">
                                <i className="bi bi-person"></i>
                            </div>
                        </div>
                        <div className="form-group position-relative has-icon-left mb-4">
                            <input type="password" className="form-control form-control-xl" 
                                    placeholder="Contraseña" 
                                    id="contrasenia"
                                    name="contrasenia"
                                    value={formValues.contrasenia}
                                    onChange={handleInputChange} />
                            <div className="form-control-icon">
                                <i className="bi bi-shield-lock"></i>
                            </div>
                        </div>
                        <button className=" btn btn-success btn-block btn-lg shadow-lg mt-5" type="submit">Iniciar Sesión</button>
                    </form>
                    <div className="text-center mt-5 text-lg fs-4">
                        <p className="text-gray-600">
                            
                            <a class="btn btn-secondary" role="button" href="auth-register.html">Crear Cuenta</a>
                            
                            </p>
                        <p>
                        <a class="btn btn-outline-primar" role="button" href="auth-forgot-password.html">Recuperar Contraseña</a>
                        </p>
                            
                    </div>
                </div>
            </div>
            <div className="col-lg-7 d-none d-lg-block">
                <div id="auth-right">

                </div>
            </div>
        </div>
        </div>
        </center>
        </>
    )
}