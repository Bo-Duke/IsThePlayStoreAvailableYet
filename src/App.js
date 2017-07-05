import React, { Component } from 'react'
import ChromebookTable from './ChromebookTable'
import styles from './styles'
import 'whatwg-fetch'

class App extends Component {
  componentWillMount() {
    this.state = {
      chromebooksList: [],
      finishedFetch: false,
      selected: null,
      backgroundColor: '#33a4ff',
    }

    fetch('http://fierce-sea-99727.herokuapp.com/chromebookStatus')
      .then(res => res.json())
      .then(res => {
        this.setState({ chromebooksList: res, finishedFetch: true })
      })
  }

  handleSelect = chromebook => {
    if (chromebook === null) {
      this.setState({
        backgroundColor: '#33a4ff',
        status: '',
      })
    } else if (chromebook.model) {
      this.setState({
        backgroundColor: '#ff3d44',
        status: 'No.',
      })
    } else if (chromebook.status === 'Planned') {
      this.setState({
        backgroundColor: '#ff8324',
        status: "No (but it's planned)",
      })
    } else if (chromebook.status === 'Beta Channel') {
      this.setState({
        backgroundColor: '#c4ff2e',
        status: 'Yes (but on the beta channel)',
      })
    } else if (chromebook.status === 'Stable Channel') {
      this.setState({
        backgroundColor: '#52ff5c',
        status: 'Yes!',
      })
    }
  }

  render() {
    return (
      <div
        style={{ backgroundColor: this.state.backgroundColor, ...styles.app }}
      >
        <div style={styles.appWrapper}>
          <h2>Does the</h2>
          {this.state.finishedFetch
            ? <ChromebookTable
                chromebooksList={this.state.chromebooksList}
                handleSelect={this.handleSelect}
              />
            : ''}
          <h2>have the Play Store yet?</h2>
          <h1>{this.state.status}</h1>
        </div>
      </div>
    )
  }
}

export default App
