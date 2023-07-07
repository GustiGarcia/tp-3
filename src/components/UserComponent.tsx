import React from 'react';
export const UserComponent = ({user}: any) => {

  const [nombre, edad, email, direccion, telefono] = user

  return (
    <div>
      <h1>Información del usuario:</h1>
      <p>Nombre: {user.nombre}</p>
      <p>Edad: {user.edad}</p>
      <p>Email: {user.email}</p>
      <p>Direccion: {user.direccion}</p>
      <p>Telefono: {user.telefono}</p>
      
    </div>
  );
};


