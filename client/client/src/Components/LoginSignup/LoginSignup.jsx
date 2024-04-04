import React from "react";
import "./LoginSignup.css";
import icon_Usuario from "./img/usuario.png";
import icon_Usuario2 from "./img/usuario2.png";
import icon_Contraseña from "./img/contrasena.png";
const LoginSignup = () => {
    return (
          <div className="bg-info vh-100 d-flex justify-content-center ">         
            <div className='form-group bg-white p-3 rounded-5 '>   
           <div className="text-info ">
           <img src={icon_Usuario2} alt="" className="img-icons" />
           <h1 className="titulo">Login</h1>
           </div>
            <div className='container d-flex '>
                <img src={icon_Usuario} alt=""  className="icons"/>
                <input type="text" placeholder="Usurio" />
                </div>
            <div className="container d-flex">
            <img src={icon_Contraseña} alt=""  className="icons"/>
                <input type="password" placeholder="Contraseña"/>
            </div>
          
            <button className='btn bg-info text-white'>Iniciar seción</button>
            </div>
        </div>

     
    )
}
export default LoginSignup