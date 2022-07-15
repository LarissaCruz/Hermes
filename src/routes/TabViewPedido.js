import * as React from "react";
import { View, useWindowDimensions, Text } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import Home from "../pages/Home";
import Cliente from "../pages/Cliente";
import FirstRoute from "../pages/TabView/Pedidos";
import SecondRoute from "../pages/TabView/Pedidos";
import { Badge } from "react-native-paper";

const renderScene = ({ route }) => {
  switch (route.key) {
    case "first":
      return <FirstRoute />;
    case "second":
      return <SecondRoute />;
    default:
      return null;
  }
};
export default function TabViewPedido() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "TODOS" },
    { key: "second", title: "NÃO ENVIADOS" },
  ]);

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
