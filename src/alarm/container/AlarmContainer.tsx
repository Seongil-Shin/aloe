import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { RootTabParamList } from "../../../types";
import Alarm from "../view/Alarm";

type Props = {};

function AlarmContainer({}: BottomTabScreenProps<RootTabParamList, "alarm">) {
   return <Alarm />;
}

export default AlarmContainer;
