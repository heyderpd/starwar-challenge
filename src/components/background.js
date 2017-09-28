import React, { Component } from 'react'
import classNames from 'classnames'
import { WindowResizeListener } from 'react-window-resize-listener'

import skyGenerator from '../commons/skyGenerator'

class Background extends Component {
  render() {
    return (
      <div>
        <WindowResizeListener onResize={({windowHeight, windowWidth}) => skyGenerator(windowHeight, windowWidth)} />
        <div id="warpSky" className={classNames(this.props.warp ? 'warp' : 'normal')}>
        </div>
      </div>
    )
  }
}

export default Background
