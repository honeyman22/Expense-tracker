import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
//@ts-ignore
import Icon from "react-native-vector-icons/AntDesign";
const NavigationBar = ({ navigation }: any) => {
  return (
    <View className=" flex flex-row bg-white drop-shadow-[0px_-4px_80px_rgba(2,41,100,0.08)]   justify-between w-full h-20 items-center shadow-lg space-x-10 px-10 absolute bottom-0">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("login");
        }}
        className="flex flex-col justify-center space-y-2 items-center "
      >
        <Icon name="home" size={20} color="#FE3A82" />
        <Text className="text-[#FE3A82] text-sm font-medium">Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("home");
        }}
        className="flex flex-col justify-center space-y-2 items-center "
      >
        <Icon name="setting" size={20} color="#808080" />
        <Text className="text-[#808080] text-sm font-medium">Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;
