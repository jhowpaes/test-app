import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '../../components/Icon/Icon';

export function UserFillIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 0 256 256">
      <Path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z" />
    </Svg>
  );
}
