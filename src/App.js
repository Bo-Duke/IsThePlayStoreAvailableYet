import React, { Component } from 'react';
import ChromebookTable from 'ChromebookTable';
import styles from './styles';
import tabletojson from 'tabletojson';

class App extends Component {
  componentWillMount() {
    const chromebooks = [];
    tabletojson.convertUrl(
      'http://www.chromium.org/chromium-os/chrome-os-systems-supporting-android-apps',
      {useFirstRowForHeadings: false},
      function (tablesAsJson) {
        tablesAsJson[3].forEach((cb) => {
          if (cb[0] !== 'Manufacturer') {
            if (Object.keys(cb).length === 3) {
              chromebooks.push({Manufacturer: cb[0], Chromebook: cb[1], status: cb[2]});
            } else {
              const manu = chromebooks[chromebooks.length - 1].Manufacturer;
              chromebooks.push({Manufacturer: manu, Chromebook: cb[0], status: cb[1]});
            }
          }
        });
        this.chromebooksList = chromebooks;
      }
    );
  }
  render() {
    return (
      <div style={styles.app}>
        <div style={styles.appHeader}>
          <h2>Is The Play Store Out Yet?</h2>
        </div>
        <div style={styles.appIntro}>
          <input type="text"/>
          <table>
            <ChromebookTable chromebooksList={this.chromebooksList} />
          </table>
        </div>
      </div>
    );
  }
}

export default App;
