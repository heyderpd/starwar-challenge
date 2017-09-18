import React from 'react'
import classNames from 'classnames'

import Loading from './loading'

const Button = ({ disabled, children, onClick }) => (
  <button
    className={classNames('nextPlanet', disabled && '--disabled')}
    disabled={!!disabled}
    onClick={onClick}
  >
    { disabled
      ? (<Loading/>)
      : children }
  </button>
)

export default Button
