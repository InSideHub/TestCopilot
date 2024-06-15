import React, { useState } from 'react';

const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    nro_empleado: '',
    nro_documento: '',
    apellido: '',
    nombre: '',
    telefono: '',
    correo_electronico: '',
    fecha_contratacion: '',
    cargo_id: '',
    sucursal_id: '',
    region_id: '',
    provincia_id: '',
    salario: '',
    descripcion: '',
    descripcion_corta: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement logic to add employee to the database
    console.log(employeeData);
    setEmployeeData({
      nro_empleado: '',
      nro_documento: '',
      apellido: '',
      nombre: '',
      telefono: '',
      correo_electronico: '',
      fecha_contratacion: '',
      cargo_id: '',
      sucursal_id: '',
      region_id: '',
      provincia_id: '',
      salario: '',
      descripcion: '',
      descripcion_corta: ''
    });
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Employee Number:
          <input
            type="text"
            name="nro_empleado"
            value={employeeData.nro_empleado}
            onChange={handleChange}
          />
        </label>
        <label>
          Document Number:
          <input
            type="text"
            name="nro_documento"
            value={employeeData.nro_documento}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="apellido"
            value={employeeData.apellido}
            onChange={handleChange}
          />
        </label>
        <label>
          First Name:
          <input
            type="text"
            name="nombre"
            value={employeeData.nombre}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="telefono"
            value={employeeData.telefono}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="correo_electronico"
            value={employeeData.correo_electronico}
            onChange={handleChange}
          />
        </label>
        <label>
          Hire Date:
          <input
            type="text"
            name="fecha_contratacion"
            value={employeeData.fecha_contratacion}
            onChange={handleChange}
          />
        </label>
        <label>
          Position ID:
          <input
            type="text"
            name="cargo_id"
            value={employeeData.cargo_id}
            onChange={handleChange}
          />
        </label>
        <label>
          Branch ID:
          <input
            type="text"
            name="sucursal_id"
            value={employeeData.sucursal_id}
            onChange={handleChange}
          />
        </label>
        <label>
          Region ID:
          <input
            type="text"
            name="region_id"
            value={employeeData.region_id}
            onChange={handleChange}
          />
        </label>
        <label>
          Province ID:
          <input
            type="text"
            name="provincia_id"
            value={employeeData.provincia_id}
            onChange={handleChange}
          />
        </label>
        <label>
          Salary:
          <input
            type="text"
            name="salario"
            value={employeeData.salario}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="descripcion"
            value={employeeData.descripcion}
            onChange={handleChange}
          />
        </label>
        <label>
          Short Description:
          <input
            type="text"
            name="descripcion_corta"
            value={employeeData.descripcion_corta}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;