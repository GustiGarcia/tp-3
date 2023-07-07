import React, { useState } from 'react';

export const LoginComponent: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = (event: React.FormEvent) => { event.preventDefault();
    alert(`Nombre de usuario: ${usuario}\nContraseña: ${contrasena}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usuario">Username:</label>
        <input
          type="text"
          id="usuario"
          value={usuario}
          onChange={(event) => setUsuario(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="contrasena">Password:</label>
        <input
          type="contrasena"
          id="contrasena"
          value={contrasena}
          onChange={(event) => setContrasena(event.target.value)}
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
};

