import React from 'react';
import './boton.css';

const Boton = (props) => {
  const esOperador = (valor) => {
    return isNaN(valor) && (valor !== '.') & (valor !== '=');
  };
  return (
    <div
      className={`btn-contenedor ${
        esOperador(props.children) ? 'operador' : ''
      }`.trimEnd()}
    >
      {props.children}
    </div>
  );
};

export default Boton;
