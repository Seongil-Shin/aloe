import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { RootTabParamList } from "../../../types";
import Community from "../view/Community";

function CommunityContainer({
   navigation,
}: BottomTabScreenProps<RootTabParamList, "community">) {
   return <Community />;
}

export default CommunityContainer;
