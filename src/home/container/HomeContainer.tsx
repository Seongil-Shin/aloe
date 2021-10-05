import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { RootTabParamList } from "../../../types";
import Home from "../view/Home";

function HomeCantainer({
   navigation,
}: BottomTabScreenProps<RootTabParamList, "home">) {
   return <Home />;
}

export default HomeCantainer;
