import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigationBar from "../components/common/navigation-bar";
import DashboardHeader from "./dashboard/top-header";
import BoxExpenses from "./dashboard/expenses-box";
import DetailedBox from "./dashboard/details-box";

const Home = ({ navigation }: any) => {
  return (
    <ScrollView className="relative bg-white h-screen ">
      <DashboardHeader navigation={navigation} />
      <View className="w-full flex flex-row justify-between px-6 ">
        <BoxExpenses />
        <BoxExpenses />
      </View>
      <View className="w-full mt-8  flex flex-col space-y-10 px-6 ">
        {Array(10)
          .fill("_")
          .map(() => (
            <DetailedBox />
          ))}
      </View>
    </ScrollView>
  );
};

export default Home;
