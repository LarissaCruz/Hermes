import * as React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export default function ContainerSection({ children, title }) {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
    </View>
  );
}
