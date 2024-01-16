import React, { useState } from "react";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { CustomInput } from "../../components/common/custom-input";
import axios from "axios";
import NavigationBar from "../../components/common/navigation-bar";
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
  return (
    <SafeAreaView className="relative h-screen">
      <View className="flex flex-col px-6 py-10 space-y-3">
        <Text className="text-2xl font-bold">Welcome,</Text>
        <Text>Login with your employee ID</Text>
        <View className="flex flex-col space-y-5">
          <View className="">
            <CustomInput
              label="Email "
              placeholder="Enter your email"
              setValue={setEmail}
            />
          </View>
          <View className="">
            <CustomInput
              label="Password "
              placeholder="Enter your password"
              setValue={setPassword}
            />
          </View>
        </View>
        <View className=" w-full">
          <TouchableOpacity
            className="bg-[#FE3A82] mt-10   h-12 rounded-lg flex items-center justify-center "
            onPress={() => handleLogin()}
          >
            <Text className="text-base font-bold text-white ">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <NavigationBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default LoginScreen;
