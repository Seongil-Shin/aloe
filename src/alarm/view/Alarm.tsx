import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Button, Icon, ListItem } from "react-native-elements";
import { AlarmDataType } from "../../../types";
import { data } from "../tempData";

type Props = {};

function Alarm({}: Props) {
   const renderItem = ({
      item,
      index,
   }: {
      item: AlarmDataType;
      index: number;
   }) => {
      return (
         <View style={styles.alarmContainer}>
            <ListItem.Swipeable
               containerStyle={styles.alarmContainer}
               bottomDivider
               rightContent={
                  <Button
                     containerStyle={{
                        width: "100%",
                        height: "100%",
                     }}
                     buttonStyle={{
                        width: "100%",
                        height: "100%",
                     }}
                     title="확인"
                     type="clear"
                  />
               }>
               <Icon name={item.name} type={item.type || ""} size={36} />
               <ListItem.Content>
                  <ListItem.Title>{item?.title}</ListItem.Title>
                  <ListItem.Subtitle>{item?.subtitle}</ListItem.Subtitle>
               </ListItem.Content>
            </ListItem.Swipeable>
         </View>
      );
   };
   return (
      <View style={styles.container}>
         <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, idx) => `alarm_${idx}`}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   alarmContainer: {
      width: "100%",
   },
   listContainer: {
      width: "100%",
      backgroundColor: "transparent",
   },
});

export default Alarm;
