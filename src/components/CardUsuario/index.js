import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import { View, FlatList, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function CardUsuario({data, params, navigation}) {

  async function  acessar(item){
    console.log('entrei')
    const previousScreen = params?.previousScreen
    
    const select= params?.select
    if (previousScreen && previousScreen=="Pedido"){
      if(select=="cliente"){
        const dado = JSON.stringify(item)
        await AsyncStorage.setItem( "cliente", dado)
       
        navigation.navigate("Orçamento")
      }else{
        const dado = JSON.stringify(item)
        await AsyncStorage.setItem("fornecedor", dado)
        navigation.navigate("Orçamento")
      }
    }else{
      console.log("else")
      null
    }
  }
  return (
    <FlatList
        data={data}
        renderItem={({item, index})=>{
     
          return(
            <TouchableOpacity key={item.id} style={styles.card} onPress={()=>acessar(item)}>
              <Text style={styles.title}>{item?.nomeFantasia} </Text>
              <Text style={styles.endereco}>{item?.cidade}</Text>
              <Text style={styles.endereco}>{item?.razaoSocial}</Text>
            </TouchableOpacity>
          )
        }}
        keyExtractor={item => item.id}
      />
  );
}

const styles = StyleSheet.create({
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