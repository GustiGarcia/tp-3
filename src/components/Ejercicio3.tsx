import React from 'react';
/* import Saludo from './components/tp3/Saludo';
import Usuario from './components/tp3/Usuario';
import Login from './components/tp3/Login';
import Reloj from './components/tp3/Reloj';
import Imagen from './components/tp3/Imagen'; */
import Saludo from './Saludo';
import Usuario from './Usuario';
import Login from './LoginReact';
import Reloj from './Reloj';
import Imagen from './Imagen';

const Ejercicio3: React.FC = () => {
  const usuario = {
    nombre: 'Juan Pablo Avila',
    edad: 51,
    email: 'juan@example.com',
    direccion:'CalleFalsa123',
    telefono: 12345
  };

  return (
    <div>
      <Saludo nombre="Juan Pablo" />
      <Usuario usuario={usuario} />
      <div>
        <h1>Inicio de sesión</h1>
        <Login />
      </div>
      <div>
        <h1>Reloj</h1>
        <Reloj />
      </div>
      <div>
      <h1>Galería de imágenes</h1>
      <div className="galeria" >
        <Imagen src="./img/imagen1.jpg" alt="Imagen 1" />
        <Imagen src="./img/imagen2.jpg" alt="Imagen 2" />
        <Imagen src="./img/imagen3.jpg" alt="Imagen 3" />
      </div>
      
    </div>
    </div>
  );
};

export default Ejercicio3;

