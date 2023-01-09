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
import { useForm} from "react-hook-form";
import {criarUsuario} from "../service/requisicoes/clientes"
import { adicionarCliente } from "../service/storageSQLite/clientes";

export default function RegistroCliente({ navigation }) {
  const { control, handleSubmit, formState: { errors } } = useForm();
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
    
    const [Open, setOpen] = React.useState(false);
    const [OpenUF, setOpenUF] = React.useState(false);

    const onSubmit = async (data) => {
    //  const response= await criarUsuario(data)
    //  if(response == "sucesso"){
    //    console.log(data);
    //  }
    //  else{
    //     console.log(response);
    //  }
    await adicionarCliente(data)
    }

  return (
    <ScrollView style={styles.container}>
      <ContainerSection>
        <Dropdown
          name="Tipo"
          control={control}
          setOpen={setOpen}
          Open={Open}
          data={TipoClient}
          value={TipoClientValue} 
          setValue={setTipoClientValue} 
          setItems={setTipoClient} 
          placeholder={'Pessoa Juridica'}
        />
        <TextInput
          control={control}
          name={"CNPJ"}
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
          control={control}
          name={"RazãoSocial"}
          type={"default"}
          placeholder={"Razão Social"}
        />
        <TextInput
          control={control}
          name={"NomeFantasia"}
          type={"default"}
          placeholder={"Nome Fantasia"}
        />
        <TextInput
          control={control}
          name={"IEstadual"}
          type={"default"}
          placeholder={"Inscrição Estadual"}
        />
        <TextInput 
          control={control}
          name={"Sulframa"}
          type={"default"} 
          placeholder={"Sulframa"} 
        />
      
      
        <TextInput 
          control={control}
          name={"email"}
          type={"default"} 
          placeholder={"Novo email"} 
        />
        <TextInput
          control={control}
          name={"telefone"}
          type={"default"}
          placeholder={"Novo telefone"}
        />
        <TextInput
          control={control}
          name={"Endereco"}
          type={"default"}
          placeholder={"Endereço"}
        />
          <TextInput
            control={control}
            name={"Numero"}
            type={"default"}
            placeholder={"Numero"}
        />
          <TextInput
            control={control}
            name={"Complemento"}
            type={"default"}
            placeholder={"Complemento"}
        />
        <TextInput
          control={control}
          name={"Bairro"}
          type={"default"}
          placeholder={"Bairro"}
        />
        <TextInput
          control={control}
          name={"Cidade"}
          type={"default"}
          placeholder={"Cidade"}
        />
        <Label text={"Estado"}/>
        <Dropdown
          name="UF"
          control={control}
          data={UFClient}
          setOpen={setOpenUF}
          Open={OpenUF}
          value={UFClientValue} 
          setValue={setUFClientValue} 
          setItems={setUFClient} 
          placeholder={'UF'}
        />
       
        <TextInput
          control={control}
          name={"info"}
          type={"default"}
          label={"Informações Adicionais"}
          placeholder={""}
          multiline={true}
          numberOfLines={3}
        />
       <Button
          label={"Salvar"}
          onPress={handleSubmit(onSubmit)}
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
