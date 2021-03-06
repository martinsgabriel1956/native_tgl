import styled from "styled-components/native";
import colors from "../../utils/colors";

export const Container = styled.View`
  margin-left: 10px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const BetBar = styled.View`
  width: 6px;
  height: 96px;
  margin-left: ${props => props.inHomePage ? '-10' : '-6'}px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
`;

export const Numbers = styled.Text`
  margin-left: 16px;
  margin-right: 12px;
  font-size: 16px;
  color: ${colors.title};
  font-weight: bold;
  font-style: italic;
  
`;

export const BetInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BetInfoText = styled.Text`
  margin-left: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-right: 18px;
  font-size: 14px;
  color: ${colors.text};
  font-style: italic;
`;

export const Price = styled.Text`
  font-style: normal;
`;

export const BetGame = styled.Text`
  margin-left: 16px;
  font-size: 18px;
  text-transform: capitalize;
  font-weight: bold;
  color: ${(props) => props.color};
`;

