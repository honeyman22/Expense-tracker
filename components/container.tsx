// Container.js
import React from "react";
import { View, ScrollView } from "react-native";
import NavigationBar from "./common/navigation-bar";

const Container = ({ children, navigation }: any) => {
  console.log(navigation.header);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>{children}</ScrollView>
      <NavigationBar navigation={navigation} />
    </View>
  );
};

export default Container;
