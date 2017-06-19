const ChromebookTable = (props) => {
  return (
    <table>
      {props.chromebooksList.map(cb => {
        return (
          <tr>
            <td>{cb[0]}</td>
            <td>{cb[1]}</td>
            <td>{cb[2]}</td>
          </tr>
        );
      })}
    </table>
  )
};

export default ChromebookTable;