import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

type ProsInputText = {
  isFocused: boolean;
};

export const BoxInput = styled.View``;

export const Label = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_label};
  margin-bottom: 4px;
`;

export const InputText = styled.TextInput<ProsInputText>`
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
