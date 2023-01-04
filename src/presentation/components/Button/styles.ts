import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const BoxButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background_primary};

  height: 55px;
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;
