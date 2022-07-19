import * as React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export default function Chip() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLabel}>
        <Text style={styles.label}>Em orçamento</Text>
      </View>
    </View>
  );
}
