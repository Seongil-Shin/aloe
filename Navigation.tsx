import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";
import AlarmScreen from "./src/screens/AlarmScreen";
import CommunityScreen from "./src/screens/CommunityScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { RootTabParamList } from "./types";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

type Props = {};

function Navigation({}: Props) {
   return (
      <NavigationContainer>
         <BottomTab.Navigator initialRouteName="home">
            <BottomTab.Screen
               name="community"
               component={CommunityScreen}
               options={{
                  headerShown: false,
                  tabBarIcon: () => <Icon name="reorder" />,
               }}
            />
            <BottomTab.Screen
               name="home"
               component={HomeScreen}
               options={{
                  headerShown: false,
                  tabBarIcon: () => <Icon name="home" />,
               }}
            />
            <BottomTab.Screen
               name="alarm"
               component={AlarmScreen}
               options={{
                  headerShown: false,
                  tabBarIcon: () => <Icon name="notifications" />,
               }}
            />
         </BottomTab.Navigator>
      </NavigationContainer>
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

export default Navigation;
