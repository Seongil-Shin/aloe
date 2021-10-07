import React, { useState, useEffect, useMemo, useRef } from "react";
import { StyleSheet, View, Animated, Pressable, Text } from "react-native";
import LottieView from "lottie-react-native";
import { Icon } from "react-native-elements";
import {
   mapMoistureToIcon,
   mapPhToIcon,
   StatusType,
} from "../../utils/mapStatus";
import Carousel from "pinar";

import { GLView } from "expo-gl";
import { onContextCreate } from "../webGl";
import ZSvg from "../zdog/ZSvg";
import ZBox from "../zdog/ZBox";
import { windowLayout } from "../../constants/Size";

type Props = {};
type DataType = { url: string; ph: number; moisture: number };

function Home({}: Props) {
   const [lottie, setLottie] = useState(new Array(3).fill(10));
   const [pressed, setPressed] = useState("");

   const statusOpacity = useRef(new Animated.Value(0)).current;
   useEffect(() => {
      const datas: DataType[] = [
         {
            url: "https://assets2.lottiefiles.com/private_files/lf30_uzc6bf9z.json",
            ph: 6.0,
            moisture: 60,
         },
         {
            url: "https://assets2.lottiefiles.com/packages/lf20_r975XE.json",
            ph: 6.2,
            moisture: 40,
         },
         {
            url: "https://assets10.lottiefiles.com/packages/lf20_fmsfga0i.json",
            ph: 7.0,
            moisture: 20,
         },
      ];

      let array = new Array(datas.length);
      const promises = datas.map(async (item, idx) => {
         await fetch(item.url)
            .then((response) => response.json())
            .then(
               (data) =>
                  (array[idx] = {
                     key: `status_${idx}`,
                     json: data,
                     ph: item.ph,
                     moisture: item.moisture,
                  })
            );
      });

      Promise.all(promises).then(() => setLottie(array));
   }, []);

   const showStatus = (key: string) => {
      setPressed(key);
      statusOpacity.setValue(0);
      Animated.timing(statusOpacity, {
         toValue: 1,
         duration: 1000,
         useNativeDriver: true,
      }).start();
   };

   const renderPage = ({ data, index }: { data: any; index: number }) => {
      const phObj: StatusType = mapPhToIcon(data?.ph);
      const moistureObj: StatusType = mapMoistureToIcon(data?.moisture);
      return (
         <View key={index} style={{ flex: 1 }} collapsable={false}>
            <Pressable
               style={styles.pageContainer}
               onPress={() => showStatus(data?.key)}>
               <View style={styles.statusContainer}>
                  <Animated.View
                     style={[styles.statusView, { opacity: statusOpacity }]}>
                     {pressed === data?.key ? (
                        <>
                           <View style={styles.singleStatus}>
                              <Icon
                                 name={phObj?.emoji}
                                 color={phObj?.color}
                                 size={40}
                              />
                              <View style={styles.status}>
                                 <Text
                                    style={{
                                       fontSize: 36,
                                       color: phObj?.color,
                                    }}>
                                    pH
                                 </Text>
                                 <Text style={{ fontSize: 28 }}>{data.ph}</Text>
                              </View>
                           </View>
                           <View style={styles.singleStatus}>
                              <Icon
                                 name={moistureObj?.emoji}
                                 color={moistureObj?.color}
                                 size={40}
                              />
                              <View style={styles.status}>
                                 <Icon
                                    name={moistureObj?.icon}
                                    color={moistureObj?.color}
                                    type="font-awesome"
                                    size={40}
                                 />
                                 <Text style={{ fontSize: 28 }}>
                                    {data.moisture}%
                                 </Text>
                              </View>
                           </View>
                        </>
                     ) : (
                        <></>
                     )}
                  </Animated.View>
               </View>
               <View style={styles.lottieContainer}>
                  {data?.json ? (
                     <LottieView source={data.json} autoPlay loop />
                  ) : (
                     <></>
                  )}
               </View>
            </Pressable>
         </View>
      );
   };

   const canvas = {
      x: windowLayout.width,
      y: windowLayout.width,
      z: windowLayout.width,
   };
   return (
      <View style={styles.container}>
         <Carousel>
            {useMemo(
               () =>
                  lottie.map((item, idx) =>
                     renderPage({ data: item, index: idx })
                  ),
               [lottie, pressed]
            )}
            <View key={4} style={{ flex: 1 }} collapsable={false}>
               <GLView
                  style={{
                     width: "100%",
                     height: "100%",
                  }}
                  onContextCreate={onContextCreate}
               />
            </View>
            <View
               key={5}
               style={{ flex: 1, justifyContent: "center" }}
               collapsable={false}>
               <ZSvg canvas={canvas}>
                  <ZBox
                     width={1.3}
                     height={0.5}
                     depth={0.5}
                     front={"#FFC27A"}
                     back={"#7EDAB9"}
                     left={"#45A6E5"}
                     right={"#FE8777"}
                     top={"#B97EDA"}
                     bottom={"#77EEFE"}
                  />
               </ZSvg>
            </View>
         </Carousel>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   pageView: {
      width: "100%",
      height: "100%",
   },
   pageContainer: {
      flex: 1,
   },
   statusContainer: {
      flex: 3,
   },
   statusView: {
      width: "100%",
      height: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
   },
   singleStatus: {
      width: 100,
      justifyContent: "center",
      alignItems: "center",
   },
   status: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
   },
   lottieContainer: {
      flex: 7,
      width: "100%",
      height: "100%",
      alignSelf: "center",
   },
});

export default Home;
