import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { FireSvg, LeafSvg, RecycleSvg, StockSvg } from "../../assets/svg";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import CustomText from "./CustomText";

const Wrap = styled.TouchableOpacity<{
  ml?: number;
}>`
  flex-direction: row;
  align-items: center;
  padding-vertical: 5px;
  background-color: ${Colors?.white};
  padding-left: 6px;
  padding-right: 11px;
  border-radius: 11px;
  align-self: flex-start;
  margin-right: 13px;
  margin-left: ${({ ml }) => ml || 0}px;
`;

const CategoryBtns = (): JSX.Element => {
  const btnArray = [
    {
      icon: <StockSvg />,
      text: "Discount",
    },
    {
      icon: <FireSvg />,
      text: "Popular",
    },
    {
      icon: <LeafSvg />,
      text: "Vegan",
    },
    {
      icon: <RecycleSvg />,
      text: "Recycle",
    },
  ];
  return (
    <View style={{ marginTop: 31 }}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {btnArray?.map((item, index) => {
          return (
            <Wrap
              ml={index === 0 ? 14 : 0}
              key={index}
              style={{
                shadowColor: "rgba(0, 0, 0, 0.4)",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
              }}
            >
              {item?.icon}
              <CustomText
                fontWeight="600"
                fontFamily={Fonts?.UrbanistMedium}
                fontSize={12}
                left={8}
              >
                {item?.text}
              </CustomText>
            </Wrap>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoryBtns;
