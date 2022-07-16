import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistroPedidos from "../pages/RegistroPedidos";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="RegistroPedidos" component={RegistroPedidos} />
    </Stack.Navigator>
  );
}
