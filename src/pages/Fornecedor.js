import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import ButtonIcon from "../components/Button/ButtonIcon";

export default function Fornecedor({navigation}) {
  return(
    <View style={styles.container}>
     <View style={styles.containerButton}>
        <ButtonIcon
          onPress={() => navigation.navigate("Novo Fornecedor")}
        >
          <Octicons name="plus" size={20} color="#fff" />
        </ButtonIcon>
      </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0EFF4",
    padding: 10,
  },
  containerButton: {
    position: "absolute",
    bottom: 20,
    right: 10,
    alignItems: "center",
  },
});