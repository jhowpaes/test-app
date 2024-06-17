import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AppStackParamList } from "./AppStack";
import { AppTabParamList } from "./AppTab";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;

export type AppTabScreenProps<RouteName extends keyof AppTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppTabParamList, RouteName>,
    NativeStackScreenProps<AppStackParamList, "TabNavigation">
  >;

export type MergedParamList = AppTabParamList & AppStackParamList;
