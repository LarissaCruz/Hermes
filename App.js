import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import { useEffect } from "react";
import { criarTabela } from "./src/service/storageSQLite/clientes";

export default function App() {
  useEffect(()=>{
    criarTabela();
  },[])

  return (
    <>
      <StatusBar backgroundColor={"black"} barStyle="default" hidden={false} />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
