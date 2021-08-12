import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import { AuthText } from "../../components/UI/AuthText";
import { Card } from "../../components/UI/Card";
import { GreenButton } from "../../components/UI/GreenButton";
import { Input } from "../../components/UI/Input";
import { Logo } from "../../components/UI/Logo";
import { PasswordInput } from "../../components/UI/PasswordInput";
import { SingUpButton } from "../../components/UI/SingUpButton";

import { Container, TextBy, ForgetPasswordText } from "./styles";
import { Text } from "react-native";

export function Authentication() {
  return (
    <Container>
      <Logo />
      <AuthText>Authentication</AuthText>
      <Card>
        <Input placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
        <PasswordInput />
        <RectButton>
          <ForgetPasswordText>I forget my password</ForgetPasswordText>
        </RectButton>
        <GreenButton>Log In</GreenButton>
      </Card>
      <SingUpButton />
      <TextBy>Copyright 2021 Luby Software</TextBy>
    </Container>
  );
}
