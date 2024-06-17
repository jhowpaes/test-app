import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function CloseIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 256 256">
      <Path
        d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
        fill={color}
      />
    </Svg>
  );
}
