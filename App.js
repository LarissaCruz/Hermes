import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";

export default function App() {
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
