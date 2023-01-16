import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import { useEffect } from "react";
import { criarTabela, deletarTabela } from "./src/service/SQLite/clientes";
import { criarTabelaFornecedor } from "./src/service/SQLite/fornecedor";

export default function App() {
  useEffect(()=>{
    criarTabelaFornecedor();
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
