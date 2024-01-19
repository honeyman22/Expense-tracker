import React from "react";
import { Controller } from "react-hook-form";
import { View, Text, TextInput } from "react-native";

interface CustomInputProps {
  errors: any;
  id: string;
  label?: string;
  placeholder?: string;
  control: any;
}

export const CustomInput = ({
  label,
  placeholder,
  id,
  errors,
  control,
}: CustomInputProps) => {
  return (
    <View className="flex flex-col space-y-2 ">
      <Text>{label}</Text>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className="border h-12 px-3 text-sm border-[#E8E8E8] w-full rounded-md"
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
