import React from "react";
import styled from "styled-components/native";
import { kar, lentil } from "../../assets/images";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import CustomText from "./CustomText";

const SpaceBetween = styled.View<{ mb?: number }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ mb }) => mb || 0}px;
`;

const Container = styled.View<{ mt?: number }>`
  margin-top: ${({ mt }) => mt || 0}px;
`;

const PopularWrap = styled.View<{
  bgColor?: string;
}>`
  height: 183px;
  width: 47%;
  background-color: ${({ bgColor }) => bgColor || Colors?.black};
  border-radius: 25px;
  padding-top: 19px;
  padding-left: 8px;
  positio: relative;
  overflow: hidden;
`;

const Image = styled.Image`
  height: 118px;
  width: 133px;
  position: absolute;
  right: -40px;
  bottom: -20px;
`;

const Popular = (): JSX.Element => {
  return (
    <Container mt={27}>
      <SpaceBetween mb={14}>
        <CustomText
          fontSize={24}
          fontWeight="700"
          fontFamily={Fonts?.UrbanistSemiBold}
          color={Colors?.black}
        >
          Popular 🔥
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

      <SpaceBetween>
        <PopularWrap bgColor={Colors?.lightBlue}>
          <CustomText
            fontSize={20}
            fontWeight="700"
            fontFamily={Fonts?.UrbanistSemiBold}
            color={Colors?.black}
          >
            Lentil
          </CustomText>

          <Image source={lentil} resizeMode="contain" />
        </PopularWrap>
        <PopularWrap bgColor={Colors?.lightPink}>
          <CustomText
            fontSize={20}
            fontWeight="700"
            fontFamily={Fonts?.UrbanistSemiBold}
            color={Colors?.black}
          >
            with vegetables
          </CustomText>
          <Image source={kar} resizeMode="contain" />
        </PopularWrap>
      </SpaceBetween>
    </Container>
  );
};

export default Popular;
