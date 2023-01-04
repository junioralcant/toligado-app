import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

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

export const BoxButton = styled.View`
  margin-top: 15px;
`;

export const BoxLogo = styled.View`
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
