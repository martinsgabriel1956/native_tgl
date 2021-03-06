import React from "react";
import { EvilIcons } from "@expo/vector-icons";

import { Text, View } from "react-native";

import {
  Container,
  BetBar,
  Numbers,
  BetInfo,
  BetGame,
  Price,
  BetInfoText,
} from "./styles";
import colors from "../../utils/colors";
import { RectButton } from "react-native-gesture-handler";

interface BetProps {
  numbers: number[] | string;
  price: number;
  type: string;
  color: string;
  date: string;
  deleteRow?: () => void;
  inHomePage?: boolean;
}

export function Bet({
  type,
  price,
  numbers,
  color,
  date,
  deleteRow,
  inHomePage,
}: BetProps) {
  return (
    <Container inHomePage={inHomePage}>
      <BetBar color={color} inHomePage={inHomePage}></BetBar>
      <View>
        <Numbers>{numbers}</Numbers>
        <BetInfo>
          <BetInfoText>
            {date} - <Price>(R${price.toFixed(2).replace(".", ",")})</Price>
          </BetInfoText>
          {inHomePage === false && (
            <RectButton onPress={deleteRow}>
              <EvilIcons name="trash" size={32} color={colors.text} style={{
                marginRight: 26,
              }} />
            </RectButton>
          )}
        </BetInfo>
        <BetGame color={color}>{type}</BetGame>
      </View>
    </Container>
  );
}
