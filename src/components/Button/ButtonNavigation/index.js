import * as React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

export default function ButtonNavigation({ children, label, stylesConatiner }) {
  return (
    <TouchableOpacity style={[styles.button, stylesConatiner]}>
      <View style={styles.container}>
        {children}
        <Text style={styles.label}>{label}</Text>
      </View>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="#999999" />
    </TouchableOpacity>
  );
}
