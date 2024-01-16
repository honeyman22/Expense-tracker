import React from "react";
import { View, Text, TextInput } from "react-native";

interface CustomInputProps {
  label: string;
  setValue: any;
  placeholder: string;
}

export const CustomInput = ({
  label,
  placeholder,
  setValue,
}: CustomInputProps) => {
  return (
    <View className="flex flex-col gap-2 ">
      <Text>{label}</Text>
      <TextInput
        className="border h-12 px-3 text-sm border-[#E8E8E8] w-full rounded-md"
        placeholder={placeholder}
        onChangeText={(text) => {
          setValue(text);
        }}
      />
    </View>
  );
};
