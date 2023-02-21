import React from "react";
import styled from "styled-components/native";
import Colors from "../constants/Colors";
import CustomText from "./CustomText";
import Fonts from "../constants/Fonts";
import { patternBg, twoCups } from "../../assets/images";

const Wrap = styled.View`
  margin-top: 33px;
  height: 154px;
  background-color: ${Colors?.lemonGreen};
  border-radius: 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
`;

const FlexView = styled.View<{ flexSize?: number }>`
  flex: ${({ flexSize }) => flexSize || 1}px;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
`;

const PatternBg = styled.Image`
  height: 100%;
  width: 106px;
  z-index: 1;
  position: absolute;
  left: 0px;
`;

const SpecialOffers = () => {
  return (
    <Wrap>
      <PatternBg source={patternBg} resizeMode="cover" />
      <FlexView flexSize={50}>
        <CustomText
          fontFamily={Fonts.UrbanistBold}
          fontSize={16}
          fontWeight="600"
        >
          Special for First 5 Orders {"\n"}
          <CustomText
            fontFamily={Fonts.UrbanistBold}
            fontSize={16}
            fontWeight="700"
          >
            In All Chops 30% Discount
          </CustomText>
        </CustomText>
      </FlexView>

      <FlexView>
        <Image source={twoCups} resizeMode="contain" />
      </FlexView>
    </Wrap>
  );
};

export default SpecialOffers;
