import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import ButtonIcon from "../components/Button/ButtonIcon";
import api from "../service/api";
import { buscaUsuario } from "../service/requisicoes/clientes";
import { buscarCliente } from "../service/storageSQLite/clientes";

export default function Cliente({navigation}) {
  const [data, setData] = useState([])
  async function busca(){
   //const response = await buscaUsuario()
   //if(response){
    //setData(response)
   //}else{
    //console.log("erro")
   //}
   const response = await buscarCliente()
   console.log("response", response)
  }
  useEffect(()=>{
    busca();
  },[])

  return(
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Supermercado do Bairro </Text>
        <Text style={styles.endereco}>São Paulo</Text>
        <Text style={styles.endereco}>Comercio de Genero Alimenticio LTDA</Text>
      </View>
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