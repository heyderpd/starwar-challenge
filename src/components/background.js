import React, { Component } from 'react'
import classNames from 'classnames'
import { WindowResizeListener } from 'react-window-resize-listener'

import skyGenerator from '../commons/skyGenerator'
import { forceResizeEvent } from '../commons/utils'

class Background extends Component {
  componentWillReceiveProps (nextProps) {
    if (!nextProps.warp) {
      forceResizeEvent()
    }
  }

  render() {
    return (
      <div>
        <WindowResizeListener onResize={({windowHeight, windowWidth}) => skyGenerator(windowHeight, windowWidth)} />
        <div id="warpSky" className={classNames(this.props.warp ? 'warp' : 'normal')} />
        <div id="lastSky" className='warp-fade' />
      </div>
    )
  }
}

export default Background
