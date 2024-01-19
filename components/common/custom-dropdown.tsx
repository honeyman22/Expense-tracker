import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

interface CustomInputProps {
  errors: any;
  id: string;
  label?: string;
  placeholder?: string;
  control: any;
}
const CustomDropdown = ({
  control,
  errors,
  id,
  label,
  placeholder,
}: CustomInputProps) => {
  const items = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <View className="flex flex-col  space-y-2 ">
      <Text>{label}</Text>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Dropdown
              data={items}
              value={value}
              onChange={onChange}
              labelField="label"
              valueField="value"
              placeholderStyle={{
                padding: 8,
                color: "gray",
                fontWeight: "400",
                fontSize: 14,
              }}
              selectedTextStyle={{
                padding: 8,
                fontWeight: "400",
                fontSize: 14,
              }}
              style={{
                height: 48,
                borderBottomColor: "gray",
                borderRightColor: "gray",
                borderTopColor: "gray",
                borderLeftColor: "gray",
                borderWidth: 0.5,
                borderRadius: 8,
                padding: 3,
              }}
            />
          )}
          name={id}
        />
      </View>

      {errors[`${id}`] && (
        <Text className="text-red-500 text-sm font-normal">
          {errors[`${id}`].message as string}
        </Text>
      )}
    </View>
  );
};

export default CustomDropdown;
