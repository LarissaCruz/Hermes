import * as React from "react";
import { Text, TextInput } from "react-native";
import Label from "../Label";
import { styles } from "./styles";
import { Controller } from "react-hook-form";

export default function Input({
  type,
  placeholder,
  label,
  multiline,
  control,
  numberOfLines,
  name,

}) {
  return (
    <>
      <Label text={label}/>
       <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
           
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            keyboardType={type}
            placeholder={placeholder}
            multiline={multiline}
            numberOfLines={numberOfLines}
          />
        )}
        name={name}
      />
      
    </>
  );
}
