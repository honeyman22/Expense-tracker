import React from "react";
import { View, Text } from "react-native";

const DetailedBox = () => {
  return (
    <View className=" border border-[#E8E8E8] bg-white rounded-lg mb-5 w-full px-3 py-3.5  ">
      <View className="flex flex-row items-center space-x-3 ">
        <Text className="text-sm text-[#555]">Travel Expenses</Text>
        <Text className="text-xs bg-[#e2d9c8] px-2 py-1.5 rounded-full bg-opacity-10 text-[#EAA221]">
          Not Submitted
        </Text>
      </View>
      <Text className="text-base  text-primary-text font-medium">5</Text>
      <Text className="text-sm text-[#555]">Expense report created</Text>
    </View>
  );
};

export default DetailedBox;
