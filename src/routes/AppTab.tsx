import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { HomeScreen, ProfileScreen } from "@screens";
import { CustomTabBar } from "./CustomTabBar";

export type AppTabParamList = {
  HomeScreen: undefined;
  SharedScreen: undefined;
  TimeScreen: undefined;
  ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabParamList>();

export function AppTab() {
  function renderTabBar(props: BottomTabBarProps) {
    return <CustomTabBar {...props} />;
  }
  return (
    <Tab.Navigator tabBar={renderTabBar} screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SharedScreen" component={HomeScreen} />
      <Tab.Screen name="TimeScreen" component={HomeScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
