import React from "react";
import { Box } from "../Box/Box";
import UserAvatar from "../../assets/imgs/Avatar.png";
import { Image } from "react-native";
import { Text } from "../Text/Text";

export function Avatar({}) {
  return (
    <Box alignItems="center">
      <Box>
        <Image
          source={UserAvatar}
          resizeMode="cover"
          style={{
            width: 106,
            height: 112,
            borderRadius: 200,
          }}
        />
        <Box
          top={-30}
          left={85}
          backgroundColor="grayBlack"
          width={20}
          height={20}
          borderRadius="s16"
          borderWidth={2}
          borderColor="grayWhite"
        />
      </Box>
      <Box mt="s12">
        <Text preset="headingMedium">Tom Hillson</Text>
        <Text preset="paragraphSmall">tomhill@mail.com</Text>
      </Box>
    </Box>
  );
}
