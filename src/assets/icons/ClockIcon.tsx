import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function ClockIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 256 256">
      <Path
        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"
        fill={color}
      />
    </Svg>
  );
}
