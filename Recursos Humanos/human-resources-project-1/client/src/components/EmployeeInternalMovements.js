import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeInternalMovements = ({ employeeId }) => {
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    const fetchMovements = async () => {
      try {
        const response = await axios.get(`/api/employees/${employeeId}/movements`);
        setMovements(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovements();
  }, [employeeId]);

  return (
    <div>
      <h2>Internal Movements</h2>
      {movements.length > 0 ? (
        <ul>
          {movements.map((movement) => (
            <li key={movement.nro_movimiento}>
              <p>Period: {movement.periodo}</p>
              <p>Previous Position: {movement.cargo_historico}</p>
              <p>Current Position: {movement.cargo_id}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No internal movements found for this employee.</p>
      )}
    </div>
  );
};

export default EmployeeInternalMovements;