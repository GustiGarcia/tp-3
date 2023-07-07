import React from 'react';
import { Saludar } from './Saludar';
import { UserComponent } from './UserComponent';
import { LoginComponent } from './LoginComponent';
import { ClockComponent } from './ClockComponent';
import { ImageComponent } from './ImageComponent';

class Usuario  {
  nombre: string;
  edad: number;
  email: string;
  direccion: string;
  telefono: number;

  constructor (nombre: string, edad: number, email: string, direccion: string, telefono: number) {
    this.nombre = nombre
    this.edad = edad
    this.email = email
    this.direccion = direccion
    this.telefono = telefono
  }
}

const user1 = new Usuario('Franco Maldonado',22,'franco123.as@gmail.com','Faiman 139',2612519364)


export const TrabajoPractico3: React.FC = () => {

  return (
    <div>
      <Saludar nombre="Franco Maldonado"/>
      <UserComponent user={user1} />
      <div>
        <h1>Log In</h1>
        <LoginComponent />
      </div>
      <div>
        <h1>Horario actual:</h1>
        <ClockComponent/>
      </div>
      <div>
      <h1>La albiceleste:</h1>
      <div className="galeria" >
        <ImageComponent src="./img/argVsHol.jpg" alt="img1" />
        <ImageComponent src="./img/agrVsCroa.jpg" alt="img2" />
        <ImageComponent src="./img/argCamp.jpg" alt="img3" />
      </div>
      
    </div>
    </div>
  );
};

