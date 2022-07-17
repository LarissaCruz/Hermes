import * as React from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

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
        style={{
          minHeight: 40,
          marginBottom: 10,
          borderBottomWidth: 1,
          borderColor: "#9999",
          paddingVertical: 10,
          fontSize: 16,
        }}
        keyboardType={type}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </>
  );
}
