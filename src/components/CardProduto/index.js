import * as React from "react";
import { View, Text, Image } from "react-native";
import Button from "../Button";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

export default function CardProduto() {
  return (
    <View style={styles.card}>
      <View style={styles.containerCard}>
        <View style={styles.containerDescription}>
          <Image
            style={styles.image}
            source={require("../../../assets/produto.png")}
          />
          <Text>Arroz Pacote 1kg exemplo</Text>
        </View>

        <Text style={styles.label}>0</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.containerPreco}>
          <Text style={styles.labelPreco}>R$ 2,21</Text>
          <MaterialIcons name="monetization-on" size={16} color="#23D084" />
        </View>

        <View style={styles.containerButton}>
          <Button
            stylesButton={[
              styles.button,
              {
                backgroundColor: "#97A9B7",
              },
            ]}
          >
            <AntDesign name="minus" size={24} color="#fff" />
          </Button>
          <Button stylesButton={styles.button}>
            <AntDesign name="plus" size={24} color="#fff" />
          </Button>
        </View>
      </View>
    </View>
  );
}
