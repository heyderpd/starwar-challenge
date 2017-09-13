import React from 'react'
import classNames from 'classnames'

import Loading from './loading'

const Button = props => (
  <button
    className={classNames('nextPlanet', props.disabled && '--disabled')}
    disabled={!!props.disabled}
  >
    <Loading/>
  </button>
)

export default Button
