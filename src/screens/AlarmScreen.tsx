import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { RootTabParamList } from "../../types";
import AlarmContainer from "../alarm/container/AlarmContainer";

function AlarmScreen(props: BottomTabScreenProps<RootTabParamList, "alarm">) {
   return <AlarmContainer {...props} />;
}

export default AlarmScreen;
