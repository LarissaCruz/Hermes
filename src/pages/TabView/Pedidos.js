import * as React from "react";
import { View, Text, Touchable } from "react-native";
import { Divider, Card, Title, Paragraph } from "react-native-paper";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Octicons } from "@expo/vector-icons";

export default function Pedido() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F0EFF4", padding: 10 }}>
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
      <Divider />
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
      <View
        style={{
          position: "absolute",
          bottom: 20,
          right: 10,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: 55,
            height: 55,
            backgroundColor: "#000",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "black",
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 10,
            elevation: 3,
          }}
        >
          <Octicons name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
