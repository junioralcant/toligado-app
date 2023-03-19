import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0px 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(18)}px;
  margin: 30px 0px;
`;

export const Form = styled.View`
  align-items: center;
  width: 100%;
`;

export const BoxInput = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const SelectPhoto = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  aling-items: center;
  width: 30%;
  background: ${({ theme }) => theme.colors.text};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const SelectText = styled.Text`
  color: ${({ theme }) => theme.colors.text_label};
`;

export const BoxButton = styled.View`
  position: absolute;
  width: 100%;
  bottom: 30px;
  margin-top: 10px;
`;

export const BoxCameraOrGallery = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 80px;
`;

export const ButtonCameraOrGallery = styled.TouchableOpacity``;
