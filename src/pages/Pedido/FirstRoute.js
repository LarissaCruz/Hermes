import * as React from "react";
import { View, Text, Touchable } from "react-native";
import { Divider, Card, Title, Paragraph } from "react-native-paper";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Octicons } from "@expo/vector-icons";
import CardPedido from "../../components/CardPedido";
import HeaderPedido from "../../components/HeaderPedido";
import ButtonIcon from "../../components/Button/ButtonIcon";

export default function FirstRoute({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#F0EFF4", padding: 10 }}>
      <HeaderPedido />
      <Divider />
      <CardPedido />
      <View
        style={{
          position: "absolute",
          bottom: 20,
          right: 10,
          alignItems: "center",
        }}
      >
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
