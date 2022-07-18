import * as React from "react";
import { View } from "react-native";
import { Paragraph } from "react-native-paper";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function HeaderPedido() {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10,
          }}
        >
          <Entypo name="warning" size={10} color="#F5C21A" />
          <Paragraph style={{ color: "#a5a4a9", fontSize: 12, marginLeft: 10 }}>
            Em orçamento
          </Paragraph>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10,
          }}
        >
          <FontAwesome name="circle" size={10} color="#23D084" />
          <Paragraph style={{ color: "#a5a4a9", fontSize: 12, marginLeft: 10 }}>
            Concluido
          </Paragraph>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10,
          }}
        >
          <FontAwesome5 name="square-full" size={10} color="#FF6C01" />
          <Paragraph style={{ color: "#a5a4a9", fontSize: 12, marginLeft: 10 }}>
            Fatuarado
          </Paragraph>
        </View>
      </View>
    </>
  );
}
