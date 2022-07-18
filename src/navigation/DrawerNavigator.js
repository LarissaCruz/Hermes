import * as React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Cliente from "../pages/Cliente";
import { View } from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Title, Paragraph } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import TabViewPedido from "./TabViewPedido";

const Drawer = createDrawerNavigator();
const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        paddingTop: 0,
      }}
      {...props}
    >
      <View
        style={{
          margin: 0,
          paddingTop: 20,
          paddingBottom: 10,
          paddingHorizontal: 10,
          justifyContent: "flex-end",
          backgroundColor: "#42A4E5",
        }}
      >
        <Title style={{ color: "#fff" }}>Larissa</Title>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Paragraph style={{ color: "#fff" }}>CCM</Paragraph>
          <MaterialIcons name="arrow-drop-down" size={24} color="#fff" />
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
export default function DrawerNavigator(props) {
  console.log("props", props);
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        drawerActiveTintColor: "black",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Pedido"
        component={TabViewPedido}
        options={{
          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <TouchableOpacity>
                <Entypo name="magnifying-glass" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
          drawerIcon: ({ focused, size }) => (
            <FontAwesome5
              name="clipboard-list"
              size={24}
              color={focused ? "black" : "#888888"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Cliente"
        component={Cliente}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome5
              name="home"
              size={20}
              color={focused ? "black" : "#888888"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Agenda"
        component={Cliente}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome5
              name="calendar-alt"
              size={24}
              color={focused ? "black" : "#888888"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
