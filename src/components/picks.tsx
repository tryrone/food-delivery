import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import styled from "styled-components/native";
import { kar, lentil, vegan } from "../../assets/images";
import {
  LikeSvg,
  ShoppingBagSvg,
  StarSvg,
  TimeSvg,
  UnlikeSvg,
} from "../../assets/svg";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import { ScreenDefaultProps } from "../types";
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

const CardWrap = styled.TouchableOpacity`
  padding-horizontal: 12px;
  padding-vertical: 16px;
  background-color: ${Colors?.lightGrey};
  border-radius: 25px;
  width: 222px;
  position: relative;
  margin-right: 80px;
`;

const FoodImage = styled.Image`
  height: 190px;
  width: 191px;
  position: absolute;
  top: -30px;
  right: -50px;
`;

const Row = styled.View<{ mt?: number }>`
  flex-direction: row;
  align-items: center;
  margin-top: ${({ mt }) => mt || 0}px;
`;

const BtnWrap = styled.TouchableOpacity<{ mr?: number }>`
  height: 38px;
  width: 40px;
  background-color: ${Colors?.white};
  border-radius: 11px;
  margin-right: ${({ mr }) => mr || 0}px;
  justify-content: center;
  align-items: center;
`;

export type CardProps = {
  name?: string;
  image: number;
  id: string;
  goToDetail?: () => void;
};

const Card = ({ name, image, goToDetail, id }: CardProps): JSX.Element => {
  const [liked, setLiked] = useState(false);
  return (
    <CardWrap onPress={goToDetail}>
      <View style={{ marginLeft: 17, alignContent: "center" }}>
        <StarSvg style={{ position: "relative", left: 4 }} />
        <CustomText
          fontSize={20}
          fontWeight="700"
          color={Colors?.grey_3}
          fontFamily={Fonts?.UrbanistSemiBold}
        >
          4.7
        </CustomText>
      </View>

      <SharedElement id={id}>
        <FoodImage source={image} resizeMode="contain" />
      </SharedElement>

      <Row mt={141}>
        <TimeSvg />
        <CustomText
          fontSize={12}
          fontWeight="600"
          left={3}
          color={Colors?.grey_3}
          fontFamily={Fonts?.UrbanistBold}
        >
          25 mins.
        </CustomText>
      </Row>

      <SpaceBetween style={{ marginTop: 8 }}>
        <View>
          <CustomText
            fontSize={20}
            fontWeight="700"
            color={Colors?.black}
            fontFamily={Fonts?.UrbanistBold}
          >
            {name}
          </CustomText>
          <CustomText
            fontSize={20}
            top={4}
            fontWeight="700"
            color={Colors?.black}
            fontFamily={Fonts?.UrbanistBold}
          >
            50 TL
          </CustomText>
        </View>

        <Row>
          <BtnWrap onPress={() => setLiked(!liked)} mr={13}>
            {liked ? <LikeSvg /> : <UnlikeSvg />}
          </BtnWrap>
          <BtnWrap>
            <ShoppingBagSvg />
          </BtnWrap>
        </Row>
      </SpaceBetween>
    </CardWrap>
  );
};

const Picks = ({ navigation }: ScreenDefaultProps): JSX.Element => {
  const pickData = [
    {
      image: kar,
      name: "Mixed",
      id: "image1",
    },
    {
      image: lentil,
      name: "Lentil",
      id: "image2",
    },
    {
      image: vegan,
      name: "Veges",
      id: "image3",
    },
  ];
  return (
    <Container mt={28}>
      <SpaceBetween mb={34}>
        <CustomText
          fontSize={24}
          fontWeight="700"
          fontFamily={Fonts?.UrbanistSemiBold}
          color={Colors?.black}
        >
          Our Picks for You
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
      <ScrollView
        horizontal
        style={{ overflow: "visible" }}
        showsHorizontalScrollIndicator={false}
      >
        {pickData?.map((item, index) => (
          <Card
            key={index}
            name={item?.name}
            goToDetail={() => navigation?.navigate("dishDetail", { item })}
            image={item?.image}
            id={item?.id}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Picks;
