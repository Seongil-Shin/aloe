import React from "react";
import { StyleSheet, View, Text } from "react-native";

type Props = {};

function CommunityScreen({}: Props) {
   return (
      <View style={styles.container}>
         <Text>CommunityScreen Screen</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },
});

export default CommunityScreen;
