import { Text } from "react-native";
import React from "react";
import SafeAreaWrap from "../components/SafeAreaWrap";
import Colors from "../constants/Colors";

const HomePage = () => {
  return (
    <SafeAreaWrap safeAreaBg={Colors?.bgColor} bg={Colors?.bgColor}>
      <Text>HomePage</Text>
    </SafeAreaWrap>
  );
};

export default HomePage;
