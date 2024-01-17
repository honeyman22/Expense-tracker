import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
//@ts-ignore
import Icon from "react-native-vector-icons/FontAwesome";

const DashboardHeader = ({ navigation }: any) => {
  return (
    <View className="flex flex-row justify-between mx-6 my-10 items-center ">
      <Text className="text-lg text-[#2B2B2B] font-medium">
        {" "}
        Good Morning , Nishan
      </Text>
      <View className="flex flex-row space-x-[20px]">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("home");
          }}
          className="flex flex-col justify-center space-y-2 items-center "
        >
          <Icon name="commenting-o" size={24} color="#2B2B2B" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("home");
          }}
          className="flex flex-col justify-center space-y-2 items-center "
        >
          <Icon name="bell-o" size={24} color="#2B2B2B" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardHeader;
