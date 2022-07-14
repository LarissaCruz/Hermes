import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Cliente from "../pages/Cliente";
import Pedidos from "../pages/Pedido";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Cliente" component={Cliente} />
      <Drawer.Screen name="Pedidos" component={Pedidos} />
    </Drawer.Navigator>
  );
}
