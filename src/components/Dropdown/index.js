import * as React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Controller} from 'react-hook-form';

export default function Dropdown({name, control,value, setValue, setItems,data, placeholder, setOpen, Open}) {
  return (
    <Controller
        name={name}
        defaultValue=""
        control={control}
        render={({ field: { onChange } }) => (
            <View style={styles.dropdownGender}>
                <DropDownPicker
                    style={styles.dropdown}
                    open={Open}
                    value={value} 
                    items={data}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder={placeholder}
                    placeholderStyle={styles.placeholderStyles}
                    onChangeValue={onChange}
                    zIndex={3000}
                    zIndexInverse={1000}
                />
            </View>
        )}
    />
   
  );
}
