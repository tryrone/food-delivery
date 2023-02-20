import React, { useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import {
  LikeSvg,
  LocationPinSvg,
  ShoppingBagSvg,
  StarSvg,
  StockSvg,
  TimeSvg,
  UnlikeSvg,
} from "../../assets/svg";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import CustomText from "./CustomText";
import { LinearGradient } from "expo-linear-gradient";
import { kar, lentil, vegan } from "../../assets/images";

const { width } = Dimensions.get("window");

const SpaceBetween = styled.View<{ mb?: number }>`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: ${({ mb }) => mb || 0}px;
`;

const Container = styled.View<{ mt?: number }>`
  margin-top: ${({ mt }) => mt || 0}px;
`;

const Row = styled.View<{ mt?: number }>`
  flex-direction: row;
  align-items: center;
  margin-top: ${({ mt }) => mt || 0}px;
`;

const ContainerWrap = styled.View`
  height: ${width - 40}px;
  align-self: center;
  width: 130px;
  background-color: ${Colors?.white};
  border-radius: 25px;
  position: relative;
  margin-top: -110px;
  margin-bottom: -70px;
  align-items: center;
`;

const DishImage = styled.Image`
  height: 125px;
  width: 125px;
`;

const BlackWrap = styled.View`
  background-color: ${Colors?.black_2};
  border-radius: 22px;
  height: 154px;
  margin-top: 20px;
  padding: 20px;
  justify-content: center;
`;

interface ChopsCardProps {
  image: number;
  dishName: string;
  rating: number;
  startGradient: string;
}

const ChopsCard = ({
  image,
  dishName,
  rating,
  startGradient,
}: ChopsCardProps): JSX.Element => {
  const elementsRotation = { rotateZ: "270deg" };
  const textsRotation = { rotateZ: "90deg" };

  const [liked, setLiked] = useState(false);
  return (
    <ContainerWrap
      style={{
        transform: [elementsRotation],
        shadowColor: "rgba(0,0,0,0.1)",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <LinearGradient
        colors={[startGradient, Colors?.white, Colors?.white]}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: 1,
          borderRadius: 25,
        }}
      />
      <View
        style={{
          zIndex: 2,
          paddingVertical: 10,
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <View>
          <DishImage
            source={image}
            style={{ transform: [textsRotation] }}
            resizeMode="contain"
          />

          <View
            style={{
              transform: [textsRotation],
              position: "relative",
              left: 10,
              top: "24%",
            }}
          >
            <CustomText
              fontSize={20}
              fontWeight="700"
              numberOfLines={1}
              fontFamily={Fonts?.UrbanistBold}
            >
              {dishName}
            </CustomText>

            <Row mt={2}>
              <CustomText
                fontSize={20}
                fontWeight="700"
                right={7}
                fontFamily={Fonts?.UrbanistBold}
              >
                50 TL
              </CustomText>
              <StockSvg />
            </Row>

            <Row style={{ position: "relative", top: 25 }}>
              <TimeSvg />
              <CustomText
                fontSize={12}
                fontWeight="700"
                left={5}
                color={Colors?.grey}
                fontFamily={Fonts?.UrbanistBold}
              >
                25 mins.
              </CustomText>
            </Row>
          </View>
        </View>

        <View
          style={{
            transform: [textsRotation],
            flex: 1,
            alignItems: "flex-end",
            paddingTop: 20,
            justifyContent: "space-between",
          }}
        >
          <View>
            <StarSvg style={{ position: "relative", left: 5 }} />
            <CustomText
              fontFamily={Fonts?.UrbanistBold}
              fontSize={20}
              top={2}
              fontWeight="700"
              color={Colors?.grey_2}
            >
              {rating}
            </CustomText>
          </View>

          <Row style={{ marginBottom: 22 }}>
            <TouchableOpacity onPress={() => setLiked(!liked)}>
              {liked ? <LikeSvg /> : <UnlikeSvg />}
            </TouchableOpacity>

            <ShoppingBagSvg style={{ marginLeft: 22 }} />
          </Row>
        </View>
      </View>
    </ContainerWrap>
  );
};

const BlackCard = (): JSX.Element => {
  return (
    <BlackWrap>
      <CustomText
        fontSize={16}
        fontWeight="800"
        color={Colors?.white}
        fontFamily={Fonts?.UrbanistBold}
      >
        On Your First {"\n"}Order Gift Cup {"\n"}Don't forget to request :)
      </CustomText>
    </BlackWrap>
  );
};

const AllChops = (): JSX.Element => {
  const chopsArray = [
    {
      img: kar,
      text: "Mixed",
      rating: 4.7,
      startGradient: "rgba(222, 241, 245, 0.623529)",
    },
    {
      img: lentil,
      text: "Lentil",
      rating: 4,
      startGradient: "rgba(170, 227, 169, 0)",
    },
    {
      img: vegan,
      text: "Fennel with Caramelized Onions",
      rating: 4.7,
      startGradient: "rgba(232, 172, 185,0.1)",
    },
  ];

  return (
    <Container mt={28}>
      <SpaceBetween mb={34}>
        <View>
          <CustomText
            fontSize={24}
            fontWeight="700"
            fontFamily={Fonts?.UrbanistBold}
            color={Colors?.black}
          >
            All Chops
          </CustomText>
          <Row mt={5}>
            <LocationPinSvg />
            <CustomText
              left={4}
              fontSize={13}
              fontWeight="700"
              fontFamily={Fonts?.UrbanistSemiBold}
              color={Colors?.grey}
            >
              İstanbul, Ataköy
            </CustomText>
          </Row>
        </View>

        <CustomText
          fontSize={13}
          fontWeight="700"
          fontFamily={Fonts?.UrbanistSemiBold}
          color={Colors?.grey}
        >
          See All
        </CustomText>
      </SpaceBetween>

      {chopsArray?.map((item, index) => {
        return (
          <ChopsCard
            startGradient={item?.startGradient}
            key={index}
            dishName={item?.text}
            image={item?.img}
            rating={item?.rating}
          />
        );
      })}

      <BlackCard />
    </Container>
  );
};

export default AllChops;
