import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function PlusIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 256 256">
      <Path
        d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"
        fill={color}
      />
    </Svg>
  );
}
