import * as React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import TextInput from "../components/TextInput";
import { FontAwesome5 } from "@expo/vector-icons";
import ButtonNavigation from "../components/Button/ButtonNavigation";
import Button from "../components/Button";
import ContainerSection from "../components/ContainerSection";
import Chip from "../components/Chip";

export default function RegistroPedidos({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#EFEEF3" }}>
      <ContainerSection>
        <Chip />
        <ButtonNavigation label={"Selecione o cliente"}>
          <FontAwesome5 name="store-alt" size={18} color="black" />
        </ButtonNavigation>
        <ButtonNavigation label={"Selecione o cliente"}>
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
          stylesButton={{
            backgroundColor: "#fff",
            borderColor: "#9999",
            borderWidth: 1,
            marginBottom: 20,
          }}
        />
      </ContainerSection>
      <ContainerSection title={"Detalhes"}>
        <TextInput
          type={"default"}
          label={"Data emissão"}
          placeholder={"14/07/2022"}
        />
        <TextInput
          type={"default"}
          label={"Tipo Pedido"}
          placeholder={"Venda"}
        />
        <TextInput
          type={"default"}
          label={"Vendedor"}
          placeholder={"larissa"}
        />
        <TextInput type={"default"} label={"Contato"} placeholder={"----"} />
      </ContainerSection>
      <ContainerSection title={"Entrega"}>
        <TextInput type={"default"} label={"Valor do frete"} placeholder={""} />
        <TextInput
          type={"default"}
          label={"Transportadora"}
          placeholder={"-------"}
        />
        <TextInput
          type={"default"}
          label={"Endereço de Entrega"}
          placeholder={""}
        />
      </ContainerSection>
      <ContainerSection title={"Informações Adicionais "}>
        <TextInput
          type={"default"}
          label={""}
          placeholder={""}
          multiline={true}
          numberOfLines={3}
        />
      </ContainerSection>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <TouchableOpacity style={{ padding: 20 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", color: "#9999" }}
          >
            ENVIAR EMAIL{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 20 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", color: "#9999" }}
          >
            GERAR PEDIDO
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
