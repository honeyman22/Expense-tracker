import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
//@ts-ignore
import Icon from "react-native-vector-icons/FontAwesome";
//@ts-ignore
import Icon1 from "react-native-vector-icons/MaterialIcons";
const NavigationBar = ({ navigation, route }: any) => {
  return (
    <View className=" relative flex fixed  flex-row bg-white drop-shadow-[0px_-4px_80px_rgba(2,41,100,0.08)]   justify-between w-full h-20 items-center shadow-lg space-x-10 px-10  bottom-0">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("home");
        }}
        className="flex flex-col justify-center space-y-2 items-center "
      >
        <Icon
          name="home"
          size={20}
          color={route?.name === "home" ? "#FE3A82" : "gray"}
        />
        <Text
          className={`text-[#FE3A82] ${
            route?.name === "home" ? "text-[#FE3A82]" : "text-[#555]"
          } text-sm font-medium`}
        >
          Dashboard
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("home");
        }}
        className="flex flex-col justify-center space-y-2 items-center "
      >
        <Icon1 name="settings" size={20} color="#808080" />
        <Text className="text-[#808080] text-sm font-medium">Settings</Text>
      </TouchableOpacity>
      <View className="absolute h-20 w-20 left-[40%]   -top-10 bg-[#e3e3e3] rounded-full flex items-center justify-center border-dashed ">
        <TouchableOpacity
          onPress={() => navigation.navigate("expense-report")}
          className="w-[60px] h-[60px] rounded-full justify-center items-center flex bg-pink-500"
        >
          <Icon1 name="add" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigationBar;
