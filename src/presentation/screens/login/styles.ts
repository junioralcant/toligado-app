import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background_primary};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
`;
