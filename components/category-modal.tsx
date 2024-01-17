import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { CustomInput } from "./common/custom-input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { categorySchema } from "../schema/login-schema";
//@ts-ignore
import Icon from "react-native-vector-icons/MaterialIcons";
const CategoryModal = ({ open, setOpen }: any) => {
  const {
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(categorySchema),
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
    >
      <Modal
        animationType="fade"
        visible={open}
        onRequestClose={() => {
          setOpen(false);
          reset();
        }}
        transparent={true}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              width: 300,
              padding: 24,
              borderRadius: 8,
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity
              onPress={() => setOpen(false)}
              className="absolute top-2  right-2"
            >
              <Icon name="close" size={24} color="#2B2B2B" />
            </TouchableOpacity>
            <Text className="text-center font-bold text-base text-[#2B2B2B]">
              Add New Category
            </Text>
            <View className="mt-8">
              <CustomInput
                control={control}
                id="category"
                label="Category Name"
                placeholder="Enter category name"
                errors={errors}
              />
            </View>
            <TouchableOpacity
              onPress={() => setOpen(false)}
              className="h-12 bg-primary mt-10 rounded-lg flex items-center justify-center"
            >
              <Text className="text-white text-base font-semibold">Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CategoryModal;
