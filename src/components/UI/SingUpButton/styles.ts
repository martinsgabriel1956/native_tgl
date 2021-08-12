import styled from 'styled-components/native';
import colors from '../../../utils/colors';
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SingUpText = styled.Text`
  color: ${colors.title};
  font-weight: bold;
  font-size: 32px;
  font-style: italic;
  font-family: sans-serif;
  margin-right: 14px;
`;
