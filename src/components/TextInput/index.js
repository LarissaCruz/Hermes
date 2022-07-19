import * as React from "react";
import { Text, TextInput } from "react-native";
import { styles } from "./styles";

export default function Input({
  type,
  placeholder,
  label,
  multiline,
  numberOfLines,
}) {
  const [value, onChangeValue] = React.useState(null);
  return (
    <>
      <Text style={{ fontSize: 12, color: "#B0B0B0" }}>{label}</Text>
      <TextInput
        onChangeText={onChangeValue}
        value={value}
        style={styles.input}
        keyboardType={type}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </>
  );
}
