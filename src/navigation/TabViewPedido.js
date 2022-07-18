import * as React from "react";
import { View, useWindowDimensions, Text } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import FirstRoute from "../pages/Pedido/FirstRoute";
import SecondRoute from "../pages/Pedido/SecondRoute";
import { Badge } from "react-native-paper";

export default function TabViewPedido({ navigation }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "TODOS" },
    { key: "second", title: "NÃO ENVIADOS" },
  ]);

  const renderScene = ({ route }) => {
    console.log("ttttttt22", navigation);
    switch (route.key) {
      case "first":
        return <FirstRoute navigation={navigation} />;
      case "second":
        return <SecondRoute navigation={navigation} />;
      default:
        return null;
    }
  };
  const getTabBarIcon = (props) => {
    const { route } = props;

    if (route.key === "first") {
      return (
        <Text
          style={{
            color: "black",
            marginVertical: 10,
            flexDirection: "row",
          }}
        >
          {route.title}
        </Text>
      );
    } else {
      return (
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "black",
              marginVertical: 10,
              marginRight: 5,
              flexDirection: "row",
            }}
          >
            {route.title}
          </Text>
          <Badge style={{ flexDirection: "row", marginVertical: 10 }}>3</Badge>
        </View>
      );
    }
  };
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
          renderLabel={(props) => getTabBarIcon(props)}
          indicatorStyle={{ backgroundColor: "#000", height: 2.5 }}
        />
      )} // <-- add this line
    />
  );
}
