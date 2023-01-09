import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistroPedidos from "../pages/RegistroPedidos";
import DrawerNavigator from "./DrawerNavigator";
import { TouchableOpacity, View, Text } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import Catalogo from "../pages/Catalogo";
import RegistroCliente from "../pages/RegistroCliente";
import RegistroFornecedor from "../pages/RegistroFornecedor";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Catálogo"
        component={Catalogo}
        options={{
          headerRight: () => (
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <TouchableOpacity>
                <Fontisto name="more-v-a" size={18} color="#999" />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Orçamento"
        component={RegistroPedidos}
        options={{
          headerStyle: {
            backgroundColor: "#FAFAFA",
          },
          headerRight: () => (
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>SALVAR</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Fontisto name="more-v-a" size={18} color="#999" />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Novo Cliente"
        component={RegistroCliente}
        options={{
          headerStyle: {
            backgroundColor: "#FAFAFA",
          },
          headerRight: () => (
            <View style={{  flexDirection: "row" }}>
              <TouchableOpacity >
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>SALVAR</Text>
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Novo Fornecedor"
        component={RegistroFornecedor}
        options={{
          headerStyle: {
            backgroundColor: "#FAFAFA",
          },
          headerRight: () => (
            <View style={{  flexDirection: "row" }}>
              <TouchableOpacity >
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>SALVAR</Text>
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
