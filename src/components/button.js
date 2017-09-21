import React, { Component } from 'react'
import classNames from 'classnames'

import Loading from './loading'

class Button extends Component {
  state = {
    disabled: false
  }

  onClick () {
    if (!this.state.disabled) {
      this.setState({
        disabled: true
      })
      setTimeout(() => {
        this.setState({
          disabled: false
        })
      }, 1500)
      this.props.onClick()
    }
  }

  render() {
    return (
      <button
        className={classNames('nextPlanet font', this.state.disabled && '--disabled')}
        disabled={!!this.state.disabled}
        onClick={this.onClick.bind(this)}
      >
        { this.state.disabled
          ? (<Loading/>)
          : this.props.children }
      </button>
    )
  }
}

export default Button
