import * as React from "react";
import {  Text } from "react-native";


export default function Label({text}) {
  return (
   <Text style={{ fontSize: 12, color: "#B0B0B0" }}>{text}</Text>
  );
}
