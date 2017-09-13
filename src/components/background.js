import React from 'react'

import sky from '../images/sky.jpg'
import zoom from '../images/zoom.jpg'

const LightTravel = () => (
  <svg>
    <defs>
      <filter id="zoom" x="0" y="0" width="100%" height="100%">
        <feImage xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={zoom} result="zoom"></feImage>
        <feBlend in="SourceGraphic" in2="zoom" mode="lighten"></feBlend>
      </filter>''
    </defs>
  </svg>
)

const Background = () => (
  <div>
    <LightTravel />
    <img src={sky} className="background" />
  </div>
)

export default Background
