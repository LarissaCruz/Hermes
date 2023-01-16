import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Divider } from "react-native-paper";
import { Octicons } from "@expo/vector-icons";
import CardPedido from "../../components/CardPedido";
import HeaderPedido from "../../components/HeaderPedido";
import ButtonIcon from "../../components/Button/ButtonIcon";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomSheet from "../../components/BottomSheet";
import BottomSheett from "../../components/BottomSheet";


export default function FirstRoute({ navigation }) {
  removeValue = async () => {
    try {
      await AsyncStorage.removeItem('cliente')
      await AsyncStorage.removeItem('fornecedor')
    } catch(e) {
      // remove error
    }
  }
  useFocusEffect(
    React.useCallback(() => {
       removeValue();
    }, [])
  )
  return (
    <View style={styles.container}>
      <HeaderPedido />
      <Divider />
      <CardPedido />
      <View style={styles.containerButton}>
        <ButtonIcon
          navigation={navigation}
          onPress={() => navigation.navigate("Orçamento")}
        >
          <Octicons name="plus" size={20} color="#fff" />
        </ButtonIcon>
      </View>
    </View>
  );
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
