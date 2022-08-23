import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../admin/UserContext';

export const Navbar = () => {
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate();
    const logOut = () => {
        setUser({});
        navigate('/',{
            replace:true
        })
    }
    return (
        <>
        <div id="sidebar" className="active">
            <div className="sidebar-wrapper active">
                <div className="sidebar-menu">
                    <ul className="menu">
                        <li className="sidebar-title">Menu</li>

                        <li className="sidebar-item  ">
                            <a href="admin" className='sidebar-link'>
                                <i className="bi bi-grid-fill"></i>
                                <span>Lista</span>
                            </a>
                        </li>
                        <li className="sidebar-item  ">
                            <a onClick={logOut} className='sidebar-link'>
                                <i className="bi bi-grid-fill"></i>
                                <span>Salir</span>
                            </a>
                        </li>

                    </ul>
                </div>
                <button className="sidebar-toggler btn x"><i data-feather="x"></i></button>
            </div>
        </div>
        </>
    )
}