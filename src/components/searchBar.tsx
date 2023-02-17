import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Colors from "../constants/Colors";
import { SearchSvg, SettingSvg } from "../../assets/svg";
import Fonts from "../constants/Fonts";

const Container = styled.View`
  height: 56px;
  width: 100%;
  background-color: ${Colors?.searchBg};
  margin-top: 36px;
  border-radius: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TextInput = styled.TextInput`
  height: 100%;
  width: 80%;
  margin-left: 18px;
  font-size: 15px;
  font-weight: 400;
  font-family: ${Fonts.UrbanistRegular};
`;

const SearchBar = (): JSX.Element => {
  return (
    <Container>
      <Row>
        <SearchSvg />

        <TextInput placeholder="Search" placeholderTextColor={Colors?.grey} />
      </Row>

      <SettingSvg />
    </Container>
  );
};

export default SearchBar;
