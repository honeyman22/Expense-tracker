import React from "react";
import { View, Text } from "react-native";

const BoxExpenses = () => {
  return (
    <View className=" border rounded-lg w-[154px] p-2.5  ">
      <Text className="text-base  text-primary-text font-medium">5</Text>
      <Text className="text-sm text-[#555]">Expense report created</Text>
    </View>
  );
};

export default BoxExpenses;
