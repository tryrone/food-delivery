import { ScrollView, Text } from "react-native";
import React from "react";
import SafeAreaWrap from "../components/SafeAreaWrap";
import Colors from "../constants/Colors";
import CustomText from "../components/CustomText";
import Fonts from "../constants/Fonts";
import styled from "styled-components/native";
import SearchBar from "../components/searchBar";
import Discover from "../components/discover";
import Categories from "../components/categories";
import Popular from "../components/popular";
import SpecialOffers from "../components/specialOffers";
import Picks from "../components/picks";
import CategoryBtns from "../components/categoryBtns";
import AllChops from "../components/allChops";
import { useNavigation } from "@react-navigation/native";
import { ScreenDefaultProps } from "../types";

const SpacedRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ProfileImage = styled.Image`
  height: 55px;
  width: 55px;
  border-radius: ${55 / 2}px
  border-width: 1px;
  border-color: ${Colors?.borderColor};
`;

const HomePage = ({ navigation }: ScreenDefaultProps) => {
  const placeholderImage =
    "https://st4.depositphotos.com/4157265/41100/i/450/depositphotos_411005388-stock-photo-profile-picture-of-smiling-30s.jpg";
  return (
    <SafeAreaWrap
      style={{ paddingHorizontal: 12, paddingTop: 21 }}
      safeAreaBg={Colors?.bgColor}
      bg={Colors?.bgColor}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomText
          color={Colors?.grey}
          fontSize={13}
          fontWeight="700"
          fontFamily={Fonts.UrbanistBold}
        >
          Merhaba Berk
        </CustomText>

        <SpacedRow>
          <CustomText
            color={Colors?.black}
            fontSize={27}
            fontWeight="800"
            fontFamily={Fonts.UrbanistBold}
          >
            To a Hot Soup {"\n"}
            <CustomText
              color={Colors?.grey}
              fontSize={27}
              fontWeight="800"
              fontFamily={Fonts.UrbanistBold}
            >
              What do you say? 🍲
            </CustomText>
          </CustomText>

          <ProfileImage source={{ uri: placeholderImage }} resizeMode="cover" />
        </SpacedRow>

        <SearchBar />
        <Discover />
        <Categories />
        <Popular />
        <SpecialOffers />
        <Picks navigation={navigation} />
        <CategoryBtns />
        <AllChops />
      </ScrollView>
    </SafeAreaWrap>
  );
};

export default HomePage;
