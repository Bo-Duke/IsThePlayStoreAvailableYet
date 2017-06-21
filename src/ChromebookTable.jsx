import React from 'react';

const ChromebookTable = (props) => {
  return (
    <table>
      <tbody>
        {props.chromebooksList.filter(cb =>
          `${cb.Manufacturer} ${cb.Chromebook}`.toLowerCase().includes(props.filter.toLowerCase())
        ).map(cb => {
          return (
            <tr>
              <td>{cb.Manufacturer}</td>
              <td>{cb.Chromebook}</td>
              <td>{cb.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
};

export default ChromebookTable;