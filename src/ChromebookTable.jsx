import React, { Component } from 'react';
import styles from './styles';

class ChromebookTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      selected: null,
    }
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value, selected: null });
  }

  handleSelect = (chromebook) => {
    this.setState({
      filter: `${chromebook.Manufacturer} ${chromebook.Chromebook}`,
      selected: chromebook,
    });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.filter} onChange={this.handleFilterChange} />
        {this.state.filter.length > 0 && !this.state.selected ?
        <div style={styles.autoCompletionWrapper} >
          {this.props.chromebooksList.filter(cb =>
            `${cb.Manufacturer} ${cb.Chromebook}`.toLowerCase().includes(this.state.filter.toLowerCase())
          ).map(cb => {
            const boundedCb = this.handleSelect.bind(this, cb);
            return (
              <p onClick={boundedCb}>{cb.Manufacturer} {cb.Chromebook}</p>
            );
          })}
        </div> : ''}
      </div>
    )
  }
}

export default ChromebookTable;