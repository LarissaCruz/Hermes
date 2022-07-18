import * as React from "react";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Octicons } from "@expo/vector-icons";

export default function ButtonIcon({ children, onPress }) {
  return (
    <TouchableOpacity
      style={{
        width: 55,
        height: 55,
        backgroundColor: "#000",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
}
