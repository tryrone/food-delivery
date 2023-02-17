import React from "react";
import styled from "styled-components/native";
import { blackCup } from "../../assets/images";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import CustomText from "./CustomText";

const SpaceBetween = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.View<{ mt?: number }>`
  margin-top: ${({ mt }) => mt || 0}px;
`;

const BlackBgWrap = styled.View`
  height: 154px;
  width: 100%;
  background-color: ${Colors?.black_2};
  margin-top: 8px;
  border-radius: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 35px;
`;

const ImageWrap = styled.Image`
  height: 100%;
  width: 97.61px;
  flex: 1;
`;

const Discover = (): JSX.Element => {
  return (
    <Container mt={28}>
      <SpaceBetween>
        <CustomText
          fontSize={24}
          fontWeight="700"
          fontFamily={Fonts?.UrbanistSemiBold}
          color={Colors?.black}
        >
          Discover
        </CustomText>
        <CustomText
          fontSize={13}
          fontWeight="700"
          fontFamily={Fonts?.UrbanistSemiBold}
          color={Colors?.grey}
        >
          See All
        </CustomText>
      </SpaceBetween>

      <BlackBgWrap>
        <CustomText
          fontSize={16}
          color={Colors?.blackCream}
          fontWeight="700"
          style={{ flex: 1 }}
          fontFamily={Fonts.UrbanistBold}
        >
          Special for Today In All Soups Don't Miss 50% Discount
        </CustomText>

        <ImageWrap source={blackCup} resizeMode="contain" />
      </BlackBgWrap>
    </Container>
  );
};

export default Discover;
