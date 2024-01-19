// Container.js
import React from "react";
import { View, ScrollView, ScrollViewBase } from "react-native";
import NavigationBar from "./common/navigation-bar";

const Container = ({ children, navigation, route }: any) => {
  return (
    <View style={{ flex: 1 }} className="h-screen">
      <View className="h-10 bg-white "></View>
      <ScrollView style={{ flex: 1 }}>{children}</ScrollView>
      <NavigationBar navigation={navigation} route={route} />
    </View>
  );
};

export default Container;
