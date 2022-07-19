import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 0,
  },
  cardContent: {
    paddingTop: 5,
    paddingHorizontal: 0,
  },
  cardContentHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingBottom: 5,
    paddingHorizontal: 10,
    borderBottomColor: "#F3F3F3",
    borderBottomWidth: 1,
    justifyContent: "space-between",
  },
  viewTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    marginLeft: 5,
    color: "#158cdc",
  },
  cardContentDescription: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  labelDate: {
    marginVertical: 15,
    color: "#a5a4a9",
  },
  label: {
    marginLeft: 5,
    color: "#A8A8A8",
  },
  labelPrice: {
    marginLeft: 5,
    fontWeight: "bold",
  },
});
