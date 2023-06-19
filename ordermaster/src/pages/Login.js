import { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';
import GoogleLogin from 'react-google-login';
import "./csspages.css";

const Login = () => {
  const clientID = '790692034978-bs8ciougekmeck9te9i2peco90pgskhm.apps.googleusercontent.com';
  const [user, setUser] = useState({});
  const [loggeIn, setLoggetInfo] = useState(false);
  

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientID: clientID,
      });
    };

    gapi.load('client:auth2', start);
  }, []);

  const onSuccess = (response) => {
    setUser(response.profileObj);
    document.getElementsByClassName("btn").hidden = true;
  };

  const onFailure = () => {
    console.log('error fatal');
  };

  const handleLogout  = () => {
    setUser({}); 
  }

  return (
    <div className="body1">
    <div className="center">
      <h1>Login</h1>
      <form className="formulario">
      <label htmlFor="usuario">Usuario:</label>
      <input type="text" id="usuario" name="usuario" />

      <label htmlFor="contrasena">Contraseña:</label>
      <input type="password" id="contrasena" name="contrasena" />

      <button type="submit">Enviar</button>
    </form>
      <div className='btn'>

        <GoogleLogin
         
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText="Continue  with Google"
          cookiePolicy={"single_host_origin"}
        />

      </div>

      <div class={user ? "profile" : "hidden"}>
        <img src={user.imageUrl} />
        <h3>{user.name}</h3>
  
      </div>



    </div>
    </div>
  );
};

export default Login;