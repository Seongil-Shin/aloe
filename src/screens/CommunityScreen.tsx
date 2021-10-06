import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { RootTabParamList } from "../../types";
import CommunityContainer from "../community/container/CommunityContainer";

function CommunityScreen(
   props: BottomTabScreenProps<RootTabParamList, "community">
) {
   return <CommunityContainer {...props} />;
}

export default CommunityScreen;
