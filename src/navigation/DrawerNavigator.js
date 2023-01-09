import * as React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Cliente from "../pages/Cliente";
import { View, StyleSheet } from "react-native";

import { Entypo, FontAwesome5,FontAwesome  } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Title, Paragraph } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import TabViewPedido from "./TabViewPedido";
import Fornecedor from "../pages/Fornecedor";

const Drawer = createDrawerNavigator();
const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView
      contentContainerStyle={styles.containerDrawer}
      {...props}
    >
      <View style={styles.containerHeader}>
        <Title style={styles.title}>Larissa</Title>
        <View style={styles.containerIcon}>
          <Paragraph style={styles.title}>CCM</Paragraph>
          <MaterialIcons name="arrow-drop-down" size={24} color="#fff" />
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
export default function DrawerNavigator(props) {
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
            <View style={styles.navBarIcon}>
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
        name="Fornecedor"
        component={Fornecedor}
        options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesome
              name="building-o"
              size={24}
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

const styles = StyleSheet.create({
  containerHeader: {
    margin: 0,
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
    justifyContent: "flex-end",
    backgroundColor: "#42A4E5",
  },
  containerIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#fff",
  },
  containerDrawer: {
    paddingTop: 0,
  },
  navBarIcon: {
    marginRight: 20,
  },
});
