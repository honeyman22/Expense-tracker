import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
import { CustomInput } from "../../components/common/custom-input";
import axios from "axios";
import Container from "../../components/container";
import { useFormik, validateYupSchema } from "formik";
import { loginSchema } from "../../schema/login-schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const resoponse = await axios.post(
        "https://staging-server.annapurnagalleries.com/api/suppliers/login",
        {
          email,
          password,
        }
      );
      navigation.navigate("home");
      console.log(resoponse);
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  console.log(errors);

  return (
    <Container navigation={navigation}>
      <View className="flex flex-col px-6 py-10 space-y-3">
        <Text className="text-2xl font-bold">Welcome,</Text>
        <Text>Login with your employee ID</Text>
        <View className="flex flex-col space-y-5">
          <View className="">
            <CustomInput
              id="username"
              label="Email"
              control={control}
              errors={errors}
              placeholder="Enter You Email"
            />
          </View>
          <View className="">
            <CustomInput
              id="password"
              label="Password"
              control={control}
              errors={errors}
              placeholder="Enter You Email"
            />
          </View>
        </View>
        <View className=" w-full">
          <TouchableOpacity
            className="bg-[#FE3A82] mt-10   h-12 rounded-lg flex items-center justify-center "
            onPress={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <Text className="text-base font-bold text-white ">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default LoginScreen;
