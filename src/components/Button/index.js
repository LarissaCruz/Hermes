import * as React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

export default function Button({
  label,
  stylesButton,
  textStyle,
  onPress,
  children,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, stylesButton]}>
      {label && <Text style={[styles.label, textStyle]}>{label}</Text>}
      {children}
    </TouchableOpacity>
  );
}
