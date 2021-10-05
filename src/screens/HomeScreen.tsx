import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { RootTabParamList } from "../../types";
import HomeCantainer from "../home/container/HomeContainer";

type Props = {};

function HomeScreen(props: BottomTabScreenProps<RootTabParamList, "home">) {
   return <HomeCantainer {...props} />;
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },
});

export default HomeScreen;
