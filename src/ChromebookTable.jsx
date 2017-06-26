import React, { Component } from 'react'
import styles from './styles'

class ChromebookTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: '',
      selected: null,
    }
  }

  handleFilterChange = event => {
    this.setState({ filter: event.target.value, selected: null })
    this.props.handleSelect(null)
  }

  handleSelect = chromebook => {
    this.setState({
      filter: `${chromebook.Manufacturer} ${chromebook.Chromebook}`,
      selected: chromebook,
    })
    this.props.handleSelect(chromebook)
  }

  handleSelectInput = () => {
    const selected = { model: this.state.filter }
    this.setState({
      selected,
    })
    this.props.handleSelect(selected)
  }

  renderAutoCompletion = () => {
    if (this.state.filter.length > 0 && !this.state.selected) {
      return this.props.chromebooksList
        .filter(cb =>
          `${cb.Manufacturer} ${cb.Chromebook}`
            .toLowerCase()
            .includes(this.state.filter.toLowerCase()),
        )
        .map(cb => {
          const boundedCb = this.handleSelect.bind(this, cb)
          return (
            <div style={styles.autoCompletionItem} onClick={boundedCb}>
              {cb.Manufacturer} {cb.Chromebook}
            </div>
          )
        })
    } else {
      return ''
    }
  }

  getHeight = () => {
    const nbElement = this.renderAutoCompletion().length
    return nbElement > 8 ? 8 * 45 : (nbElement + 1) * 45
  }

  render() {
    return (
      <div>
        <div style={styles.autoCompletionInputWrapper}>
          <div style={styles.autoCompletionInputBorder} />
          <input
            type="text"
            style={styles.autoCompletionInput}
            value={this.state.filter}
            onChange={this.handleFilterChange}
          />
          <div style={styles.autoCompletionInputBorder} />
        </div>
        <div
          style={
            this.state.filter.length > 0 && !this.state.selected
              ? { ...styles.autoCompletionWrapper, height: this.getHeight() }
              : styles.autoCompletionWrapperHidden
          }
        >
          {this.state.filter.length > 0 &&
            !this.state.selected &&
            <div
              style={styles.autoCompletionItem}
              onClick={this.handleSelectInput}
            >
              {this.state.filter}
            </div>}
          {this.renderAutoCompletion()}
        </div>
      </div>
    )
  }
}

export default ChromebookTable
