import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { AuthText } from "../../components/UI/AuthText";
import { Card } from "../../components/UI/Card";
import { GreenButton } from "../../components/UI/GreenButton";
import { Input } from "../../components/UI/Input";
import { Logo } from "../../components/UI/Logo";
import { PasswordInput } from "../../components/UI/PasswordInput";
import { SingUpButton } from "../../components/UI/SingUpButton";

import { Container, TextBy, ForgetPasswordText } from "./styles";

export function Authentication() {
  const navigation = useNavigation();

  return (
    <Container>
      <Logo />
      <AuthText>Authentication</AuthText>
      <Card>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <PasswordInput />
        <RectButton onPress={() => navigation.navigate("ResetPassword")}>
          <ForgetPasswordText>I forget my password</ForgetPasswordText>
        </RectButton>
        <RectButton onPress={() => navigation.navigate("TGL")}>
          <GreenButton>Log In</GreenButton>
        </RectButton>
      </Card>
      <SingUpButton onPress={() => navigation.navigate("Registration")} />
      <TextBy>Copyright 2021 Luby Software</TextBy>
    </Container>
  );
}
