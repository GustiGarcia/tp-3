import React from 'react';

interface PropsSaludo {
  nombre: string;
}

export const Saludar: React.FC<PropsSaludo> = ({ nombre }) => {
  return (
  <h1> Bienvenido {nombre}, que tengas buen dia! </h1>
  );
};


