import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background_secondary};
  padding: 0 30px;
`;

export const BoxButtons = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  background: ${({ theme }) => theme.colors.title};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 80%;
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  height: 100px;
  width: 100px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  text-align: center;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;
