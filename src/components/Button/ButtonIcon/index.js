import * as React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

export default function ButtonIcon({ children, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}
