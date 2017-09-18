import React from 'react'
import classNames from 'classnames'

import Loading from './loading'

const Button = ({ disabled, children }) => (
  <button
    className={classNames('nextPlanet', disabled && '--disabled')}
    disabled={!!disabled}
  >
    { disabled
      ? (<Loading/>)
      : children }
  </button>
)

export default Button
