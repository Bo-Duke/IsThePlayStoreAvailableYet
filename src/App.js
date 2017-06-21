import React, { Component } from 'react';
import ChromebookTable from './ChromebookTable';
import styles from './styles';
import tabletojson from 'tabletojson';

class App extends Component {
  componentWillMount() {
    this.state = {
      chromebooksList: [],
      finishedFetch: false,
      filter: '',
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

  handleChange = (event) => {
    this.setState({filter: event.target.value});
  }

  render() {
    return (
      <div style={styles.app}>
        <div style={styles.appHeader}>
          <h2>Is The Play Store Out Yet?</h2>
        </div>
        <div style={styles.appIntro}>
          <input type="text" value={this.state.filter} onChange={this.handleChange} />
          { this.state.finishedFetch ?
            <ChromebookTable
              chromebooksList={this.state.chromebooksList}
              filter={this.state.filter}
            /> : '' }
        </div>
      </div>
    );
  }
}

export default App;
