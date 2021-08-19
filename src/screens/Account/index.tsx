import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Feather, AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

import { api } from "../../services/api";

import { Header } from "../../components/UI/Header";
import { ProfileField } from "../../components/UI/ProfileField";

import avatar from "../../assets/avatar.png";

import {
  Container,
  Avatar,
  AvatarContainer,
  EditIconContainer,
  NameText,
  InfoContainer,
  InfoText,
  ProfileFieldIcon,
  IsEditableContainer,
} from "./styles";
import { AccountInput } from "../../components/UI/AccountInput";
import { AccountInputPassword } from "../../components/UI/AccountInputPassword";

export function Account() {
  const [inputName, setInputName] = useState<string>();
  const [inputEmail, setInputEmail] = useState<string>();
  const [inputPassword, setInputPassword] = useState<string>();

  const [profileName, setProfileName] = useState<string>();
  const [profileEmail, setProfileEmail] = useState<string>();

  const [isEditable, setIsEditable] = useState(false);
  const [token, setToken] = useState<string>();

  async function getDate() {
    const user = await AsyncStorage.getItem("token");

    if (user) setToken(user);
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  function handleEdit() {
    setIsEditable(true);
  }

  function handleCancelEdit() {
    setIsEditable(false);
  }

  function handleUpdateData() {
    const isInvalid = !inputEmail || !inputName || !inputPassword;

    if (isInvalid)
      Toast.show({
        type: "error",
        text1: "Hey",
        text2: "Please fill all the fields",
      });

    api
      .put(
        "/users",
        {
          name: inputName,
          email: inputEmail,
          password: inputPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() =>
        Toast.show({
          type: "success",
          text1: "Hey",
          text2: "You have successfully updated your profile",
        })
      )
      .catch((err) =>
        Toast.show({
          type: "error",
          text1: "Hey",
          text2: "Something went wrong, please check all the fields",
        })
      );
  }

  useEffect(() => {
    getDate();

    api.get("/user", config).then((res) => {
      setProfileName(res.data.name);
      setProfileEmail(res.data.email);
    });
  }, [handleUpdateData]);

  return (
    <Container behavior="position" enabled>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <Header />
      <AvatarContainer>
        <Avatar source={avatar} />

        {!isEditable ? (
          <View>
            <EditIconContainer onPress={handleEdit}>
              <Feather name="edit" size={32} color="white" />
            </EditIconContainer>
          </View>
        ) : (
          <IsEditableContainer>
            <EditIconContainer
              onPress={handleCancelEdit}
              style={{
                backgroundColor: "red",
              }}
            >
              <AntDesign name="close" size={32} color="white" />
            </EditIconContainer>
            <EditIconContainer onPress={handleUpdateData}>
              <AntDesign name="check" size={32} color="white" />
            </EditIconContainer>
          </IsEditableContainer>
        )}
      </AvatarContainer>
      <NameText>{profileName}</NameText>
      <InfoContainer>
        <InfoText>{isEditable ? "Edit Info:" : "Info:"}</InfoText>
        {isEditable ? (
          <>
            <ScrollView>
              <ProfileFieldIcon>
                <AntDesign name="user" size={28} color="white" />
              </ProfileFieldIcon>
              <AccountInput
                placeholder="Name"
                keyboardType="default"
                autoCapitalize="words"
                onChangeText={setInputName}
              />
            </ScrollView>
            <View>
              <ProfileFieldIcon>
                <MaterialIcons name="alternate-email" size={28} color="white" />
              </ProfileFieldIcon>
              <AccountInput
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={setInputEmail}
              />
            </View>
            <View>
              <ProfileFieldIcon>
                <Entypo name="key" size={24} color="white" />
              </ProfileFieldIcon>
              <AccountInputPassword onChangeText={setInputPassword} />
            </View>
          </>
        ) : (
          <>
            <View>
              <ProfileFieldIcon>
                <AntDesign name="user" size={28} color="white" />
              </ProfileFieldIcon>
              <ProfileField>{profileName}</ProfileField>
            </View>
            <View>
              <ProfileFieldIcon>
                <MaterialIcons name="alternate-email" size={28} color="white" />
              </ProfileFieldIcon>
              <ProfileField>{profileEmail}</ProfileField>
            </View>
          </>
        )}
      </InfoContainer>
    </Container>
  );
}
