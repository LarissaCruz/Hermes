import * as React from "react";
import { View, useWindowDimensions, Text } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#F0EFF4", padding: 10 }}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 10,
        }}
      >
        <Entypo name="warning" size={10} color="#F5C21A" />
        <Paragraph style={{ color: "#a5a4a9", fontSize: 12, marginLeft: 10 }}>
          Em orçamento
        </Paragraph>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 10,
        }}
      >
        <FontAwesome name="circle" size={10} color="#23D084" />
        <Paragraph style={{ color: "#a5a4a9", fontSize: 12, marginLeft: 10 }}>
          Concluido
        </Paragraph>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 10,
        }}
      >
        <FontAwesome5 name="square-full" size={10} color="#FF6C01" />
        <Paragraph style={{ color: "#a5a4a9", fontSize: 12, marginLeft: 10 }}>
          Fatuarado
        </Paragraph>
      </View>
    </View>
    <Paragraph style={{ marginBottom: 10, color: "#a5a4a9" }}>
      Quinta 14 de junho de 2022
    </Paragraph>

    <Card>
      <Card.Content style={{ paddingTop: 5 }}>
        <Card.Content
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 0,
            paddingTop: 0,
            paddingBottom: 5,
            borderBottomColor: "#F3F3F3",
            borderBottomWidth: 1,
          }}
        >
          <FontAwesome5 name="check-double" size={15} color="#158cdc" />
          <Title style={{ fontSize: 16, marginLeft: 5, color: "#158cdc" }}>
            Pedido #1
          </Title>
        </Card.Content>
        <Card.Content
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 0,
            paddingTop: 10,
          }}
        >
          <Entypo name="home" size={15} color="#A8A8A8" />
          <Paragraph style={{ marginLeft: 5, color: "#A8A8A8" }}>
            Supermercado de Bairro [exemplo]
          </Paragraph>
        </Card.Content>
        <Card.Content
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 0,
          }}
        >
          <Entypo name="briefcase" size={15} color="#A8A8A8" />
          <Paragraph style={{ marginLeft: 5, color: "#A8A8A8" }}>
            Card content
          </Paragraph>
        </Card.Content>
        <Card.Content
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 0,
            paddingBottom: 10,
            borderBottomColor: "#F3F3F3",
            borderBottomWidth: 1,
          }}
        >
          <FontAwesome5 name="pager" size={15} color="#A8A8A8" />
          <Paragraph style={{ marginLeft: 5, color: "#A8A8A8" }}>
            Cartão
          </Paragraph>
        </Card.Content>
        <Card.Content
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 0,
            paddingTop: 10,
          }}
        >
          <MaterialIcons name="monetization-on" size={16} color="#23D084" />
          <Paragraph style={{ marginLeft: 5 }}>R$ 97,73</Paragraph>
        </Card.Content>
      </Card.Content>
    </Card>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#F0EFF4" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewPedido() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "TODOS" },
    { key: "second", title: "NÃO ENVIADOS" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      indicatorStyle={{ backgroundColor: "#000" }}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={{ backgroundColor: "#fff" }}
          renderLabel={({ route, color }) => (
            <Text style={{ color: "black", margin: 8 }}>{route.title}</Text>
          )}
          indicatorStyle={{ backgroundColor: "#000", height: 2.5 }}
        />
      )} // <-- add this line
    />
  );
}
