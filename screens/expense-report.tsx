import React from "react";
import { ScrollView, Text, View } from "react-native";
import { CustomInput } from "../components/common/custom-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { expenseSchema } from "../schema/login-schema";
import CustomDropdown from "../components/common/custom-dropdown";
import ImageUploader from "../components/common/custom-file-uploader";

const ExpenseReport = ({ navigation }: any) => {
  const {
    reset,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(expenseSchema),
  });
  console.log(watch("image"));
  return (
    <ScrollView className="bg-white">
      <View className=" mb-5 px-6 flex flex-col space-y-5 ">
        <Text className="text-base font-semibold text-primary-text">
          Add Expense
        </Text>
        <View>
          <CustomInput
            control={control}
            id="title"
            label="Expense Title"
            errors={errors}
            placeholder="Enter Expense Title"
          />
        </View>
        <View>
          <CustomInput
            control={control}
            id="marchantname"
            label="Merchant Name"
            errors={errors}
            placeholder="Enter Merchant Name"
          />
        </View>
        <View>
          <CustomInput
            control={control}
            id="amount"
            label="Amount"
            errors={errors}
            placeholder="Enter Amount"
          />
        </View>
        <View>
          <CustomInput
            control={control}
            id="date"
            label="Date"
            errors={errors}
            placeholder="12/02/2021"
          />
        </View>
        <View>
          <CustomInput
            control={control}
            id="description"
            label="Description"
            errors={errors}
            placeholder="Enter Description"
          />
        </View>
        <View>
          <CustomDropdown
            control={control}
            id="description"
            label="Description"
            errors={errors}
            placeholder="Enter Description"
          />
        </View>
        <View>
          <CustomInput
            control={control}
            id="tax"
            label="VAT Tax"
            errors={errors}
            placeholder="Enter Description"
          />
        </View>
        <View>
          <CustomInput
            control={control}
            id="tax"
            label="VAT Tax"
            errors={errors}
            placeholder="Enter Description"
          />
        </View>
        <View>
          <ImageUploader
            label={"Attach Receipt"}
            setValue={setValue}
            watch={watch}
            id="image"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ExpenseReport;
