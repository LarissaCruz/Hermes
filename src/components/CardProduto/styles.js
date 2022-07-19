import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 5,
  },
  containerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerDescription: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
    borderTopLeftRadius: 5,
  },
  label: {
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 10,
    textAlign: "center",
    minWidth: "30%",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F9FBFA",
  },
  labelPreco: {
    fontSize: 16,
    color: "#454746",
    fontWeight: "bold",
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 0,
    marginRight: 2,
    marginTop: 0,
  },
  containerPreco: {
    flexDirection: "row",
    width: "68%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
