import * as React from "react";
import { View, Text } from "react-native";

export default function ContainerSection({ children, title }) {
  return (
    <View
      style={{
        paddingLeft: 10,
        backgroundColor: "#fff",
        marginBottom: 20,
        paddingBottom: 20,
      }}
    >
      {title && (
        <Text style={{ fontSize: 16, fontWeight: "bold", marginVertical: 15 }}>
          {title}
        </Text>
      )}
      {children}
    </View>
  );
}
