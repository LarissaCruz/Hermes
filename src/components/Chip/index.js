import * as React from "react";
import { View, Text } from "react-native";

export default function Chip() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
        marginRight: 10,
        marginTop: 15,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          backgroundColor: "#EED24F",
          paddingVertical: 5,
          width: 90,
          borderColor: "#EADE96",
          borderWidth: 1,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "#a48006",
            fontSize: 11,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Em orçamento
        </Text>
      </View>
    </View>
  );
}
