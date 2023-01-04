import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from '../../../../node_modules/react-native-iphone-x-helper/index';

type ProsInputText = {
  isFocused: boolean;
};

export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background_secondary};
  padding: 0px 24px;
`;

export const Content = styled.View`
  background: red;
`;

export const BoxGirl = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Girl = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 320px;
  height: 300px;
`;

export const Form = styled.View``;

export const Input = styled.View``;

export const Label = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_label};
  margin-bottom: 4px;
`;

export const InputText = styled.TextInput<ProsInputText>`
  width: 100%;
  height: 55px;
  border-radius: 10px;
  padding-left: 15px;

  ${({ isFocused, theme }) =>
    isFocused
      ? css`
          border: 1px ${theme.colors.title};
        `
      : css`
          border: 1px ${theme.colors.text_label};
        `}
`;

export const BoxButton = styled.View`
  margin-top: 15px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background_primary};
  width: 100%;
  height: 55px;
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const BoxLogo = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100px;
  height: 40px;
`;
