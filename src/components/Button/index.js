import * as React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function Button({
  label,
  styles,
  textStyle,
  onPress,
  children,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: "black",
          paddingVertical: 18,
          marginRight: 10,
          marginTop: 20,
          borderRadius: 5,
        },
        styles,
      ]}
    >
      {label && (
        <Text
          style={[
            {
              color: "#fff",
              textAlign: "center",
              fontSize: 14,
              fontWeight: "700",
            },
            textStyle,
          ]}
        >
          {label}
        </Text>
      )}
      {children}
    </TouchableOpacity>
  );
}
