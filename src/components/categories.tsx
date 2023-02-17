import React from "react";
import styled from "styled-components/native";
import { boxCup, kar, lentil, vegan } from "../../assets/images";
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

const CategoryContainer = styled.View`
  border-radius: 30px;
  background-color: ${Colors?.categoryBg};
  justify-content: center;
  align-items: center;
  padding-horizontal: 12px;
  padding-vertical: 4px;
  align-self: flex-start;
  width: 83px;
`;

const CategoryImage = styled.Image`
  height: 62px;
  width: 62px;
`;

const Categories = (): JSX.Element => {
  const categoryArray = [
    {
      image: vegan,
      text: "Vegan",
    },
    {
      image: lentil,
      text: "Cold",
    },
    {
      image: kar,
      text: "Cream",
    },
    {
      image: boxCup,
      text: "Fast",
    },
  ];

  return (
    <Container mt={16}>
      <SpaceBetween mb={18}>
        <CustomText
          fontSize={24}
          fontWeight="700"
          fontFamily={Fonts?.UrbanistSemiBold}
          color={Colors?.black}
        >
          Categories
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
        {categoryArray?.map((item, index) => {
          return (
            <CategoryContainer key={`${index}`}>
              <CategoryImage source={item?.image} resizeMode="contain" />
              <CustomText
                align="center"
                bottom={3}
                fontFamily={Fonts?.UrbanistBold}
                fontWeight="700"
                fontSize={13}
              >
                {item?.text}
              </CustomText>
            </CategoryContainer>
          );
        })}
      </SpaceBetween>
    </Container>
  );
};

export default Categories;
