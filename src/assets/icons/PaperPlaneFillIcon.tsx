import React from "react";

import { Path, Svg } from "react-native-svg";

import { IconBase } from "../../components/Icon/Icon";

export function PaperPlaneFillIcon({ size = 20, color = "black" }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 256 256">
      <Path
        d="M240,127.89a16,16,0,0,1-8.18,14L63.9,237.9A16.15,16.15,0,0,1,56,240a16,16,0,0,1-15-21.33l27-79.95A4,4,0,0,1,71.72,136H144a8,8,0,0,0,8-8.53,8.19,8.19,0,0,0-8.26-7.47h-72a4,4,0,0,1-3.79-2.72l-27-79.94A16,16,0,0,1,63.84,18.07l168,95.89A16,16,0,0,1,240,127.89Z"
        fill={color}
      />
    </Svg>
  );
}
