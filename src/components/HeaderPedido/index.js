import * as React from "react";
import { View } from "react-native";
import { Paragraph } from "react-native-paper";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";

export default function HeaderPedido() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerLabel}>
          <Entypo name="warning" size={10} color="#F5C21A" />
          <Paragraph style={styles.label}>Em orçamento</Paragraph>
        </View>

        <View style={styles.containerLabel}>
          <FontAwesome name="circle" size={10} color="#23D084" />
          <Paragraph style={styles.label}>Concluido</Paragraph>
        </View>
        <View style={styles.containerLabel}>
          <FontAwesome5 name="square-full" size={10} color="#FF6C01" />
          <Paragraph style={styles.label}>Fatuarado</Paragraph>
        </View>
      </View>
    </>
  );
}
