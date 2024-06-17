import React from "react";

import { Path, Svg } from "react-native-svg";

import { IconBase } from "../../components/Icon/Icon";

export function CaretLeftIcon({ size = 20, color = "black" }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 256 256">
      <Path
        d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"
        fill={color}
      />
    </Svg>
  );
}
