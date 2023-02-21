import React from "react";
import { ScreenDefaultProps } from "../types";
import SafeAreaWrap from "../components/SafeAreaWrap";
import Colors from "../constants/Colors";
import styled from "styled-components/native";
import {
  BackArrow,
  CheckBoxSvg,
  FireSvg,
  LikeSvg,
  MinusSvg,
  PlusSvg,
  StockSvg,
  TeaSvg,
  UnlikeSvg,
} from "../../assets/svg";
import CustomText from "../components/CustomText";
import Fonts from "../constants/Fonts";
import { kar, lentil, twoCups } from "../../assets/images";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Button from "../components/Button";
import { SharedElement } from "react-navigation-shared-element";
import { CardProps } from "../components/picks";

const NavWrap = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-vertical: 16px;
`;

const LikeWrap = styled.TouchableOpacity`
  padding: 8px;
  border-radius: 11px;
  background-color: ${Colors?.btn_bg};
`;

const ContentWrap = styled.View`
  margin-top: 35px;
  background-color: ${Colors?.white};
  border-radius: 25px;
  padding: 36px;
`;

const Row = styled.View<{
  mt?: number;
}>`
  align-self: center;
  align-items: center;
  flex-direction: row;
  margin-top: ${({ mt }) => mt || 0}px;
`;

const SpacedRow = styled.View<{
  mt?: number;
}>`
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: ${({ mt }) => mt || 0}px;
  width: 100%;
`;
const SuggestedSpacedRow = styled.View<{
  mt?: number;
}>`
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({ mt }) => mt || 0}px;
  margin-bottom: 100px;
  width: 100%;
`;

const DishImage = styled.Image`
  width: 231px;
  height: 229px;
  align-self: center;
  // margin-top: 10px;
`;

const QuantityWrap = styled.TouchableOpacity`
  height: 33px;
  width: 33px;
  justify-content: center;
  align-items: center;
  background-color: ${Colors?.btn_bg};
  border-radius: 11px;
`;

const PillWrap = styled.View`
  flex-direction: row;
  align-items: center;
  padding-vertical: 6px;
  padding-horizontal: 9px;
  border-radius: 20px;
  border: 1px solid ${Colors?.black};
`;

const IconTextWrap = styled.View`
  flex-direction: row;
  align-items: center;
  padding-vertical: 6px;
  padding-horizontal: 9px;
  border-radius: 20px;
  background-color: ${Colors?.white};
  margin-bottom: 15px;
`;

const SuggestedWrap = styled.View<{
  direction?: string;
}>`
  position: relative;
  align-items: center;
  height: 127px;
  min-width: 116px;
  padding-horizontal: 18px;
  padding-vertical: 14px;
  flex-direction: ${({ direction }) => direction || "column"};
  background-color: ${Colors?.lightGrey};
  border-radius: 25px;
  margin-right: 19px;
`;

const SuggestedImage = styled.Image<{
  direction?: string;
}>`
  height: ${({ direction }) => (direction ? 78.95 : 62)}px;
  width: ${({ direction }) => (direction ? 87 : 63)}px;
`;

const AddBtnWrap = styled.TouchableOpacity`
  height: 38px;
  width: 39px;
  background-color: ${Colors?.white};
  border-radius: 11px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -10px;
  right: -15px;
