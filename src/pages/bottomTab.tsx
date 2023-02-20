import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";
import {
  BagIcon,
  BellIcon,
  BigSearchIcon,
  HeartIcon,
  HomeIcon,
} from "../../assets/svg";
import HomePage from "./homePage";

type ComponentIconProps = {
  focused: boolean;
  activeIcon: JSX.Element;
  inacitveIcon: JSX.Element;
};

const RenderComponetIcon = ({
  focused,
  activeIcon,
  inacitveIcon,
}: ComponentIconProps): JSX.Element => {
  return focused ? activeIcon : inacitveIcon;
};

const BottomTab = (): JSX.Element => {
  const Tab = createBottomTabNavigator();
  const Likes = (): JSX.Element => <></>;
  const Search = (): JSX.Element => <></>;
  const Notification = (): JSX.Element => <></>;
  const Cart = (): JSX.Element => <></>;
  return (
    <Tab.Navigator
      initialRouteName="Messages"
      backBehavior="history"
      screenOptions={{
        lazy: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors?.tabBg,
          bottom: 25,
          alignSelf: "center",
          borderRadius: 30,
          position: "absolute",
          right: 12,
          left: 12,
          height: 80,
          paddingTop: 0,
          paddingBottom: 0,
          justifyContent: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) =>
            RenderComponetIcon({
              focused,
              activeIcon: <HomeIcon />,
              inacitveIcon: <HomeIcon />,
            }),
        }}
      />
      <Tab.Screen
        name="Likes"
        component={Likes}
        options={{
          tabBarIcon: ({ focused }) =>
            RenderComponetIcon({
              focused,
              activeIcon: <HeartIcon />,
              inacitveIcon: <HeartIcon />,
            }),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) =>
            RenderComponetIcon({
              focused,
              activeIcon: <BigSearchIcon />,
              inacitveIcon: <BigSearchIcon />,
            }),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) =>
            RenderComponetIcon({
              focused,
              activeIcon: <BellIcon />,
              inacitveIcon: <BellIcon />,
            }),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) =>
            RenderComponetIcon({
              focused,
              activeIcon: <BagIcon />,
              inacitveIcon: <BagIcon />,
            }),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
