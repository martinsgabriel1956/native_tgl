import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import { Authentication } from "../screens/Authentication";
import { Registration } from "../screens/Registration";
import { ResetPassword } from "../screens/ResetPassword";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Authentication" component={Authentication}/>
      <Screen name="Registration" component={Registration}/>
      <Screen name="ResetPassword" component={ResetPassword}/>
    </Navigator>
  );
}
