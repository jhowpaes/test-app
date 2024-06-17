import Realm from "realm";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AccountInformationScreen,
  ChatScreen,
  HomeScreen,
  InviteFriendsScreen,
  PreferencesScreen,
} from "@screens";
import { AppTab } from "./AppTab";

export type AppStackParamList = {
  TabNavigation: undefined;
  PreferencesScreen: undefined;
  AccountInformationScreen: undefined;
  InviteFriendsScreen: undefined;
  ChatScreen: { chatId: Realm.BSON.ObjectId | null };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="TabNavigation"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="TabNavigation" component={AppTab} />
      <Stack.Screen name="PreferencesScreen" component={PreferencesScreen} />
      <Stack.Screen
        name="AccountInformationScreen"
        component={AccountInformationScreen}
      />
      <Stack.Screen
        name="InviteFriendsScreen"
        component={InviteFriendsScreen}
      />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
}
