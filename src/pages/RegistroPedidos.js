import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import TextInput from "../components/TextInput";
import { FontAwesome5 } from "@expo/vector-icons";
import ButtonNavigation from "../components/Button/ButtonNavigation";
import Button from "../components/Button";
import ContainerSection from "../components/ContainerSection";
import Chip from "../components/Chip";
import { useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export default function RegistroPedidos({ navigation, route }) {

  const [cliente, setCliente] = React.useState()
  const [fornecedor, setFornecedor] = React.useState()
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
  }
  async function salvarDados(){
    const dadoFornecedor = JSON.parse(await AsyncStorage.getItem("fornecedor"));
    const dadoCliente = JSON.parse(await AsyncStorage.getItem("cliente"));
    setFornecedor(dadoFornecedor);
    setCliente(dadoCliente)

  }
  useFocusEffect(
    React.useCallback(() => {
       salvarDados()
    }, [])
  )

  return (
    <>
      <ScrollView style={styles.container}>
        <ContainerSection>
          <Chip />
          <ButtonNavigation label={!!cliente?.nomeFantasia ? cliente.nomeFantasia : "Selecione o cliente"} OnPress={()=>navigation.navigate('Cliente',{previousScreen: 'Pedido', select:"cliente"})}>
            <FontAwesome5 name="store-alt" size={18} color="black" />
          </ButtonNavigation>
          <ButtonNavigation label={!!fornecedor?.nomeFantasia ? fornecedor.nomeFantasia : "Selecione o Fornecedor"} OnPress={()=>navigation.navigate('Fornecedor',{previousScreen: 'Pedido',select:"fornecedor"})}>
            <FontAwesome5 name="building" size={24} color="black" />
          </ButtonNavigation>
          <Button
            label={"ADICIONAR PRODUTOS"}
            onPress={() => navigation.navigate("Catálogo")}
          />
          <Button
            label={"DEFINIR DESCONTO E ACRÉCIMOS"}
            textStyle={{ color: "#9999" }}
            onPress={() => navigation.navigate("Catálogo")}
            stylesButton={styles.button}
          />
        </ContainerSection>
        <ContainerSection title={"Detalhes"}>
          <TextInput
            control={control}
            name={"data"}
            type={"default"}
            label={"Data emissão"}
            placeholder={"14/07/2022"}
          />
          <TextInput
            control={control}
            name={"tipo"}
            type={"default"}
            label={"Tipo Pedido"}
            placeholder={"Venda"}
          />
          <TextInput
            control={control}
            name={"vendedor"}
            type={"default"}
            label={"Vendedor"}
            placeholder={"larissa"}
          />
          <TextInput  
            control={control}
            name={"contato"} 
            type={"default"} 
            label={"Contato"} 
            placeholder={"----"} />
        </ContainerSection>
        <ContainerSection title={"Entrega"}>
          <TextInput 
            control={control}
            name={"frete"}
            type={"default"} 
            label={"Valor do frete"} 
            placeholder={""} />
          <TextInput
            control={control}
            name={"trasportador"}
            type={"default"}
            label={"Transportadora"}
            placeholder={"-------"}
          />
          <TextInput
            control={control}
            name={"endereco"}
            type={"default"}
            label={"Endereço de Entrega"}
            placeholder={""}
          />
        </ContainerSection>
        <ContainerSection title={"Informações Adicionais "}>
          <TextInput
            control={control}
            name={"info"}
            type={"default"}
            label={""}
            placeholder={""}
            multiline={true}
            numberOfLines={3}
          />
        </ContainerSection>
        <View style={styles.containerButton}>
          <TouchableOpacity style={{ padding: 20 }}>
            <Text style={styles.label}>ENVIAR EMAIL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 20 }}  onPress={handleSubmit(onSubmit)}>
            <Text style={styles.label}>GERAR PEDIDO</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEEF3",
  },
  containerBottomSheet:{
    flex: 1,
    backgroundColor: "transparent",
  },
  button: {
    backgroundColor: "#fff",
    borderColor: "#9999",
    borderWidth: 1,
    marginBottom: 20,
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#9999",
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
