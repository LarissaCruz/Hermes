import React, {useEffect, useState, useCallback} from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Octicons } from "@expo/vector-icons";
import ButtonIcon from "../components/Button/ButtonIcon";
import api from "../service/api";
import { buscaUsuario } from "../service/requisicoes/clientes";
import { buscarCliente } from "../service/SQLite/clientes";
import { useFocusEffect } from '@react-navigation/native';
import CardUsuario from "../components/CardUsuario";

export default function Cliente({route, navigation}) {
  const [data, setData] = useState()
  const buscar = async () => {
   const response = await buscarCliente()
   setData(response)
  }
  
   useFocusEffect(
    useCallback(() => {
       buscar();
    }, [])
  )
  return(
    <View style={styles.container}>
      <CardUsuario data={data} params={route?.params}  navigation={navigation}/>
      <View style={styles.containerButton}>
        <ButtonIcon
          onPress={() => navigation.navigate("Novo Cliente")}
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
  card:{
    paddingHorizontal:20,
    paddingVertical:10,
    borderBottomColor:"#9999",
    borderBottomWidth:1
  },
  title:{
    fontSize:18,
    paddingBottom:5,
  },
  endereco:{
    fontSize:14,
    color:"#9999" ,
  },

});