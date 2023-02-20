import { Platform } from "react-native";
import React from "react";
import { ScreenDefaultProps } from "../types";
import SafeAreaWrap from "../components/SafeAreaWrap";
import Colors from "../constants/Colors";

const DishDetail = ({ navigation }: ScreenDefaultProps): JSX.Element => {
  return (
    <SafeAreaWrap
      safeAreaBg={Colors?.bgColor}
      style={{
        paddingTop: Platform?.select({
          android: 24,
          ios: 0,
        }),
      }}
      bg={Colors?.bgColor}
    >
      <></>
    </SafeAreaWrap>
  );
};

export default DishDetail;
