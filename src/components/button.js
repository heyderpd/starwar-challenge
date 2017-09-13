import React from 'react'
import classNames from 'classnames'

const Button = props => (
  <button
    className={classNames('nextPlanet', props.disabled && '--disabled')}
    disabled={!!props.disabled}
  />
)

export default Button