`;

const NavBar = ({ navigation }: ScreenDefaultProps): JSX.Element => {
  return (
    <NavWrap>
      <TouchableOpacity onPress={() => navigation?.goBack()}>
        <BackArrow />
      </TouchableOpacity>

      <CustomText
        fontSize={24}
        fontWeight="700"
        align="center"
        fontFamily={Fonts.UrbanistBold}
      >
        Mixed
      </CustomText>

      <LikeWrap>
        <UnlikeSvg />
      </LikeWrap>
    </NavWrap>
  );
};

type PillsProps = {
  text: string;
};

type IconTextPillsProps = {
  text: string;
  icon: JSX.Element;
};

type CheckboxContProps = {
  text: string;
  unit: string;
  mt?: number;
  unitColor?: string;
};

type SuggestedItemProps = {
  text: string;
  unit: string;
  imgSource: number;
  unitColor?: string;
  direction?: string;
};

const Pills = ({ text }: PillsProps): JSX.Element => {
  return (
    <PillWrap>
      <TeaSvg />
      <CustomText
        fontSize={14}
        fontWeight="800"
        left={5}
        align="center"
        fontFamily={Fonts.UrbanistBold}
      >
        {text}
      </CustomText>
    </PillWrap>
  );
};

const IconTextPills = ({ text, icon }: IconTextPillsProps): JSX.Element => {
  return (
    <IconTextWrap
      style={{
        shadowColor: "rgba(0,0,0,0.3)",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.84,

        elevation: 5,
      }}
    >
      {icon}
      <CustomText
        fontSize={13}
        fontWeight="500"
        left={8}
        align="center"
        fontFamily={Fonts.UrbanistSemiBold}
      >
        {text}
      </CustomText>
    </IconTextWrap>
  );
};

const CheckboxCont = ({
  mt,
  text,
  unit,
  unitColor = Colors?.grey_5,
}: CheckboxContProps): JSX.Element => {
  return (
    <SpacedRow mt={mt}>
      <Row>
        <CheckBoxSvg />
        <CustomText
          fontSize={16}
          fontWeight="600"
          align="left"
          left={14}
          fontFamily={Fonts.UrbanistBold}
          color={Colors?.grey_4}
        >
          {text}
        </CustomText>
      </Row>
      <CustomText
        fontSize={16}
        fontWeight="600"
        align="left"
        left={14}
        fontFamily={Fonts.UrbanistBold}
        color={unitColor}
      >
        {unit}
      </CustomText>
    </SpacedRow>
  );
};

const DishContent = ({ image, id }: CardProps): JSX.Element => {
  return (
    <ContentWrap
      style={{
        shadowColor: "rgba(0,0,0,0.3)",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.84,

        elevation: 5,
      }}
    >
      <CustomText
        fontSize={28}
        fontWeight="800"
        align="center"
        fontFamily={Fonts.UrbanistBold}
      >
        Mixed Soup
      </CustomText>

      <Row mt={8}>
        <CustomText
          fontSize={16}
          right={7}
          fontWeight="800"
          align="center"
          fontFamily={Fonts.UrbanistBold}
        >
          50 TL
        </CustomText>

        <StockSvg />
      </Row>
      <SharedElement id={id}>
        <DishImage source={image} resizeMode="contain" />
      </SharedElement>

      <Row mt={26}>
        <QuantityWrap>
          <MinusSvg />
        </QuantityWrap>

        <CustomText
          fontSize={16}
          fontWeight="800"
          align="center"
          left={14}
          right={14}
          fontFamily={Fonts.UrbanistBold}
        >
          1
        </CustomText>

        <QuantityWrap>
          <PlusSvg />
        </QuantityWrap>
      </Row>

      <SpacedRow mt={33}>
        <Pills text="Kucuk" />
        <Pills text="Orta" />
        <Pills text="Buyuk" />
      </SpacedRow>

      <SpacedRow mt={43}>
        <IconTextPills icon={<StockSvg />} text="İndirim" />
        <IconTextPills icon={<FireSvg />} text="Popüler" />
        <IconTextPills
          icon={<LikeSvg />}
          text="Bu haftanın en çok tercih edileni"
        />
      </SpacedRow>

      <CustomText
        fontSize={13}
        fontWeight="600"
        align="left"
        top={21}
        style={{ lineHeight: "20px" }}
        color={Colors?.grey}
        fontFamily={Fonts.UrbanistBold}
      >
        Çorba, yemeğin en eski ve en yaygın türlerinden biridir. Çorba,
        genellikle tuzlu veya tatlı, sıcak veya soğuk olarak sunulur. Çorba,
        çeşitli malzemeler ve sebzelerle yapılabilir, ancak en yaygın olarak et,
        tavuk, balık veya sebzeler kullanılır. Çorba, ayrıca baharatlar, un, süt
        veya krema gibi malzemelerle zenginleştirilebilir.{" "}
        <CustomText
          fontSize={13}
          fontWeight="600"
          align="left"
          fontFamily={Fonts.UrbanistBold}
        >
          Devamını Oku
        </CustomText>
      </CustomText>

      <CustomText
        fontSize={28}
        top={37}
        fontWeight="800"
        fontFamily={Fonts.UrbanistBold}
      >
        Ekle
      </CustomText>

      <CheckboxCont mt={18} text="Limon" unit="ücretsiz" />
      <CheckboxCont
        mt={18}
        text="Extra Baharat"
        unit="2 TL"
        unitColor={Colors?.black}
      />
    </ContentWrap>
  );
};

const AddBtn = (): JSX.Element => {
  return (
    <AddBtnWrap>
      <PlusSvg />
    </AddBtnWrap>
  );
};

const SuggestedItem = ({
  text,
  unit,
  unitColor = Colors?.black,
  direction,
  imgSource,
}: SuggestedItemProps): JSX.Element => {
  return (
    <SuggestedWrap direction={direction}>
      <SuggestedImage
        direction={direction}
        source={imgSource}
        resizeMode="cover"
      />
      <View>
        <CustomText
          fontSize={13}
          top={3}
          fontWeight="500"
          align="center"
          fontFamily={Fonts.UrbanistRegular}
        >
          {text}
        </CustomText>
        <CustomText
          fontSize={15}
          top={7}
          fontWeight="700"
          align="center"
          color={unitColor}
          fontFamily={Fonts.UrbanistBold}
        >
          {unit}
        </CustomText>
      </View>

      <AddBtn />
    </SuggestedWrap>
  );
};

const SuggestedItemsCont = (): JSX.Element => {
  return (
    <SuggestedSpacedRow mt={23}>
      <SuggestedItem imgSource={lentil} text="Mercimek" unit="70 TL" />
      <SuggestedItem
        imgSource={twoCups}
        text="Chorba Kupa"
        unit="Ücretsiz"
        unitColor={Colors?.green_2}
        direction="row"
      />
    </SuggestedSpacedRow>
  );
};

const ActionBtns = (): JSX.Element => {
  return (
    <SpacedRow
      style={{
        position: "absolute",
        width: "100%",
        bottom: 0,
        backgroundColor: Colors?.white,
        paddingTop: 12,
      }}
    >
      <CustomText
        fontWeight="800"
        fontFamily={Fonts?.UrbanistBold}
        fontSize={24}
      >
        50 TL
      </CustomText>

      <Button
        bgColor={Colors?.black}
        text="Add to Cart"
        textSize={18}
        width="40%"
        fontWeight="800"
        fontFamily={Fonts?.UrbanistBold}
        borderRadius="25px"
        textColor={Colors?.white}
      />
      <Button
        bgColor={Colors?.white}
        text="Check Out"
        textSize={14}
        style={{
          borderWidth: 1,
          borderColor: Colors?.black,
        }}
        width="30%"
        fontWeight="800"
        fontFamily={Fonts?.UrbanistBold}
        borderRadius="25px"
        textColor={Colors?.black}
      />
    </SpacedRow>
  );
};

const DishDetail = ({ navigation, route }: ScreenDefaultProps): JSX.Element => {
  const { item } = route?.params;
  return (
    <SafeAreaWrap
      safeAreaBg={Colors?.bgColor}
      style={{
        paddingHorizontal: 20,
      }}
      bg={Colors?.bgColor}
    >
      <NavBar navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <DishContent image={item?.image} id={item?.id} />
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <SuggestedItemsCont />
        </ScrollView>
      </ScrollView>
      <ActionBtns />
    </SafeAreaWrap>
  );
};

DishDetail.sharedElements = (route) => {
  const { item } = route.params;
  return [item?.id];
};

export default DishDetail;
