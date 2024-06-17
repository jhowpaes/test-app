import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function MinusIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={35} fill="none" viewBox="0 0 256 256">
      <Path
        d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"
        fill={color}
        stroke-width="4"
        stroke-linecap="round"
      />
    </Svg>
  );
}
