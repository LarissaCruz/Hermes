import * as React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function ButtonNavigation({ children, label, styles }) {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
          paddingVertical: 20,
          paddingHorizontal: 10,
          borderColor: "#F1f1f1",
          borderTopWidth: 1,
          borderBottomWidth: 1,
        },
        styles,
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {children}
        <Text style={{ marginLeft: 10, fontSize: 16, color: "#999999" }}>
          {label}
        </Text>
      </View>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="#999999" />
    </TouchableOpacity>
  );
}
