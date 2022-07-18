import * as React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { FontAwesome5, FontAwesome, Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Divider, Card, Title, Paragraph } from "react-native-paper";

export default function CardPedido({}) {
  return (
    <>
      <Paragraph style={{ marginVertical: 15, color: "#a5a4a9" }}>
        Quinta 14 de junho de 2022
      </Paragraph>
      <Card style={{ paddingHorizontal: 0 }}>
        <Card.Content style={{ paddingTop: 5, paddingHorizontal: 0 }}>
          <Card.Content
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 0,
              paddingTop: 0,
              paddingBottom: 5,
              paddingHorizontal: 10,
              borderBottomColor: "#F3F3F3",
              borderBottomWidth: 1,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome5 name="check-double" size={15} color="#158cdc" />
              <Title
                style={{
                  fontSize: 16,
                  marginLeft: 5,
                  color: "#158cdc",
                }}
              >
                Pedido #1
              </Title>
            </View>
            <FontAwesome name="circle" size={10} color="#23D084" />
          </Card.Content>

          <Card.Content
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingTop: 10,
            }}
          >
            <Entypo name="home" size={15} color="#A8A8A8" />
            <Paragraph style={{ marginLeft: 5, color: "#A8A8A8" }}>
              Supermercado de Bairro [exemplo]
            </Paragraph>
          </Card.Content>
          <Card.Content
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <Entypo name="briefcase" size={15} color="#A8A8A8" />
            <Paragraph style={{ marginLeft: 5, color: "#A8A8A8" }}>
              Card content
            </Paragraph>
          </Card.Content>
          <Card.Content
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingBottom: 10,
              borderBottomColor: "#F3F3F3",
              borderBottomWidth: 1,
            }}
          >
            <FontAwesome5 name="pager" size={15} color="#A8A8A8" />
            <Paragraph style={{ marginLeft: 5, color: "#A8A8A8" }}>
              Cartão
            </Paragraph>
          </Card.Content>
          <Card.Content
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingTop: 10,
            }}
          >
            <MaterialIcons name="monetization-on" size={16} color="#23D084" />
            <Paragraph style={{ marginLeft: 5, fontWeight: "bold" }}>
              R$ 97,73
            </Paragraph>
          </Card.Content>
        </Card.Content>
      </Card>
    </>
  );
}
