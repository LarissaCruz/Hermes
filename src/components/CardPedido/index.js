import * as React from "react";
import { View } from "react-native";
import { FontAwesome5, FontAwesome, Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Card, Title, Paragraph } from "react-native-paper";
import { styles } from "./styles";

export default function CardPedido({}) {
  return (
    <>
      <Paragraph style={styles.labelDate}>Quinta 14 de junho de 2022</Paragraph>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Card.Content style={styles.cardContentHeader}>
            <View style={styles.viewTitle}>
              <FontAwesome5 name="check-double" size={15} color="#158cdc" />
              <Title style={styles.title}>Pedido #1</Title>
            </View>
            <FontAwesome name="circle" size={10} color="#23D084" />
          </Card.Content>

          <Card.Content style={styles.cardContentDescription}>
            <Entypo name="home" size={15} color="#A8A8A8" />
            <Paragraph style={{ marginLeft: 5, color: "#A8A8A8" }}>
              Supermercado de Bairro [exemplo]
            </Paragraph>
          </Card.Content>
          <Card.Content
            style={[
              styles.cardContentDescription,
              {
                paddingTop: 0,
              },
            ]}
          >
            <Entypo name="briefcase" size={15} color="#A8A8A8" />
            <Paragraph style={styles.label}>Card content</Paragraph>
          </Card.Content>
          <Card.Content
            style={[
              styles.cardContentDescription,
              {
                borderBottomColor: "#F3F3F3",
                borderBottomWidth: 1,
              },
            ]}
          >
            <FontAwesome5 name="pager" size={15} color="#A8A8A8" />
            <Paragraph style={styles.label}>Cartão</Paragraph>
          </Card.Content>
          <Card.Content style={styles.cardContentDescription}>
            <MaterialIcons name="monetization-on" size={16} color="#23D084" />
            <Paragraph style={styles.labelPrice}>R$ 97,73</Paragraph>
          </Card.Content>
        </Card.Content>
      </Card>
    </>
  );
}



