import React from "react";
import { StatusBar } from "expo-status-bar";

import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./Navigation";

export default function App() {
   return (
      <SafeAreaProvider style={{ flex: 1 }}>
         <SafeAreaView style={{ flex: 1 }}>
            <Navigation />
            <StatusBar style="auto" />
         </SafeAreaView>
      </SafeAreaProvider>
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
