import * as React from "react";
import { View, Text, Image } from "react-native";
import Button from "../Button";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export default function CardProduto() {
  return (
    <View style={{ backgroundColor: "#fff", margin: 10, borderRadius: 5 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 100, width: 100, borderTopLeftRadius: 5 }}
            source={require("../../../assets/produto.png")}
          />
          <Text>Arroz Pacote 1kg exemplo</Text>
        </View>

        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            marginRight: 10,
            textAlign: "center",
            minWidth: "30%",
          }}
        >
          0
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#F9FBFA",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "68%",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "#454746", fontWeight: "bold" }}>
            R$ 2,21
          </Text>
          <MaterialIcons name="monetization-on" size={16} color="#23D084" />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            styles={{
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 0,
              backgroundColor: "#97A9B7",
              marginRight: 2,
              marginTop: 0,
            }}
          >
            <AntDesign name="minus" size={24} color="#fff" />
          </Button>
          <Button
            styles={{
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 0,
              marginRight: 0,
              marginTop: 0,
            }}
          >
            <AntDesign name="plus" size={24} color="#fff" />
          </Button>
        </View>
      </View>
    </View>
  );
}
