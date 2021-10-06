import React from "react";
import { StyleSheet, View, Text, Dimensions, FlatList } from "react-native";
import { Avatar, Icon, Image, ListItem } from "react-native-elements";
import { InstaDataType } from "../../../types";
import { windowLayout } from "../../constants/Size";

import Carousel from "pinar";

type Props = {};

const datas: InstaDataType[] = [
   {
      avatar:
         "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/UEHMTNLTLU2GPM5REEDSORFZXQ.jpg",
      name: "call____meshin",
      image: "https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/2xEY/image/XwjATX9wymZKOLUUTOf_xtYTWTk.jpg",
      content:
         "식물좋아 식물좋아 화분좋아 식물좋아 식물좋아 식물좋아 화분좋아\
    식물좋아 식물좋아 식물좋아 화분좋아 식물좋아 식물좋아 식물좋아\
    화분좋아 식물좋아 식물좋아 식물좋아 화분좋아 식물좋아 식물좋아\
    식물좋아 화분좋아 식물좋아",
   },
   {
      avatar:
         "https://www.sciencetimes.co.kr/wp-content/uploads/2018/10/fc08a3_ecc89ba4706a4199a9a51be9500037d0mv2_d_1754_2480_s_2.jpg",
      name: "make__meshin32",
      image: "https://lh3.googleusercontent.com/proxy/opZKRxRMkADegu3sQoxSt_so1rOdsPtZz8hGVlbnxqnYZkPTCafBHdJLoyXB-e2rhfoAjs4lKQ1Nw44DuzVuV1OyWqrz4wJUCDL_oKMMGP5s7OkuJY41fQ",
      content:
         "식물좋아 식물좋아 화분좋아 식물좋아 식물좋아 식물좋아 화분좋아\
    식물좋아 식물좋아 식물좋아 화분좋아 식물좋아 식물좋아 식물좋아\
    화분좋아 식물좋아 식물좋아 식물좋아 화분좋아 식물좋아 식물좋아\
    식물좋아 화분좋아 식물좋아",
   },
   {
      avatar: "https://t1.daumcdn.net/cfile/tistory/997E873B5CD6C1CF14",
      name: "howareyou_shin",
      image: "https://tgzzmmgvheix1905536.cdn.ntruss.com/2021/01/4dd0305b502d4f7a8f91891d9e4f5371",
      content:
         "식물좋아 식물좋아 화분좋아 식물좋아 식물좋아 식물좋아 화분좋아\
    식물좋아 식물좋아 식물좋아 화분좋아 식물좋아 식물좋아 식물좋아\
    화분좋아 식물좋아 식물좋아 식물좋아 화분좋아 식물좋아 식물좋아\
    식물좋아 화분좋아 식물좋아",
   },
   {
      avatar: "https://t1.daumcdn.net/cfile/tistory/241EA34A57595A2A0F",
      name: "what_the_fuck",
      image: "https://image.ajunews.com/content/image/2021/04/01/20210401172848819682.jpg",
      content:
         "식물좋아 식물좋아 화분좋아 식물좋아 식물좋아 식물좋아 화분좋아\
    식물좋아 식물좋아 식물좋아 화분좋아 식물좋아 식물좋아 식물좋아\
    화분좋아 식물좋아 식물좋아 식물좋아 화분좋아 식물좋아 식물좋아\
    식물좋아 화분좋아 식물좋아",
   },
];

function Community({}) {
   const renderItem = ({ item }: { item: InstaDataType }) => {
      return (
         <View style={styles.contentContainer}>
            <ListItem containerStyle={styles.headerContainer}>
               <Avatar
                  title="사진"
                  source={{
                     uri: item.avatar,
                  }}
                  rounded
               />
               <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
               </ListItem.Content>
            </ListItem>
            <View style={styles.imageContainer}>
               <Carousel>
                  <Image
                     source={{
                        uri: item.image,
                     }}
                     containerStyle={styles.imageContainer}
                     resizeMode="cover"
                  />
                  <Image
                     source={{
                        uri: item.image,
                     }}
                     containerStyle={styles.imageContainer}
                     resizeMode="cover"
                  />
               </Carousel>
            </View>
            <View style={styles.interfaceContainer}>
               <View style={styles.leftContainer}>
                  <Icon name="favorite-border" size={32} />
                  <Icon name="chat-bubble-outline" size={32} />
                  <Icon name="mail-outline" size={32} />
               </View>
               <Icon name="share" size={32} />
            </View>
            <View style={styles.textContainer}>
               <Text>{item.content}</Text>
            </View>
         </View>
      );
   };
   return (
      <View style={styles.container}>
         <FlatList
            data={datas}
            renderItem={renderItem}
            keyExtractor={(item, index) => `insta_${index}`}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   contentContainer: {
      width: "100%",
      borderBottomWidth: 1,
      borderBottomColor: "gray",
      borderRadius: 20,
   },
   headerContainer: {
      width: "100%",
      flexDirection: "row",
      backgroundColor: "transparent",
   },
   imageContainer: {
      width: "100%",
      height: windowLayout.width,
      backgroundColor: "black",
   },
   interfaceContainer: {
      flexDirection: "row",
      justifyContent: "space-between",

      width: "100%",
      padding: 10,
   },
   leftContainer: {
      flexDirection: "row",
      width: 120,
      justifyContent: "space-between",
   },
   textContainer: {
      width: "100%",
      padding: 10,
   },
});

export default Community;
