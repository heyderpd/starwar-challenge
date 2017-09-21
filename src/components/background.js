import React, { Component } from 'react'
import classNames from 'classnames'
import { WindowResizeListener } from 'react-window-resize-listener'

import skyGenerator from '../commons/skyGenerator'

class Background extends Component {

  state = {
    warp: false
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.warp && !this.state.warp) {
      this.setState({
        warp: true
      })
      setTimeout(() => {
        this.setState({ warp: false })
      }, 1000)
    }
  }

  updateDimensions() {
    console.log('updateDimensions')
  }

  render() {
    return (
      <div>
        <WindowResizeListener onResize={({windowHeight, windowWidth}) => skyGenerator(windowHeight, windowWidth)} />
        <div id="warpSky" className={classNames(this.state.warp ? 'warp' : 'normal')}>
        </div>
      </div>
    )
  }
}

export default Background
