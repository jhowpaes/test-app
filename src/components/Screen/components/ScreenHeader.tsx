import { useAppSafeArea } from "@hooks";
import { Box, BoxProps, PressableBox } from "../../Box/Box";
import { Icon, IconProps } from "../../Icon/Icon";
import { Text } from "../../Text/Text";
import { useNavigation } from "@react-navigation/native";

export type HeaderProps = {
  title: string;
  options?: IconProps;
  canGoBack?: boolean;
};

export function Header({ title, options, canGoBack }: HeaderProps) {
  const { top } = useAppSafeArea();
  const navigation = useNavigation();

  return (
    <Box
      pb="s10"
      mb="s10"
      paddingHorizontal="s24"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      gap="s8"
      style={{ paddingTop: top }}
    >
      <Box width="10%">
        {canGoBack && (
          <PressableBox
            width={40}
            height={40}
            backgroundColor="grayWhite"
            borderRadius="s16"
            alignItems="center"
            justifyContent="center"
            onPress={navigation.goBack}
          >
            <Icon name="caretLeft" color="backgroundContrast" />
          </PressableBox>
        )}
      </Box>
      <Box width="80%" alignItems="center">
        <Text preset="paragraphLarge" color="backgroundContrast" semiBold>
          {title}
        </Text>
      </Box>
      <Box width="10%">{options && <Icon {...options} />}</Box>
    </Box>
  );
}
