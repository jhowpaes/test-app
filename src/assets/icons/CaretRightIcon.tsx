import React from "react";

import { Path, Svg } from "react-native-svg";

import { IconBase } from "../../components/Icon/Icon";

export function CaretRightIcon({ size = 20, color = "black" }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 256 256">
      <Path
        d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"
        fill={color}
      />
    </Svg>
  );
}
