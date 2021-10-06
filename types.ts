export type RootTabParamList = {
   community: undefined;
   home: undefined;
   alarm: undefined;
};

export type InstaDataType = {
   avatar: string;
   name: string;
   image: string[];
   content: string;
};

export type AlarmDataType = {
   name: string;
   type?: string;
   title: string;
   subtitle: string;
};
