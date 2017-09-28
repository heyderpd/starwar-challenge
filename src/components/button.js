import React, { Component } from 'react'
import classNames from 'classnames'

import Loading from './loading'

class Button extends Component {
  render() {
    return (
      <button
        className={classNames('nextPlanet font', this.props.disabled && '--disabled')}
        disabled={!!this.props.disabled}
        onClick={this.props.onClick}
      >
        { this.props.disabled
          ? (<Loading/>)
          : this.props.children }
      </button>
    )
  }
}

export default Button
