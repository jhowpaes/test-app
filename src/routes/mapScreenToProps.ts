import { IconProps } from "@components";

import { AppTabParamsList } from "./AppTab";

export const mapScreenToProps: Record<
  keyof AppTabParamsList,
  {
    icon: {
      name: IconProps["name"];
    };
  }
> = {
  HomeScreen: {
    icon: {
      name: "house",
    },
  },
  SharedScreen: {
    icon: {
      name: "dotGroup",
    },
  },
  TimeScreen: {
    icon: {
      name: "clock",
    },
  },
  ProfileScreen: {
    icon: {
      name: "userCircle",
    },
  },
};
