import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F77737",
    marginBottom: 10,
  },
  top: {
    flexDirection: "row",
    height: 100,
    backgroundColor: "#313030",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    borderBottomWidth: 5,
    borderColor: "white",
  },
  list: {
    width: "90%",
    borderColor: "#330000",
    borderTopWidth: 2,
    paddingTop: 15,
    alignSelf: "center",
  },
  textListItem: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "grey",
  },
});

export default styles;
