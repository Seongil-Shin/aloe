import React, { useState, useEffect } from "react";
import { StyleSheet, View, Animated, Pressable, Text } from "react-native";
import LottieView from "lottie-react-native";
import { ViewPager } from "react-native-viewpager-carousel";
import { Icon } from "react-native-elements";
import {
   mapMoistureToIcon,
   mapPhToIcon,
   StatusType,
} from "../../utils/mapStatus";

type Props = {};
type DataType = { url: string; ph: number; moisture: number };

function Home({}: Props) {
   const [lottie, setLottie] = useState(new Array(3));
   const [pressed, setPressed] = useState();
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
                     key: `${idx}`,
                     json: data,
                     ph: item.ph,
                     moisture: item.moisture,
                  })
            );
      });

      Promise.all(promises).then(() => setLottie(array));
   }, []);

   const renderPage = ({ data }: { data: any }) => {
      const phObj: StatusType = mapPhToIcon(data.ph);
      const moistureObj: StatusType = mapMoistureToIcon(data.moisture);
      return (
         <Pressable
            style={styles.pageContainer}
            onPress={() => setPressed(data?.key)}>
            <View style={styles.statusContainer}>
               {pressed === data?.key ? (
                  <Animated.View style={[styles.statusView]}>
                     <View style={styles.singleStatus}>
                        <Icon
                           name={phObj?.emoji}
                           color={phObj?.color}
                           size={40}
                        />
                        <View style={styles.status}>
                           <Text style={{ fontSize: 36 }}>Ph </Text>
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
                  </Animated.View>
               ) : (
                  <></>
               )}
            </View>
            <View style={styles.lottieContainer}>
               {data?.json ? (
                  <LottieView source={data.json} autoPlay loop />
               ) : (
                  <></>
               )}
            </View>
         </Pressable>
      );
   };

   return (
      <View style={styles.container}>
         <ViewPager
            data={lottie}
            renderPage={renderPage}
            containerStyle={{ flex: 1 }}
            contentStyle={styles.pageView}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
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
