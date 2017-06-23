import React, { Component } from 'react';
import ChromebookTable from './ChromebookTable';
import styles from './styles';
import tabletojson from 'tabletojson';

class App extends Component {
  componentWillMount() {
    this.state = {
      chromebooksList: [],
      finishedFetch: false,
      selected: null,
    };

    const results = [];

    tabletojson.convertUrl(
      'http://www.chromium.org/chromium-os/chrome-os-systems-supporting-android-apps',
      {useFirstRowForHeadings: false},
      tablesAsJson => {
        tablesAsJson[3].forEach((cb) => {
          if (cb[0] !== 'Manufacturer') {
            if (Object.keys(cb).length === 3) {
              results.push({Manufacturer: cb[0], Chromebook: cb[1], status: cb[2]});
            } else {
              const manu = results[results.length - 1].Manufacturer;
              results.push({Manufacturer: manu, Chromebook: cb[0], status: cb[1]});
            }
          }
        });
        this.setState({ chromebooksList: results, finishedFetch: true });
      }
    );
  }

  handleSelect = (chromebook) => {
    this.setState({ selected: chromebook });
  };

  getSelectedStatus = () => {
    if (!this.state.selected) return '';
    if(this.state.selected.model)
      return 'No.';
    if (this.state.selected.status === 'Planned')
      return 'No (but it\'s planned)';
    if (this.state.selected.status === 'Beta Channel')
      return 'Yes (but on the beta channel)';
    if (this.state.selected.status === 'Stable Channel')
      return 'Yes!';
  };

  render() {
    return (
      <div style={styles.app}>
        <div style={styles.appWrapper}>
          <h2>Does the</h2>
          { this.state.finishedFetch ?
            <ChromebookTable
              chromebooksList={this.state.chromebooksList}
              handleSelect={this.handleSelect}
            /> : '' }
          <h2>have the Play Store yet?</h2>
          <h1>{this.getSelectedStatus()}</h1>
        </div>
      </div>
    );
  }
}

export default App;
