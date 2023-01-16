import React, {useCallback, useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import ButtonIcon from "../components/Button/ButtonIcon";
import { useFocusEffect } from "@react-navigation/native";
import CardUsuario from "../components/CardUsuario";
import { buscarFornecedor } from "../service/SQLite/fornecedor";

export default function Fornecedor({navigation, route}) {
  const [data, setData] = useState()

  const buscar = async () => {
    const response = await buscarFornecedor()
    setData(response)
  }
 
   useFocusEffect(
    useCallback(() => {
       buscar();
    }, [])
  )

  return(
    <View style={styles.container}>
      <CardUsuario data={data} params={route?.params} navigation={navigation}/>
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
    backgroundColor: "#fff",
    padding: 10,
  },
  containerButton: {
    position: "absolute",
    bottom: 20,
    right: 10,
    alignItems: "center",
  },
});