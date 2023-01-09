import * as React from "react";
import {
  ScrollView,
  StyleSheet,
} from "react-native";
import Button from "../components/Button";
import ContainerSection from "../components/ContainerSection";
import Dropdown from "../components/Dropdown";
import Label from "../components/Label";
import TextInput from "../components/TextInput";

export default function RegistroFornecedor({ navigation }) {
   const [TipoClientValue, setTipoClientValue] = React.useState(null);
   const [TipoClient, setTipoClient] = React.useState([
        { label: "Pessoa Juridica", value: "Pessoa Juridica" },
        { label: "Pessoa Fisica", value: "Pessoa Fisica" },
    ]);

   const [UFClientValue, setUFClientValue] = React.useState(null);
   const [UFClient, setUFClient] = React.useState([
        { label: "RO", value: "RO" },
        { label: "AC", value: "AC" },
        { label: "AM", value: "AM" },
        { label: "RR", value: "RR" },
        { label: "PA", value: "PA" },
        { label: "AP", value: "AP" },
        { label: "TO", value: "TO" },
        { label: "MA", value: "MA" },
        { label: "PI", value: "PI" },
        { label: "RN", value: "RN" },
        { label: "PB", value: "PB" },
        { label: "PE", value: "PE" },
        { label: "AL", value: "AL" },
        { label: "SE", value: "SE" },
        { label: "BA", value: "BA" },
        { label: "AM", value: "AM" },
        { label: "MG", value: "MG" },
        { label: "ES", value: "ES" },
        { label: "RJ", value: "RJ" },
        { label: "SP", value: "SP" },
        { label: "PR", value: "PR" },
        { label: "SC", value: "SC" },
        { label: "RS", value: "RS" },
        { label: "MS", value: "MS" },
        { label: "MT", value: "MT" },
        { label: "GO", value: "GO" },
        { label: "DF", value: "DF" },
        
    ]);
  return (
    <ScrollView style={styles.container}>
      
      <ContainerSection>
        <Dropdown
          data={TipoClient}
          value={TipoClientValue} 
          setValue={setTipoClientValue} 
          setItems={setTipoClient} 
          placeholder={'Pessoa Juridica'}
        />
        <TextInput
          type={"default"}
          placeholder={"CNPJ"}
        />
        <Button
          textStyle={{fontSize:12, fontWeight:"500"}}
          stylesButton={{width:200, borderRadius:0}}
          label={"PREENCHER DADOS POR CNPJ"}
          onPress={() => navigation.navigate("Catálogo")}
        />
    
        <TextInput
          type={"default"}
          placeholder={"Razão Social"}
        />
        <TextInput
          type={"default"}
          placeholder={"Nome Fantasia"}
        />
        <TextInput
          type={"default"}
          placeholder={"Inscrição Estadual"}
        />
        <TextInput 
          type={"default"} 
          placeholder={"Sulframa"} 
        />
        <TextInput 
          type={"default"} 
          placeholder={"Novo email"} 
        />
        <TextInput
          type={"default"}
          placeholder={"Novo telefone"}
        />
        <TextInput
          type={"default"}
          placeholder={"Endereço"}
        />
          <TextInput
          type={"default"}
          placeholder={"Numero"}
        />
          <TextInput
          type={"default"}
          placeholder={"Complemento"}
        />
        <TextInput
          type={"default"}
          placeholder={"Bairro"}
        />
        <TextInput
          type={"default"}
          placeholder={"Cidade"}
        />
        <Label text={"Estado"}/>
        <Dropdown
          data={UFClient}
          value={UFClientValue} 
          setValue={setUFClientValue} 
          setItems={setUFClient} 
          placeholder={'UF'}
        />
        <Label text={"Informações Adicionais"}/>
        <TextInput
          type={"default"}
          label={""}
          placeholder={""}
          multiline={true}
          numberOfLines={3}
        />
       
      </ContainerSection>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingRight:10,
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
});
