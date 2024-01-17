import React from "react";
import { View, Text } from "react-native";

const DetailedBox = ({ data, navigation }: any) => {
  return (
    <View className=" border border-[#E8E8E8]  flex flex-row items-center justify-between rounded-lg mb-5 w-full px-3 py-3.5  ">
      <View>
        <View className="flex flex-row items-center space-x-3 ">
          <Text className="text-sm font-medium text-[#2B2B2B]">
            Business Expenses
          </Text>
          <Text className="text-xs bg-[#e2d9c8] px-2 py-1.5 rounded-full bg-opacity-10 text-[#EAA221]">
            Not Submitted
          </Text>
        </View>
        <Text className="text-sm mt-2  text-primary-text">$ 202</Text>
        <Text className="text-sm mt-2 text-[#2B2B2B]">
          12/12/2022 | 1 expense
        </Text>
      </View>
      <Text className="text-sm font-medium text-[#FE3A82] ">View More</Text>
    </View>
  );
};

export default DetailedBox;
