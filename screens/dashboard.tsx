import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import DashboardHeader from "../components/dashboard/top-header";
import BoxExpenses from "../components/dashboard/expenses-box";
import DetailedBox from "../components/dashboard/details-box";
import Container from "../components/container";
import axios from "axios";
import CategoryModal from "../components/category-modal";

const Home = ({ navigation, route }: any) => {
  // const [mymovies, setMymovies] = useState([]);
  // const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   axios.get("https://reactnative.dev/movies.json").then((res: any) => {
  //     setMymovies(res?.data?.movies);
  //   });
  // }, []);

  return (
    <Container navigation={navigation} route={route}>
      <DashboardHeader navigation={navigation} />
      <View className="w-full flex flex-row justify-between px-6 ">
        <BoxExpenses />
        <BoxExpenses />
      </View>
      <View className="w-full mt-8  flex flex-col space-y-10 px-6 ">
        {Array(10)
          ?.fill("_")
          ?.map((item: any, i: any) => (
            <DetailedBox key={i} data={item} />
          ))}
      </View>
    </Container>
  );
};

export default Home;
