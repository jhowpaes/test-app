import React from "react";
import { Box } from "../Box/Box";
import { Text } from "../Text/Text";
import userImg from "../../assets/imgs/Avatar.png";
import botImg from "../../assets/imgs/Brainbox.png";
import { Image } from "react-native";
import { Icon } from "../Icon/Icon";

interface ChatBubbleProps {
  message: string;
  sender: "user" | "bot";
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message, sender }) => {
  return (
    <Box
      margin="s10"
      padding="s10"
      backgroundColor={sender === "user" ? "gray4" : "gray5"}
      borderRadius="s16"
      alignSelf={sender === "user" ? "flex-end" : "flex-start"}
    >
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="s10"
      >
        <Image
          source={sender === "user" ? userImg : botImg}
          style={{
            width: 37,
            height: 37,
            borderRadius: 10,
          }}
          resizeMode="cover"
        />
        <Icon name="pencilSimple" color="gray3" />
      </Box>
      <Text preset="paragraphCaption" color="gray7">
        {message}
      </Text>
    </Box>
  );
};
