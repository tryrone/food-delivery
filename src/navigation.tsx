import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./pages/bottomTab";
import DishDetail from "./pages/dishDetail";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const Navigation = () => {
  const Stack = createSharedElementStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="dashboard"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="dashboard" component={BottomTab} />
        <Stack.Screen name="dishDetail" component={DishDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
