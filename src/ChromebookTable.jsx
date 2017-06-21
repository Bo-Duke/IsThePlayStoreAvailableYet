import React from 'react';
import Autocomplete from 'react-autocomplete';
import styles from './styles';

const ChromebookTable = (props) => {
  return (
    <Autocomplete
      getItemValue={(item) => `${item.Manufacturer} ${item.Chromebook}`}
      items={props.chromebooksList}
      renderItem={(item, isHighlighted) =>
        <div style={{ background: isHighlighted ? 'lightgray' : 'white', ...styles.chromebooksAutocomplete }}>
          {`${item.Manufacturer} ${item.Chromebook}`}
        </div>
      }
    />
  )
};

export default ChromebookTable;