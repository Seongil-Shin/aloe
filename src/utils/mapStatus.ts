export type StatusType = {
   emoji: string;
   color: string;
   icon: string;
};
export function mapPhToIcon(ph: number): StatusType {
   if (ph < 4.0 || ph > 7.5) {
      return {
         emoji: "sentiment-very-dissatisfied",
         color: "red",
         icon: "tint",
      };
   } else if ((ph >= 4.0 && ph < 5.5) || (ph >= 6.5 && ph < 7.5)) {
      return {
         emoji: "sentiment-satisfied",
         color: "orange",
         icon: "tint",
      };
   } else {
      return {
         emoji: "emoji-emotions",
         color: "green",
         icon: "tint",
      };
   }
}

export function mapMoistureToIcon(moisture: number): StatusType {
   if (moisture < 40 || moisture > 80) {
      return {
         emoji: "sentiment-very-dissatisfied",
         color: "red",
         icon: "tint",
      };
   } else if (
      (moisture >= 40 && moisture < 55) ||
      (moisture >= 70 && moisture < 80)
   ) {
      return {
         emoji: "sentiment-satisfied",
         color: "orange",
         icon: "tint",
      };
   } else {
      return {
         emoji: "emoji-emotions",
         color: "green",
         icon: "tint",
      };
   }
}
