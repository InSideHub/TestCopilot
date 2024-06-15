import React from 'react';

const EmployeeItem = ({ employee }) => {
  return (
    <div className="employee-item">
      <h3>{employee.nombre} {employee.apellido}</h3>
      <p>Número de empleado: {employee.nro_empleado}</p>
      <p>Número de documento: {employee.nro_documento}</p>
      <p>Teléfono: {employee.telefono}</p>
      <p>Correo electrónico: {employee.correo_electronico}</p>
      <p>Fecha de contratación: {employee.fecha_contratacion}</p>
      <p>Cargo: {employee.descripcion}</p>
      <p>Sucursal: {employee.nombre_sucursal}</p>
      <p>Región: {employee.region_descripcion}</p>
      <p>Provincia: {employee.provincia_nombre}</p>
      <p>Salario: {employee.salario}</p>
    </div>
  );
};

export default EmployeeItem;